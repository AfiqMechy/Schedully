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

    const promptText = `CRITICAL MULTI-STAGE ACADEMIC TIMETABLE VISION PARSER:
You are an expert, meticulous universal vision AI parser specialized in extracting 100% of academic courses and timetable data from images, schedules, and screenshots across all countries, universities, and schools.

TAKE YOUR TIME TO EXHAUSTIVELY INSPECT EVERY INCH OF THIS IMAGE. DO NOT RUSH. ACCURACY, COMPLETENESS, AND FULL TIME COVERAGE ARE PARAMOUNT.

EXECUTE THIS 5-STAGE DEEP EXTRACTION METHODOLOGY:

STAGE 1: GRID GEOMETRY & TIME AXIS IDENTIFICATION
- Detect the table layout:
  * Identify Day Axis (Columns vs Rows: Mon, Tue, Wed, Thu, Fri, Sat, Sun).
  * Identify Time Axis (Rows vs Columns: e.g. 06:00, 07:00, 08:00... through 22:00, 23:00, 24:00/Midnight, or Period 1 to Period 12).
- Distinguish System Type:
  * "isPeriodBased": TRUE if rows/columns represent numbered sequential class periods (1, 2, 3... / 1限-7限 / 1교시-8교시 / 第1节-第8节 / Period 1-7).
  * "isPeriodBased": FALSE if strictly defined by clock timestamps (e.g. 08:00, 09:30, 14:00, 19:00, 21:00).

STAGE 2: EXHAUSTIVE CELL-BY-CELL SCAN (ALL DAYS & ALL HOURS)
- Meticulously examine EVERY SINGLE CELL in every column from Mon through Sun.
- Check ALL time slots from earliest morning (06:00/07:00) to latest night (19:00, 20:00, 21:00, 22:00, 23:00, 23:30, 24:00/Midnight).
- DO NOT SKIP bottom rows, edge columns, or compact cards.
- If a course cell spans multiple hours or periods (e.g., 2-hour or 3-hour block), capture the true overall start time of the first block and end time of the last block.

STAGE 3: 100% VERBATIM & PRECISE COURSE EXTRACTION
- "title": Extract the full exact subject/course title verbatim from the cell including all parentheses, qualifiers, and section markers (e.g. "Calculus I (Lecture)", "外国語特別講義II(マレー語)", "Object Oriented Programming (Lab)").
- "code": Official course code (e.g. "CS101", "FL202", "BBSB3103"). If no separate code exists, reuse the full title.
- "originalTitle" & "originalCode": Native verbatim text as written in the image.
- "translatedTitle" & "translatedCode": Full English translation without invented abbreviations.
- "room": Room / Venue / Hall / Classroom / Building (e.g. "Room 301", "Lab 2", "DK 1", "E-401").
- "lecturer": Professor / Lecturer / Teacher name.
- "group": Class section / Group / OCC (e.g. "G1", "SEC 02", "Group A").
- "type": "Lecture" | "Tutorial" | "Lab" | "Class" | "Seminar" | "Studio".

STAGE 4: TIME PARSING & 24-HOUR TIME RULES (FULL NIGHT / 11 PM / 12 AM COVERAGE)
- "startTime" and "endTime": Strictly 24-hour "HH:MM" format.
- 12-Hour AM/PM conversions:
  * 07:00 AM -> "07:00", 08:00 AM -> "08:00", 11:00 AM -> "11:00", 12:00 PM (Noon) -> "12:00"
  * 01:00 PM -> "13:00", 02:00 PM -> "14:00", 03:00 PM -> "15:00", 04:00 PM -> "16:00"
  * 05:00 PM -> "17:00", 06:00 PM -> "18:00", 07:00 PM -> "19:00", 08:00 PM -> "20:00"
  * 09:00 PM -> "21:00", 10:00 PM -> "22:00", 11:00 PM -> "23:00", 11:30 PM -> "23:30"
  * 12:00 AM / Midnight / End of evening schedule -> "24:00"
- DO NOT confuse 11:00 PM (23:00) with 11:00 AM (11:00). When classes occur in afternoon/evening rows, 11:00 is 23:00 (11 PM) and 12:00 is 24:00 (12 AM).
- If period-based, populate "periodNumber" (1, 2, 3...) and standard clock boundaries.

STAGE 5: LANGUAGE CLASSIFICATION (EXCLUDING NAMES)
- "hasNonEnglishText": TRUE ONLY if subject/course titles or table headers are in a foreign language (Japanese, Korean, Chinese, Arabic, French, German, Spanish, Malay, etc.).
- Set "hasNonEnglishText": FALSE if the timetable subjects and table headers are in English.
- EXCEPTION FOR NAMES: Lecturer/professor/teacher/student names MUST BE EXCLUDED from foreign language classification. If course titles and schedule headers are in English, "hasNonEnglishText" MUST be FALSE and "detectedLanguage" MUST be "English".

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
        maxOutputTokens: 16384,
        temperature: 0.0,
        responseMimeType: "application/json"
      }
    };

    let data = null;
    let successfulModel = targetModelName;
    let lastError = null;

    for (const model of candidateModels) {
      try {
        const modelPayload = JSON.parse(JSON.stringify(payload));
        if (model.includes('2.5') || model.includes('2.0')) {
          modelPayload.generationConfig.thinkingConfig = {
            thinkingBudget: 2048
          };
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);

        let response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify(modelPayload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        let resJson = await response.json().catch(() => ({}));
        if (resJson.error && modelPayload.generationConfig.thinkingConfig) {
          // Retry without thinkingConfig if endpoint doesn't support it
          delete modelPayload.generationConfig.thinkingConfig;
          const retryController = new AbortController();
          const retryTimeout = setTimeout(() => retryController.abort(), 60000);
          response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey
            },
            body: JSON.stringify(modelPayload),
            signal: retryController.signal
          });
          clearTimeout(retryTimeout);
          resJson = await response.json().catch(() => ({}));
        }

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
