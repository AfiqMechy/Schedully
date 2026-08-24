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

    const apiKey = (clientApiKey || process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key not configured. Please set GEMINI_API_KEY in Vercel Environment Variables or enter your API key in settings.' });
    }

    // 1. DYNAMICALLY DISCOVER SUPPORTED MODELS
    let targetModelName = 'gemini-3.5-flash';
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
        // Prioritize gemini-3.5-flash per user request
        let bestModel = validModels.find(m => m.name.includes('3.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('3.5-pro'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('2.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('1.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('flash'));
        if (!bestModel && validModels.length > 0) bestModel = validModels[0];
        if (bestModel) targetModelName = bestModel.name.replace('models/', '');
      }
    } catch (e) {
      console.warn("Failed to list models, using fallback", e);
    }

    const promptText = `CRITICAL SYSTEM COMMAND:
You are an expert multilingual academic timetable vision parser.
Your task is to analyze the uploaded timetable image, detect the language, and extract all scheduled course/class slots.

UNIVERSAL GLOBAL TIMETABLE ENGINE RULES:

1. LANGUAGE DETECTION:
   - Identify the primary language used in the timetable (e.g. "Japanese", "Korean", "Chinese", "Arabic", "French", "German", "Spanish", "Malay", "Indonesian", "Russian", "English", etc.).
   - Set "detectedLanguage" to the language name (or "English" if purely English).
   - Set "hasNonEnglishText" to true if characters/words from Japanese, Chinese, Korean, Arabic, Cyrillic, or other non-English languages are present.

2. RTL & SCRIPT DIRECTION HANDLING (Arabic, Hebrew, Persian):
   - In Arabic/RTL timetables, the columns often read Right-to-Left (RTL). Recognize that the first day column (e.g. الأحد / Sunday or الإثنين / Monday) may be on the far RIGHT side.
   - Translate Arabic days: الأحد -> Sun, الإثنين -> Mon, الثلاثاء -> Tue, الأربعاء -> Wed, الخميس -> Thu, الجمعة -> Fri, السبت -> Sat.
   - Translate Arabic periods: الحصة الأولى -> 08:00-08:45, الحصة الثانية -> 08:45-09:30, etc.

3. EAST ASIAN & INTERNATIONAL LANGUAGES (Japanese, Chinese, Korean, German, Spanish, French, Russian, etc.):
   - Japanese days: 月/月曜 -> Mon, 火/火曜 -> Tue, 水/水曜 -> Wed, 木/木曜 -> Thu, 金/金曜 -> Fri, 土/土曜 -> Sat, 日/日曜 -> Sun
   - Chinese days: 星期一/周一/週一 -> Mon, 星期二/周二 -> Tue, 星期三/周三 -> Wed, 星期四/周四 -> Thu, 星期五/周五 -> Fri, 星期六/周六 -> Sat, 星期日/周日 -> Sun
   - Korean days: 월/월요일 -> Mon, 화/화요일 -> Tue, 수/수요일 -> Wed, 목/목요일 -> Thu, 금/금요일 -> Fri, 토/토요일 -> Sat, 일/일요일 -> Sun
   - German days: Mo/Montag -> Mon, Di/Dienstag -> Tue, Mi/Mittwoch -> Wed, Do/Donnerstag -> Thu, Fr/Freitag -> Fri, Sa/Samstag -> Sat, So/Sonntag -> Sun
   - Spanish/French/Italian days: Lunes/Lundi -> Mon, Martes/Mardi -> Tue, Miércoles/Mercredi -> Wed, Jueves/Jeudi -> Thu, Viernes/Vendredi -> Fri, Sábado/Samedi -> Sat, Domingo/Dimanche -> Sun
   - Malay/Indonesian days: Isnin/Senin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis/Kamis -> Thu, Jumaat/Jumat -> Fri, Sabtu -> Sat, Ahad/Minggu -> Sun

4. TIME & PERIOD CALCULATION:
   - Convert all times to 24-hour HH:MM strings (e.g. 08:45, 13:25).
   - If a timetable uses period numbers (1, 2, 3, 4, 5, 6, etc.):
     - Period 1: 09:00 - 10:30
     - Period 2: 10:40 - 12:10
     - Period 3: 13:00 - 14:30
     - Period 4: 14:40 - 16:10
     - Period 5: 16:20 - 17:50
     - Period 6: 18:00 - 19:30
   - If explicit start/end times are printed on the image, use those exact times!

5. DUAL-LANGUAGE FIELD EXTRACTION:
   For each class slot, extract BOTH the original language text AND the English translation:
   - "originalTitle": The exact text in the original language (e.g. "エアロビクス I", "教育制度論", "社会福祉概論", "解剖学", "体育実技II", "MSLC").
   - "originalCode": Native shorthand or code (e.g. "エアロ", "教制", "社福", "解剖", "MSLC").
   - "translatedTitle": English translation (e.g. "Aerobics I", "Educational Systems", "Social Welfare Introduction", "Anatomy", "PE II", "MSLC").
   - "translatedCode": Clean 2-8 uppercase Latin shorthand code (e.g. "AERO", "EDUC", "WEL", "ANAT", "PE", "MSLC").
   - "title": Default to originalTitle.
   - "code": Default to originalTitle or originalCode.
   - "day": 3-letter English day ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
   - "startTime": 24h format HH:MM (e.g. "09:00").
   - "endTime": 24h format HH:MM (e.g. "10:30").
   - "type": "Class", "Lecture", "Lab", "Tutorial", "Activity", "Recess", or "Lunch".
   - "room": Room / Venue if stated (or "").
   - "lecturer": Instructor / Teacher if stated (or "").
   - "group": Class section / group if stated (or "").

OUTPUT JSON SCHEMA:
{
  "detectedLanguage": "Japanese",
  "hasNonEnglishText": true,
  "courses": [
    {
      "originalTitle": "エアロビクス I",
      "originalCode": "エアロ",
      "translatedTitle": "Aerobics I",
      "translatedCode": "AERO",
      "title": "エアロビクス I",
      "code": "エアロビクス I",
      "day": "Tue",
      "startTime": "09:00",
      "endTime": "10:30",
      "type": "Class",
      "room": "",
      "lecturer": "",
      "group": ""
    }
  ]
}

Output ONLY valid JSON matching this schema. Do NOT wrap in markdown explanations.`;

    const payload = {
      contents: [{
        parts: [
          { text: promptText },
          { inline_data: { mime_type: mimeType || 'image/png', data: base64Data } }
        ]
      }],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.1,
        responseMimeType: "application/json"
      }
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${targetModelName}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || `Gemini API Error (${targetModelName})` });
    }

    if (!data.candidates || !data.candidates[0]) {
      return res.status(500).json({ error: `No candidates returned (${targetModelName})` });
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
