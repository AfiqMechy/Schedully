/**
 * OCR Timetable Scanner & Schedule Parser Engine for Schedully
 * Scans course portal screenshots and extracts Course Codes, Title, Day, Times, and Room
 * Supports Vercel Serverless Function (/api/scan) and Direct Client-Side Gemini Vision API
 */

class OCRTimetableParser {
  constructor() {
    this.isTesseractLoaded = typeof Tesseract !== 'undefined';
  }

  /**
   * Universal Cloud Vision API Scanning (Supports Gemini 2.0/2.5/3.7 Flash & Fallbacks)
   */
  async scanWithCloudAPI(file, provider, apiKey, onProgress = () => {}) {
    const statusMessages = [
      "Reading your timetable image...",
      "Mapping matrix grid and time axes...",
      "Deeply analyzing every cell from morning to late night...",
      "Extracting course names, codes, venues and professors...",
      "Cross-referencing multi-hour blocks & validating schedule...",
      "Finalizing your timetable..."
    ];
    let msgIdx = 0;
    onProgress(statusMessages[0]);
    const progressTimer = setInterval(() => {
      msgIdx = (msgIdx + 1) % statusMessages.length;
      onProgress(statusMessages[msgIdx]);
    }, 2400);

    try {
      const base64Data = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });

      const mimeType = file.type || 'image/jpeg';

      // 1. Try Vercel Serverless Function First (/api/scan with secure process.env.GEMINI_API_KEY)
      let serverlessErrorMessage = null;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);
        const response = await fetch('/api/scan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ base64Data, mimeType, apiKey: apiKey || '' }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        const resData = await response.json().catch(() => null);

        if (response.ok && resData) {
          if (resData.success && (resData.data || resData.courses)) {
            const courses = Array.isArray(resData.data) ? resData.data : (resData.courses || []);
            if (courses.length > 0) {
              return {
                courses: courses,
                detectedLanguage: resData.detectedLanguage || 'English',
                hasNonEnglishText: resData.hasNonEnglishText !== undefined ? resData.hasNonEnglishText : false,
                isPeriodBased: (resData.isPeriodBased !== undefined)
                  ? Boolean(resData.isPeriodBased)
                  : courses.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== '')
              };
            }
          }
        } else if (resData && resData.error) {
          serverlessErrorMessage = resData.error;
          console.warn("/api/scan returned error:", serverlessErrorMessage);
        }
      } catch (apiErr) {
        serverlessErrorMessage = apiErr.message;
        console.warn("/api/scan endpoint unavailable, checking client key...", apiErr);
      }

      // 2. Direct Client-Side Gemini Vision Call (if key is in localStorage or passed)
      let effectiveApiKey = (
        apiKey ||
        localStorage.getItem('schedully_gemini_api_key') ||
        localStorage.getItem('schedully_api_key') ||
        localStorage.getItem('gemini_api_key') ||
        ''
      ).trim().replace(/^["']|["']$/g, '');

      if (effectiveApiKey) {
        try {
          const directResult = await this.scanDirectGemini(base64Data, mimeType, effectiveApiKey, onProgress);
          if (directResult && directResult.courses && directResult.courses.length > 0) {
            return directResult;
          }
        } catch (directErr) {
          console.warn("Direct Gemini Vision scan failed:", directErr);
          throw directErr;
        }
      }

      // 3. Fallback: If no serverless response and direct scan failed
      if (serverlessErrorMessage) {
        throw new Error(`AI Scanner Error: ${serverlessErrorMessage}`);
      }
      throw new Error("Unable to analyze timetable image with AI. Please ensure your Gemini API key is valid or check your Vercel GEMINI_API_KEY environment variable.");
    } finally {
      clearInterval(progressTimer);
    }
  }

  /**
   * Direct Browser-to-Google Gemini Vision Call with Active Production Priority & Deep Thinking
   */
  async scanDirectGemini(base64Data, mimeType, apiKey, onProgress) {
    // Active production models priority order
    let candidateModels = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ];

    try {
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`, {
        headers: { 'x-goog-api-key': apiKey }
      });
      if (listRes.ok) {
        const listData = await listRes.json();
        if (listData && listData.models) {
          const apiModels = listData.models
            .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
            .map(m => m.name.replace('models/', ''));
          
          const sorted = [];
          const pushIf = (filterFn) => {
            apiModels.filter(filterFn).forEach(m => { if (!sorted.includes(m)) sorted.push(m); });
          };
          pushIf(m => m.includes('2.5-flash'));
          pushIf(m => m.includes('2.0-flash'));
          pushIf(m => m.includes('1.5-flash'));
          pushIf(m => m.includes('flash'));
          pushIf(m => m.includes('gemini'));

          if (sorted.length > 0) candidateModels = sorted;
        }
      }
    } catch (discoveryErr) {
      console.warn("Model discovery skipped, using default candidate list:", discoveryErr);
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

    let lastErrorMsg = null;
    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const payload = {
          contents: [{
            parts: [
              { text: promptText },
              { inline_data: { mime_type: mimeType || 'image/jpeg', data: base64Data } }
            ]
          }],
          generationConfig: {
            maxOutputTokens: 16384,
            temperature: 0.0,
            responseMimeType: "application/json"
          }
        };

        // Enable deep reasoning budget for 2.5 and 2.0 models
        if (model.includes('2.5') || model.includes('2.0')) {
          payload.generationConfig.thinkingConfig = {
            thinkingBudget: 2048
          };
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);

        let res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          // If thinkingConfig was rejected, retry cleanly without it
          if (payload.generationConfig.thinkingConfig) {
            delete payload.generationConfig.thinkingConfig;
            const retryController = new AbortController();
            const retryTimeout = setTimeout(() => retryController.abort(), 60000);
            res = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey
              },
              body: JSON.stringify(payload),
              signal: retryController.signal
            });
            clearTimeout(retryTimeout);
          }
        }

        if (!res.ok) {
          const errText = await res.text();
          try {
            const errJson = JSON.parse(errText);
            lastErrorMsg = errJson.error?.message || errText;
          } catch (_) {
            lastErrorMsg = errText;
          }
          console.warn(`Model ${model} returned error ${res.status}:`, errText);
          continue;
        }

        const data = await res.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
          let text = data.candidates[0].content.parts[0].text;
          text = text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(text);
          const courses = Array.isArray(parsed) ? parsed : (parsed.courses || parsed.data || []);
          if (courses.length > 0) {
            return {
              courses,
              detectedLanguage: parsed.detectedLanguage || 'English',
              hasNonEnglishText: parsed.hasNonEnglishText !== undefined ? parsed.hasNonEnglishText : false,
              isPeriodBased: (parsed.isPeriodBased !== undefined)
                ? Boolean(parsed.isPeriodBased)
                : courses.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== '')
            };
          }
        }
      } catch (err) {
        lastErrorMsg = err.message;
        console.warn(`Attempt with ${model} failed:`, err);
      }
    }

    if (lastErrorMsg) {
      throw new Error(`Gemini API Error: ${lastErrorMsg}`);
    }
    throw new Error("Unable to extract timetable with available Gemini models. Please verify your image.");
  }
}

window.SAMPLE_SCHEDULES = { cs: [], biz: [] };
window.ocrParser = new OCRTimetableParser();
