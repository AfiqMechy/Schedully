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
You are an expert universal academic timetable vision parser.
Analyze this timetable image and extract ALL scheduled classes/courses into clean structured JSON.

1. MULTILINGUAL & SCRIPT SUPPORT:
- Support ANY language: English, Malay/Bahasa Melayu, Japanese, Chinese, Korean, Arabic, French, German, Spanish, Indonesian, Russian, etc.
- Detect "detectedLanguage" (e.g. "Malay", "Japanese", "English", "Chinese", "Korean", "Arabic", "French").
- Set "hasNonEnglishText": true if non-English characters or non-English course names are present.
- Detect "isPeriodBased": true if the timetable uses period numbers (1, 2, 3, 4, 5, 6 / 1限, 2限 / 1교시 / 第1节) instead of explicit clock hours on the left axis.

2. DAYS PARSING:
- Normalize days to standard 3-letter English: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
- Day translations:
  * Malay/Indonesian: Isnin/Senin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis/Kamis -> Thu, Jumaat/Jumat -> Fri, Sabtu -> Sat, Ahad/Minggu -> Sun
  * Japanese: 月 -> Mon, 火 -> Tue, 水 -> Wed, 木 -> Thu, 金 -> Fri, 土 -> Sat, 日 -> Sun
  * Chinese: 星期一/周一 -> Mon, 星期二/周二 -> Tue, 星期三/周三 -> Wed, 星期四/周四 -> Thu, 星期五/周五 -> Fri, 星期六/周六 -> Sat, 星期日/周日 -> Sun
  * Korean: 월 -> Mon, 화 -> Tue, 수 -> Wed, 목 -> Thu, 금 -> Fri, 토 -> Sat, 일 -> Sun
  * Arabic: الأحد -> Sun, الإثنين -> Mon, الثلاثاء -> Tue, الأربعاء -> Wed, الخميس -> Thu, الجمعة -> Fri, السبت -> Sat

3. TIME SLOTS & PERIODS:
- If clock times are explicitly visible on the image, extract "startTime" and "endTime" in 24-hour HH:MM format (e.g. "08:00", "09:30", "14:00", "18:00").
- If period numbers are used (1 to 6 without explicit clock times):
  * Set "periodNumber": 1, 2, 3, 4, 5, 6...
  * Use standard university period slots for default fallback:
    * 1: 09:00 - 10:30
    * 2: 10:40 - 12:10
    * 3: 13:00 - 14:30
    * 4: 14:40 - 16:10
    * 5: 16:20 - 17:50
    * 6: 18:00 - 19:30

4. COURSE ATTRIBUTES (DUAL-LANGUAGE):
For each class:
- "originalTitle": Full course title in native language
- "originalCode": Native course code or abbreviation
- "translatedTitle": English translation of the course name
- "translatedCode": Standard Latin alphanumeric code (e.g. "CS101", "AERO-1", "DSA", "MATH201")
- "title": Default course title
- "code": Default course code
- "day": "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
- "startTime": "HH:MM"
- "endTime": "HH:MM"
- "periodNumber": 1 | 2 | 3 | 4 | 5 | 6 (if period-based)
- "type": "Lecture" | "Tutorial" | "Lab" | "Class"
- "room": Room / Venue / Hall if visible
- "lecturer": Lecturer / Professor name if visible

OUTPUT JSON FORMAT ONLY:
{
  "detectedLanguage": "Japanese",
  "hasNonEnglishText": true,
  "isPeriodBased": true,
  "courses": [
    {
      "originalTitle": "MSLC 定期トレーニング",
      "originalCode": "MSLC",
      "translatedTitle": "MSLC Regular Training",
      "translatedCode": "MSLC-1",
      "title": "MSLC 定期トレーニング",
      "code": "MSLC",
      "day": "Mon",
      "startTime": "09:00",
      "endTime": "10:30",
      "periodNumber": 1,
      "type": "Lecture",
      "room": "",
      "lecturer": "",
      "group": ""
    }
  ]
}`;

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
            temperature: 0.1,
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
