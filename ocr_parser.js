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
    onProgress("Encoding image for AI Vision Analysis...");
    const base64Data = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    const mimeType = file.type || 'image/jpeg';

    // 1. Try Vercel Serverless Function First (/api/scan with secure process.env.GEMINI_API_KEY)
    onProgress("Analyzing timetable with AI Vision Scanner...");
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
              hasNonEnglishText: resData.hasNonEnglishText !== undefined ? resData.hasNonEnglishText : false
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
      onProgress("Running Gemini Vision AI Scanner...");
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
Your highest priority is 100% EXACT VERBATIM ACCURACY. You must transcribe course names, subject titles, codes, and details EXACTLY character-for-character as written in the uploaded image.

ABSOLUTE STRICT RULES:
1. 100% EXACT VERBATIM SUBJECT / COURSE NAMES:
   - Extract the course name EXACTLY word-for-word, letter-for-letter, character-for-character as printed on the timetable.
   - NEVER abbreviate, summarize, truncate, simplify, paraphrase, or alter subject names (e.g. if the image says "PENGURUSAN SUMBER MANUSIA DALAM ORGANISASI", do NOT shorten to "HRM" or "Pengurusan Sumber Manusia"; write "PENGURUSAN SUMBER MANUSIA DALAM ORGANISASI" 100% verbatim).
   - Preserve exact spelling, casing, punctuation, roman numerals, and special characters (e.g., "I", "II", "(A)", "LAB", "TUTORIAL", "&", "-", "/").
   - If a subject name spans multiple lines inside a table cell, combine them cleanly with spaces in natural reading order.
   - Do NOT invent or guess missing words. If text is partially cropped or includes section codes, capture all legible characters accurately.

2. DUAL-LANGUAGE AND COURSE CODES:
   - "title": MUST BE THE EXACT 100% VERBATIM SUBJECT NAME as printed on the image.
   - "originalTitle": Same exact verbatim subject name as printed on the image.
   - "code": The official course code printed next to or above/below the title (e.g. "BBSB3103", "CS101", "SE302"). If NO separate alphanumeric code is printed, reuse the verbatim title or native abbreviation.
   - "originalCode": Native shorthand or code if present.
   - "translatedTitle": Optional English translation ONLY if the original language is non-English (e.g. Japanese, Chinese, Arabic). For English or Malay timetables, set to the same verbatim title.
   - "translatedCode": Standard Latin alphanumeric code or the course code.

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
  "detectedLanguage": "English",
  "hasNonEnglishText": false,
  "isPeriodBased": false,
  "courses": [
    {
      "title": "EXACT 100% VERBATIM SUBJECT NAME",
      "code": "EXACT COURSE CODE",
      "originalTitle": "EXACT 100% VERBATIM SUBJECT NAME",
      "originalCode": "EXACT COURSE CODE",
      "translatedTitle": "EXACT 100% VERBATIM SUBJECT NAME",
      "translatedCode": "EXACT COURSE CODE",
      "day": "Mon",
      "startTime": "08:00",
      "endTime": "10:00",
      "type": "Lecture",
      "room": "DK1",
      "lecturer": "Dr. Aminah",
      "group": "G1"
    }
  ]
}

Respond ONLY with valid JSON. No conversational wrapper or markdown backticks outside the json.`;

    let lastErrorMsg = null;
    for (const model of candidateModels) {
      onProgress(`Scanning with ${model}...`);
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
              isPeriodBased: parsed.isPeriodBased !== undefined ? parsed.isPeriodBased : false
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
