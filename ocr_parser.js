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
    onProgress("Reading your timetable...");
    const base64Data = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    const mimeType = file.type || 'image/jpeg';

    // 1. Try Vercel Serverless Function First (/api/scan with secure process.env.GEMINI_API_KEY)
    onProgress("Analyzing your schedule...");
    let serverlessErrorMessage = null;
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64Data, mimeType, apiKey: apiKey || '' })
      });

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
      onProgress("Extracting course details...");
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
  }

  /**
   * Direct Browser-to-Google Gemini Vision Call with Active Production Priority
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

    let lastErrorMsg = null;
    for (const model of candidateModels) {
      onProgress("Almost there...");
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
            maxOutputTokens: 8192,
            temperature: 0.0,
            responseMimeType: "application/json"
          }
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000);

        const res = await fetch(url, {
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
