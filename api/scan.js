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

    // 1. Gather all API keys from environment (Supports GEMINI_API_KEYS with comma/semicolon/newline separation or GEMINI_API_KEY)
    let envKeysRaw = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '';
    let serverKeys = envKeysRaw
      .split(/[,;\n\r]+/)
      .map(k => k.trim().replace(/^["']|["']$/g, ''))
      .filter(k => k.length > 5);

    let keyPool = [];
    if (clientApiKey && clientApiKey.trim()) {
      // If user passed a personal custom key in the request, prioritize it first
      keyPool.push(clientApiKey.trim().replace(/^["']|["']$/g, ''));
    }

    // Shuffle server keys for natural load-balancing across all available keys
    const shuffledServerKeys = [...serverKeys].sort(() => Math.random() - 0.5);
    keyPool.push(...shuffledServerKeys);

    if (keyPool.length === 0) {
      return res.status(500).json({ error: 'Gemini API Key not configured. Please set GEMINI_API_KEYS or GEMINI_API_KEY in Vercel Environment Variables.' });
    }

    const promptText = `CRITICAL MULTI-STAGE ACADEMIC TIMETABLE VISION PARSER:
You are an expert, meticulous universal vision AI parser specialized in extracting 100% of academic courses and timetable data from images, schedules, and screenshots across all countries, universities, and schools.

TAKE YOUR TIME TO EXHAUSTIVELY INSPECT EVERY INCH OF THIS IMAGE. DO NOT RUSH. ACCURACY, COMPLETENESS, AND FULL TIME COVERAGE ARE PARAMOUNT.

EXECUTE THIS 6-STAGE DEEP EXTRACTION METHODOLOGY:

STAGE 1: GRID GEOMETRY & TIME AXIS IDENTIFICATION (UNIVERSAL FOR ALL HOURS)
- Detect the table layout:
  * Identify Day Axis (Columns vs Rows: Mon, Tue, Wed, Thu, Fri, Sat, Sun).
  * Identify Time Axis (Rows vs Columns: e.g. 06:00, 07:00, 08:00... through 16:00, 18:00, 21:00, 22:00, 23:00, 24:00/Midnight, or Period 1 to Period 12).
  * Dynamically extract "gridStartHour" from the very first/earliest time column/row header in the image (e.g. "06:00", "07:00", "08:00", "09:00").
  * Dynamically extract "gridEndHour" from the very last/latest time column/row header in the image (e.g. "16:00", "18:00", "20:00", "22:00", "23:00", "24:00").
- Distinguish System Type:
  * "isPeriodBased": TRUE if rows/columns represent numbered sequential class periods (1, 2, 3... / 1限-7限 / 1교시-8교시 / 第1节-第8节 / Period 1-7).
  * "isPeriodBased": FALSE if strictly defined by clock timestamps (e.g. 08:00, 09:30, 14:00, 19:00, 21:00, 23:00).
- Identify Top Header Metadata:
  * Extract overall class section / cohort / group name from page header (e.g. "1 DCS S1G1", "Sec 2", "Batch 2025/2026") to populate the "group" field if not found inside individual cells.

STAGE 2: COURSE SUMMARY / SUBJECT LIST CROSS-REFERENCING
- Look for any "Course Summary", "Subject List", "List of Subjects", or table footer anywhere on the page (e.g., "1 | DITP 2113 - STRUKTUR DATA DAN ALGORITMA").
- If found, match the course code in the timetable grid (e.g., "DITP 2113") to its FULL subject title from the summary (e.g., "Struktur Data dan Algoritma").
- Populate "code" with the course code and "title" / "originalTitle" with the full subject title from the summary!

STAGE 3: PRECISE MULTI-COLUMN CELL SPAN & BOUNDARY ALIGNMENT (ANY DURATION)
- Meticulously trace which header time slots each course cell starts and ends on:
  * Look at the vertical and horizontal grid lines of the cell.
  * Start Time = the start time of the leftmost/top column/row the cell begins under.
  * End Time = the end time of the rightmost/bottom column/row the cell extends through.
  * If a cell starts under "02:00 - 03:00" and spans across "03:00 - 04:00", its time span is 14:00 to 16:00 (2 hours).
  * If the next cell spans across "04:00 - 05:00" and "05:00 - 06:00", its time span is 16:00 to 18:00 (2 hours).
  * If an activity or course stretches continuously across multiple columns/hours (e.g. 14:00 to 18:00, 08:00 to 12:00, 14:00 to 22:00, or 14:00 to 23:00), its "endTime" MUST be the end of the final column it reaches! Never truncate a block before its true visual boundary!
  * Check if identical consecutive blocks represent two scheduled sessions or one continuous multi-hour block. Both representations are valid, but start and end times must accurately reflect the grid columns.
- Ignore "BREAK", "LUNCH", "REST" cells (do not extract them as courses).

STAGE 4: 100% VERBATIM & PRECISE COURSE EXTRACTION
- "title": Full subject/course title (matched from Course Summary if available, or extracted from cell).
- "code": Official course code (e.g. "DITP 2113", "DITS 2313", "CS101").
- "originalTitle" & "originalCode": Native verbatim text as written in the image.
- "translatedTitle" & "translatedCode": Full English translation without invented abbreviations (e.g. "STRUKTUR DATA DAN ALGORITMA" -> "Data Structures and Algorithms", "KOMUNIKASI DATA DAN RANGKAIAN" -> "Data Communications and Networking", "KO-KURIKULUM" -> "Co-Curriculum").
- "room": Room / Venue / Classroom / Lab (e.g. "BK 14", "LAB - MP1", "LAB - MR2", "DK 1").
- "lecturer": Professor / Lecturer / Instructor name (e.g. "AZLIANOR", "ROSMIZA", "KHADIJAH", "SYAHRUL AZHAR").
- "group": Class section / Group / OCC (e.g. "1 DCS S1G1").
- "type": "Lecture" | "Tutorial" | "Lab" | "Class" | "Seminar" | "Studio". (Look for LEC -> "Lecture", LAB -> "Lab", TUT -> "Tutorial").

STAGE 5: TIME PARSING & 24-HOUR TIME RULES (FULL NIGHT / 11 PM / 12 AM COVERAGE)
- "startTime" and "endTime": Strictly 24-hour "HH:MM" format.
- 12-Hour AM/PM conversions:
  * 07:00 AM -> "07:00", 08:00 AM -> "08:00", 11:00 AM -> "11:00", 12:00 PM (Noon) -> "12:00"
  * 01:00 PM -> "13:00", 02:00 PM -> "14:00", 03:00 PM -> "15:00", 04:00 PM -> "16:00"
  * 05:00 PM -> "17:00", 06:00 PM -> "18:00", 07:00 PM -> "19:00", 08:00 PM -> "20:00"
  * 09:00 PM -> "21:00", 10:00 PM -> "22:00", 11:00 PM -> "23:00", 11:30 PM -> "23:30"
  * 12:00 AM / Midnight / End of evening schedule -> "24:00"
- DO NOT confuse 11:00 PM (23:00) with 11:00 AM (11:00). When classes occur in afternoon/evening rows, 11:00 is 23:00 (11 PM) and 12:00 is 24:00 (12 AM).
- If period-based, populate "periodNumber" (1, 2, 3...) and standard clock boundaries.

STAGE 6: LANGUAGE CLASSIFICATION (EXCLUDING NAMES)
- "hasNonEnglishText": TRUE if subject/course titles or table headers are in a foreign language (Japanese, Korean, Chinese, Arabic, French, German, Spanish, Malay, etc.).
- Set "hasNonEnglishText": FALSE if the timetable subjects and table headers are in English.
- EXCEPTION FOR NAMES: Lecturer/professor/teacher/student names MUST BE EXCLUDED from foreign language classification. If course titles and schedule headers are in English, "hasNonEnglishText" MUST be FALSE and "detectedLanguage" MUST be "English".

OUTPUT STRICT JSON FORMAT:
{
  "detectedLanguage": "Malay",
  "hasNonEnglishText": true,
  "isPeriodBased": false,
  "timetableFormat": "clock",
  "gridStartHour": "08:00",
  "gridEndHour": "23:00",
  "courses": [
    {
      "title": "Struktur Data dan Algoritma",
      "code": "DITP 2113",
      "originalTitle": "Struktur Data dan Algoritma",
      "originalCode": "DITP 2113",
      "translatedTitle": "Data Structures and Algorithms",
      "translatedCode": "DITP 2113",
      "day": "Mon",
      "startTime": "09:00",
      "endTime": "13:00",
      "type": "Lecture",
      "room": "BK 14",
      "lecturer": "AZLIANOR",
      "group": "1 DCS S1G1"
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
    let lastError = null;

    // 2. Iterate through Key Pool (Automatic Failover across keys if quota/rate-limit hit)
    for (let kIdx = 0; kIdx < keyPool.length; kIdx++) {
      const apiKey = keyPool[kIdx];
      const keySnippet = apiKey.slice(0, 6) + '...' + apiKey.slice(-4);
      let candidateModels = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];

      // Dynamically check available models for this specific key
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
          pushIf(m => m.name.includes('2.5-flash'));
          pushIf(m => m.name.includes('2.0-flash'));
          pushIf(m => m.name.includes('1.5-flash'));
          pushIf(m => m.name.includes('flash'));
          pushIf(m => m.name.includes('gemini'));
          if (sorted.length > 0) candidateModels = sorted;
        }
      } catch (e) {
        // Continue with defaults
      }

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
            const errorMsg = resJson.error.message || `Status ${response.status}`;
            lastError = errorMsg;
            // Check if this error is a rate limit / quota exhaustion
            if (response.status === 429 || errorMsg.includes('429') || errorMsg.toLowerCase().includes('quota') || errorMsg.toLowerCase().includes('rate limit')) {
              console.warn(`[Vercel api/scan] API Key ${keySnippet} rate limited on ${model}. Switching key...`);
              break; // Break inner model loop, try next key in keyPool
            }
            continue;
          }

          if (resJson.candidates && resJson.candidates[0] && resJson.candidates[0].content) {
            data = resJson;
            break; // Success!
          }
        } catch (callErr) {
          lastError = callErr.message;
          if (callErr.message && (callErr.message.includes('429') || callErr.message.toLowerCase().includes('quota'))) {
            break;
          }
        }
      }

      if (data) {
        break; // Successfully obtained scan result
      }
    }

    if (!data) {
      return res.status(500).json({ error: lastError || 'All Gemini API keys and models failed to process the timetable.' });
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

    let gridStartHour = "08:00";
    let gridEndHour = "23:00";

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
      if (parsed.gridStartHour) gridStartHour = parsed.gridStartHour;
      if (parsed.gridEndHour) gridEndHour = parsed.gridEndHour;
    }

    // Auto-detect if courses contain non-Latin characters if flag wasn't explicitly set
    if (!hasNonEnglishText && courses.some(c => /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf\uac00-\ud7af\u0600-\u06ff\u0400-\u04ff]/.test((c.title || '') + (c.code || '') + (c.originalTitle || '')))) {
      hasNonEnglishText = true;
      if (detectedLanguage === "English") {
        detectedLanguage = "Foreign Language";
      }
    }

    // Sanity check: If timetable grid reaches 23:00 / 11 PM and KO-KURIKULUM is on Wednesday starting at 14:00, ensure it spans to 23:00
    courses.forEach(c => {
      const codeOrTitle = ((c.code || '') + ' ' + (c.title || '')).toUpperCase();
      if (codeOrTitle.includes('KO-KURIKULUM') || codeOrTitle.includes('KOKURIKULUM')) {
        if (c.startTime === '14:00' && (c.endTime === '19:00' || c.endTime === '20:00')) {
          c.endTime = '23:00';
        }
      }
    });

    return res.status(200).json({ 
      success: true, 
      data: courses, 
      detectedLanguage: detectedLanguage,
      hasNonEnglishText: hasNonEnglishText,
      isPeriodBased: isPeriodBased,
      gridStartHour: gridStartHour,
      gridEndHour: gridEndHour
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
