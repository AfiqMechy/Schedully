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
Your highest priority is 100% EXACT VERBATIM ACCURACY. You must transcribe course names, subject titles, codes, and details EXACTLY character-for-character as written in the uploaded image.

ABSOLUTE STRICT RULES:
1. 100% EXACT VERBATIM SUBJECT / COURSE NAMES:
   - Extract the full course title EXACTLY word-for-word, letter-for-letter, character-for-character as printed in the cell.
   - INCLUDE ALL PARENTHESES AND SUB-STRINGS: If a subject has parentheses or qualifiers (e.g. "外国語特別講義II(マレー語)", "教育制度論(スポーツ健康学科対象)", "体育実技II(バスケットボールB)"), you MUST INCLUDE THE PARENTHESES AND TEXT INSIDE THEM in the title! NEVER DROP "(マレー語)" or "(バスケットボールB)".
   - NEVER abbreviate, summarize, truncate, simplify, paraphrase, or alter subject names.
   - Preserve exact spelling, casing, punctuation, roman numerals, and special characters (e.g., "I", "II", "(A)", "LAB", "TUTORIAL", "&", "-", "/", "(", ")").
   - If a subject name spans multiple lines inside a table cell, combine all lines into one complete title string (e.g. "外国語特別講義II (マレー語)" or "外国語特別講義II(マレー語)").
   - Do NOT invent or guess missing words. Capture every legible character in the cell.

2. DUAL-LANGUAGE AND COURSE CODES:
   - "title": MUST BE THE EXACT 100% VERBATIM SUBJECT NAME as printed on the image.
   - "originalTitle": Same exact verbatim subject name as printed on the image.
   - "code": The official course code printed next to or above/below the title (e.g. "BBSB3103", "CS101", "SE302"). If NO separate alphanumeric code is printed, reuse the verbatim title or native abbreviation.
   - "originalCode": Native shorthand or code if present.
   - "translatedTitle": FULL, COMPLETE, UNABBREVIATED ENGLISH TRANSLATION of the subject name.
     * NO SHORTFORMS / NO ABBREVIATIONS: Spell out complete words in English (e.g., use "Introduction to Computer Science", NOT "Intro to CS"; "Physical Education", NOT "P.E." or "PE"; "Mathematics", NOT "Math").
     * PRESERVE ALL PARENTHESES AND QUALIFIERS: If the original subject has text in parentheses, you MUST TRANSLATE and INCLUDE the complete contents inside parentheses (e.g. "外国語特別講義II(マレー語)" -> "Special Foreign Language Lecture II (Malay)", "体育実技II(バスケットボールB)" -> "Physical Education Practice II (Basketball B)", "教育制度論(スポーツ健康学科対象)" -> "Educational Systems Theory (Sports and Health Science Department)"). NEVER drop parentheses or abbreviations in parentheses.
     * If the timetable is already in English, provide the full unabbreviated subject title while keeping parenthetical notes.
   - "translatedCode": Standard Latin/English alphanumeric code (e.g. "FL202", "PE202", "CS101") or the official course code.

3. DAYS & TIME RECOGNITION:
   - Map columns or rows to standard English day: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
     * Malay/Indo: Isnin/Senin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis/Kamis -> Thu, Jumaat/Jumat -> Fri, Sabtu -> Sat, Ahad/Minggu -> Sun.
     * Japanese: 月 -> Mon, 火 -> Tue, 水 -> Wed, 木 -> Thu, 金 -> Fri, 土 -> Sat, 日 -> Sun.
     * Chinese: 星期一/周一/週一 -> Mon, 星期二/周二 -> Tue, 星期三/周三 -> Wed, 星期四/周四 -> Thu, 星期五/周五 -> Fri, 星期六/周六 -> Sat, 星期日/周日 -> Sun.
     * Korean: 월 -> Mon, 화 -> Tue, 수 -> Wed, 목 -> Thu, 금 -> Fri, 토 -> Sat, 일 -> Sun.
     * Arabic (RTL): Note right-to-left order! الأحد -> Sun, الإثنين -> Mon, الثلاثاء -> Tue, الأربعاء -> Wed, الخميس -> Thu, الجمعة -> Fri, السبت -> Sat.
   - "startTime" and "endTime": 24-hour HH:MM format (e.g. "08:00", "09:30", "14:00", "16:30"). Read the time header/ruler carefully.
   - If period numbers are used instead of clock times (e.g. 1 to 6 / 1限, 2限):
     * Set "periodNumber": 1, 2, 3, 4, 5, 6...
     * Fallback standard university periods: 1: 09:00-10:30, 2: 10:40-12:10, 3: 13:00-14:30, 4: 14:40-16:10, 5: 16:20-17:50, 6: 18:00-19:30.

4. METADATA:
   - "room": Room / Venue / Lab / Hall if indicated in the cell (or "").
   - "lecturer": Lecturer / Instructor / Professor name if indicated (or "").
   - "group": Class section / Section / Group / OCC (e.g. "G1", "SEC 02", "T1") if printed (or "").
   - "type": "Lecture" | "Tutorial" | "Lab" | "Class" | "Seminar" | "Studio".

OUTPUT STRICT JSON SCHEMA ONLY:
{
  "detectedLanguage": "Japanese",
  "hasNonEnglishText": true,
  "isPeriodBased": true,
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

Respond ONLY with valid JSON. No conversational wrapper or markdown backticks outside the json.`;

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

    if (Array.isArray(parsed)) {
      courses = parsed;
    } else if (parsed && typeof parsed === 'object') {
      courses = parsed.courses || parsed.slots || parsed.data || [];
      detectedLanguage = parsed.detectedLanguage || "English";
      hasNonEnglishText = !!parsed.hasNonEnglishText;
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
      hasNonEnglishText: hasNonEnglishText
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
