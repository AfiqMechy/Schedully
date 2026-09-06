export default async function handler(req, res) {
  // Set CORS headers for Vercel Serverless Function
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { base64Data, mimeType, apiKey: clientApiKey } = req.body || {};

    if (!base64Data) {
      return res.status(400).json({ error: 'Missing image data' });
    }

    let envKey = (process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
    const apiKey = (clientApiKey || envKey).trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key not configured. Please set GEMINI_API_KEY in Vercel Environment Variables.' });
    }

    // 1. DYNAMICALLY DISCOVER SUPPORTED MODELS (Default to active production model)
    let candidateModels = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
    let targetModelName = 'gemini-2.5-flash';
    try {
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`, {
        method: 'GET',
        headers: { 'x-goog-api-key': apiKey }
      });
      const listData = await listRes.json();
      if (listData && listData.models) {
        const validModels = listData.models.filter(m => 
          m.supportedGenerationMethods && 
          m.supportedGenerationMethods.includes('generateContent') &&
          m.name.includes('gemini')
        );
        const sorted = [];
        const pushIf = (filterFn) => {
          validModels.filter(filterFn).forEach(m => {
            const cleanName = m.name.replace('models/', '');
            if (!sorted.includes(cleanName)) sorted.push(cleanName);
          });
        };
        // Priority order: 2.5-flash first, then 2.0-flash, then 1.5-flash, then any flash/gemini
        pushIf(m => m.name.includes('2.5-flash'));
        pushIf(m => m.name.includes('2.0-flash'));
        pushIf(m => m.name.includes('1.5-flash'));
        pushIf(m => m.name.includes('flash'));
        pushIf(m => m.name.includes('gemini'));

        if (sorted.length > 0) {
          candidateModels = sorted;
          targetModelName = sorted[0];
        }
      }
    } catch (e) {
      console.warn("Failed to list models, using fallback gemini-2.5-flash", e);
    }

    const promptText = `CRITICAL SYSTEM COMMAND:
You are an expert universal academic timetable vision OCR parser.
Your highest priority is 100% ACCURACY in extracting course entries, time structures, and detecting whether the timetable uses a PERIOD-BASED system (e.g., Period 1, 2, 3 / 1限, 2限 / 1교시, 2교시 / 第1节) or a CLOCK TIME system (e.g., 08:00-10:00, 9:30 AM - 11:00 AM).

SYSTEM IDENTIFICATION RULES:
1. PERIOD-BASED vs CLOCK TIME DETECTION:
   - "isPeriodBased": Set to TRUE if the timetable rows/columns represent numbered sequential class periods/slots (e.g. 1, 2, 3, 4, 5, 6 / 1限-6限 in Japan / 1교시-8교시 in Korea / 第1节-第8节 in China / Period 1-7 in US/UK/International schools).
   - "isPeriodBased": Set to FALSE if the schedule strictly uses clock timestamps without distinct named period blocks (e.g. standard university grid showing 08:00, 09:00, 10:00, 11:00... on the time axis).
   - Even if clock times are printed alongside period numbers (e.g. "1 (09:00-10:30)", "2 (10:40-12:10)"), set "isPeriodBased": true and populate BOTH "periodNumber" and the exact "startTime"/"endTime".

2. LANGUAGE & NON-ENGLISH DETECTION (EXCLUDING NAMES):
   - "hasNonEnglishText": Set to TRUE ONLY if the academic subjects, course titles, or timetable headers are in a foreign language (e.g. Japanese, Korean, Chinese, Arabic, French, German, Spanish, Malay, etc.).
   - Set "hasNonEnglishText": FALSE if the timetable subjects and table headers are in English.
   - EXCEPTION FOR NAMES: Lecturer, professor, teacher, instructor, or student names MUST BE EXCLUDED from foreign language determination. If course titles and schedule headers are in English (e.g. "Data Structures", "Calculus I", "Physics 101"), "hasNonEnglishText" MUST be FALSE and "detectedLanguage" MUST be "English", even if instructor names are foreign/ethnic.

3. DAYS RECOGNITION (Multi-Country & Multi-Language):
   - Map day column/row headers to standard English short day: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
   - Japanese: 月 -> Mon, 火 -> Tue, 水 -> Wed, 木 -> Thu, 金 -> Fri, 土 -> Sat, 日 -> Sun.
   - Korean: 월 -> Mon, 화 -> Tue, 수 -> Wed, 목 -> Thu, 금 -> Fri, 토 -> Sat, 일 -> Sun.
   - Chinese: 星期一/周一/週一/一 -> Mon, 星期二/周二/週二/二 -> Tue, 星期三/周三/週三/三 -> Wed, 星期四/周四/週四/四 -> Thu, 星期五/周五/週五/五 -> Fri, 星期六/周六/週六/六 -> Sat, 星期日/周日/週日/日/天 -> Sun.
   - Malay/Indo: Isnin/Senin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis/Kamis -> Thu, Jumaat/Jumat -> Fri, Sabtu -> Sat, Ahad/Minggu -> Sun.
   - Arabic (RTL): الأحد -> Sun, الإثنين -> Mon, الثلاثاء -> Tue, الأربعاء -> Wed, الخميس -> Thu, الجمعة -> Fri, السبت -> Sat.
   - Spanish/French/German/Italian/Portuguese: Lunes/Lundi/Montag/Lunedi/Segunda -> Mon, Martes/Mardi/Dienstag/Martedi/Terca -> Tue, Miercoles/Mercredi/Mittwoch/Mercoledi/Quarta -> Wed, Jueves/Jeudi/Donnerstag/Giovedi/Quinta -> Thu, Viernes/Vendredi/Freitag/Venerdi/Sexta -> Fri, Sabado/Samedi/Samstag/Sabato -> Sat, Domingo/Dimanche/Sonntag/Domenica -> Sun.

3. 100% VERBATIM SUBJECT / COURSE EXTRACTION:
   - "title": Extract the full subject title character-for-character as printed in the table cell.
   - INCLUDE ALL PARENTHESES AND QUALIFIERS: E.g., "外国語特別講義II(マレー語)", "体育実技II(バスケットボールB)", "Introduction to CS (Lecture)", "Calculus I - SEC 02". NEVER drop text in parentheses.
   - If multiple lines of text exist in a cell, parse the main subject name into "title", the instructor into "lecturer", and room/venue into "room".
   - "originalTitle": Same exact verbatim text as in the image.
   - "translatedTitle": Complete English translation of the course name without shortforms (keep parenthetical notes translated).
   - "code": Official alphanumeric course code (e.g. "FL202", "CS101", "BBSB3103"). If no separate code is printed in the cell, reuse the full verbatim title.
   - "originalCode": Native shorthand or code if present.
   - "translatedCode": Translated course code or full translated title if no separate code exists.

4. TIME & PERIOD MAPPING:
   - "startTime" and "endTime": 24-hour "HH:MM" format (e.g. "09:00", "10:30", "14:00").
   - "periodNumber": Integer (1, 2, 3, 4, 5, 6...) when period based.
   - Standard period fallback clock times if not explicitly printed:
     * Period 1: 09:00 - 10:30
     * Period 2: 10:40 - 12:10
     * Period 3: 13:00 - 14:30
     * Period 4: 14:40 - 16:10
     * Period 5: 16:20 - 17:50
     * Period 6: 18:00 - 19:30
     * Period 7: 19:40 - 21:10

5. METADATA:
   - "room": Room / Venue / Hall / Classroom / Building (e.g. "Room 301", "Lab 2", "E-401").
   - "lecturer": Professor / Lecturer / Teacher name.
   - "group": Section / Class group / OCC (e.g. "G1", "SEC 01", "Group A").
   - "type": "Lecture" | "Tutorial" | "Lab" | "Class" | "Seminar" | "Studio".

OUTPUT STRICT JSON FORMAT:
{
  "detectedLanguage": "Japanese",
  "hasNonEnglishText": true,
  "isPeriodBased": true,
  "timetableFormat": "period",
  "courses": [
    {
      "title": "外国語特別講義II(マレー語)",
      "code": "FL202",
      "originalTitle": "外国語特別講義II(マレー語)",
      "originalCode": "FL202",
      "translatedTitle": "Special Foreign Language Lecture II (Malay)",
      "translatedCode": "FL202",
      "day": "Mon",
      "startTime": "09:00",
      "endTime": "10:30",
      "periodNumber": 1,
      "type": "Lecture",
      "room": "301",
      "lecturer": "Professor Tanaka",
      "group": "G1"
    }
  ]
}

Respond ONLY with valid JSON. No markdown backticks outside JSON.`;

    const payload = {
      contents: [{
        parts: [
          { text: promptText },
          { inline_data: { mime_type: mimeType || 'image/png', data: base64Data } }
        ]
      }],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.0,
        responseMimeType: "application/json"
      }
    };

    let data = null;
    let successfulModel = targetModelName;
    let lastError = null;

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify(payload)
        });

        const resJson = await response.json();
        if (resJson.error) {
          lastError = resJson.error.message || `Model ${model} returned error ${response.status}`;
          console.warn(`[Vercel api/scan] Model ${model} failed:`, lastError);
          continue;
        }

        if (resJson.candidates && resJson.candidates[0] && resJson.candidates[0].content) {
          data = resJson;
          successfulModel = model;
          break;
        }
      } catch (callErr) {
        lastError = callErr.message;
        console.warn(`[Vercel api/scan] Call to ${model} threw error:`, callErr);
      }
    }

    if (!data) {
      return res.status(500).json({ error: lastError || 'All Gemini models failed to process the timetable.' });
    }

    let rawJSON = data.candidates[0].content.parts[0].text;
    rawJSON = rawJSON.replace(/```json/g, '').replace(/```/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(rawJSON);
    } catch (parseErr) {
      let fixedJSON = rawJSON.trim();
      if (fixedJSON.endsWith(',')) fixedJSON = fixedJSON.slice(0, -1);
      const openBraces = (fixedJSON.match(/\{/g) || []).length - (fixedJSON.match(/\}/g) || []).length;
      const openBrackets = (fixedJSON.match(/\[/g) || []).length - (fixedJSON.match(/\]/g) || []).length;
      if ((fixedJSON.match(/"/g) || []).length % 2 !== 0) fixedJSON += '"';
      for (let i = 0; i < openBraces; i++) fixedJSON += '}';
      for (let i = 0; i < openBrackets; i++) fixedJSON += ']';
      parsed = JSON.parse(fixedJSON);
    }

    let courses = [];
    let detectedLanguage = "English";
    let hasNonEnglishText = false;
    let isPeriodBased = false;

    if (Array.isArray(parsed)) {
      courses = parsed;
      isPeriodBased = courses.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== '');
    } else if (parsed && typeof parsed === 'object') {
      courses = parsed.courses || parsed.slots || parsed.data || [];
      detectedLanguage = parsed.detectedLanguage || "English";
      hasNonEnglishText = !!parsed.hasNonEnglishText;
      isPeriodBased = (parsed.isPeriodBased !== undefined)
        ? Boolean(parsed.isPeriodBased)
        : (parsed.timetableFormat === 'period' || courses.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== ''));
    }

    // Auto-detect if courses contain non-Latin characters if flag wasn't explicitly set
    if (!hasNonEnglishText && courses.some(c => /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf\uac00-\ud7af\u0600-\u06ff\u0400-\u04ff]/.test((c.title || '') + (c.code || '') + (c.originalTitle || '')))) {
      hasNonEnglishText = true;
      if (detectedLanguage === "English") {
        detectedLanguage = "Foreign Language";
      }
    }

    return res.status(200).json({ 
      success: true, 
      data: courses, 
      detectedLanguage: detectedLanguage,
      hasNonEnglishText: hasNonEnglishText,
      isPeriodBased: isPeriodBased
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
