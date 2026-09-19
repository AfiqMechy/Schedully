      } else {
        this.applyThemeEngine();
      }

      this.renderAll();
      if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
        this.renderWatchGlance();
      }
      this._stagePending();
      if (typeof showToast === 'function') {
        showToast('Theme & course colors resynced!', 'info');
      }

      // Subtle icon rotation without changing button label or adding tick icon
      const icon = resyncBtn.querySelector('svg');
      if (icon) {
        icon.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          icon.style.transition = 'none';
          icon.style.transform = '';
        }, 500);
      }
    });
  }

  compressWallpaperImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX_WIDTH = 1440;
        const MAX_HEIGHT = 3200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // JPEG at 0.88 quality produces crisp 4K wallpaper with lightweight payload
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
        callback(compressedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  setWallpaperModeUI(isActive) {
    const paletteRow = document.getElementById('theme-palette-row');
    const badge = document.getElementById('wallpaper-active-badge');
    const btnRandTheme = document.getElementById('btn-randomize-theme');
    const btnRandCourse = document.getElementById('btn-randomize-course-colors');
    const btnRandSchedule = document.getElementById('btn-randomize-colors');
    const quickAdaptiveRow = document.getElementById('toggle-quick-adaptive')?.closest('.opt-row');

    if (isActive) {
      paletteRow?.classList.add('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.add('disabled-by-wallpaper');
      badge?.classList.remove('hidden');

      // Theme shuffle (🔄) stays active to shuffle extracted wallpaper swatches and anchor colors
      if (btnRandTheme) {
        btnRandTheme.classList.remove('disabled-by-wallpaper');
        btnRandTheme.removeAttribute('disabled');
        btnRandTheme.title = "Shuffle Wallpaper Palette Accent & Primary Anchor";
      }

      // Course card color shuffle (🎨) stays ACTIVE so you can shuffle card colors from the wallpaper palette
      if (btnRandCourse) {
        btnRandCourse.classList.remove('disabled-by-wallpaper');
        btnRandCourse.removeAttribute('disabled');
        btnRandCourse.title = "Shuffle Course Colors (from Wallpaper Palette)";
      }
      if (btnRandSchedule) {
        btnRandSchedule.classList.remove('disabled-by-wallpaper');
        btnRandSchedule.removeAttribute('disabled');
        btnRandSchedule.title = "Shuffle Course Colors (from Wallpaper Palette)";
      }
    } else {
      paletteRow?.classList.remove('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.remove('disabled-by-wallpaper');
      badge?.classList.add('hidden');

      [btnRandTheme, btnRandCourse, btnRandSchedule].forEach(btn => {
        if (btn) {
          btn.classList.remove('disabled-by-wallpaper');
          btn.removeAttribute('disabled');
          btn.title = btn.getAttribute('data-orig-title') || "Randomize";
        }
      });
    }
  }

  applyWallpaper(dataUrl, shouldExtract = true, isSwitchingPreset = false) {
    this.currentWallpaperData = dataUrl;

    const phoneCanvas = document.getElementById('phone-canvas');
    const wallpaperLayer = document.getElementById('phone-wallpaper-layer');
    const controlsBar = document.getElementById('wallpaper-controls-bar');
    const uploadContainer = document.getElementById('wallpaper-upload-container');
    const thumbPreview = document.getElementById('wallpaper-thumb-preview');

    if (wallpaperLayer) {
      wallpaperLayer.style.backgroundImage = `url("${dataUrl}")`;
      wallpaperLayer.style.opacity = '1';
    }

    if (phoneCanvas) {
      phoneCanvas.classList.add('has-photo-wallpaper');
    }

    if (controlsBar && thumbPreview) {
      thumbPreview.src = dataUrl;
      controlsBar.classList.remove('hidden');
    }

    if (uploadContainer) {
      uploadContainer.classList.add('hidden');
    }

    // Auto grey out & disable color palette and randomizer buttons
    this.setWallpaperModeUI(true);

    try {
      localStorage.setItem('schedully_wallpaper_data', dataUrl);
    } catch (e) {}

    // Also update the active preset's wallpaper record immediately
    if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
      this.presets[this.activePresetKey].wallpaper = dataUrl;
    }

    // Detect image aspect ratio for zero-crop fit
    const imgAspectChecker = new Image();
    } else {
      if (this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (this.wallpaperSwatches[idx]) {
            dot.setAttribute('data-color', this.wallpaperSwatches[idx]);
            dot.style.backgroundColor = this.wallpaperSwatches[idx];
          }
        });
        if (this.wallpaperHeader) {
          this.applyHeaderColor(this.wallpaperHeader);
        }
      }
      this.applyThemeEngine();
    }
  }

  removeWallpaper(isSwitchingPreset = false) {
    const phoneCanvas = document.getElementById('phone-canvas');
    const wallpaperLayer = document.getElementById('phone-wallpaper-layer');
    const controlsBar = document.getElementById('wallpaper-controls-bar');
    const uploadContainer = document.getElementById('wallpaper-upload-container');
    const input = document.getElementById('wallpaper-image-input');

    this.wallpaperAspect = null;
    if (typeof this.updateCanvasScreenRatio === 'function') {
      this.updateCanvasScreenRatio();
    }

    if (wallpaperLayer) {
      wallpaperLayer.style.backgroundImage = '';
      wallpaperLayer.style.opacity = '0';
    }

    if (phoneCanvas) {
      phoneCanvas.style.backgroundImage = '';
      phoneCanvas.classList.remove('has-photo-wallpaper');
    }

    if (controlsBar) {
      controlsBar.classList.add('hidden');
    }

    if (uploadContainer) {
      uploadContainer.classList.remove('hidden');
    }

    if (input) input.value = '';

    this.wallpaperSwatches = null;

    // Un-grey and re-enable color palette and randomizer buttons
    this.setWallpaperModeUI(false);

    try {
      localStorage.removeItem('schedully_wallpaper_data');
    } catch (e) {}

    // Only wipe from active preset if user explicitly tapped the Remove Wallpaper button (not when switching presets)
    if (!isSwitchingPreset) {
      this.currentWallpaperData = null;
      if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
        this.presets[this.activePresetKey].wallpaper = null;
        this.presets[this.activePresetKey].wallpaperSwatches = null;
      }
      this._stagePending();
    }

    // Reset back to active preset theme palette
    this.applyThemeEngine();
    this.renderTimetableGrid();
  }

  setupFontFamilyEngine() {
    const fontSelect = document.getElementById('select-font-family');
    const customFontInput = document.getElementById('custom-font-upload');
    const dropdownContainer = document.getElementById('font-dropdown-container');
    const triggerBtn = document.getElementById('btn-font-dropdown-trigger');
    const dropdownMenu = document.getElementById('font-dropdown-menu');
    const triggerName = document.getElementById('font-trigger-name');
    const triggerBadge = document.getElementById('font-trigger-badge');

    const fontMap = {
      'default': "'Google Sans', 'Product Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      'great-vibes': "'Great Vibes', cursive",
      'dancing-script': "'Dancing Script', cursive",
      'caveat': "'Caveat', cursive",
      'sacramento': "'Sacramento', cursive",
      'cinzel': "'Cinzel', Georgia, serif",
      'comfortaa': "'Comfortaa', cursive, sans-serif",
      'syne': "'Syne', sans-serif",
      'playfair': "'Playfair Display', Georgia, serif",
      'plus-jakarta': "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      'outfit': "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
      'jetbrains': "'JetBrains Mono', monospace",
      'space-grotesk': "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      'lexend': "'Lexend', -apple-system, BlinkMacSystemFont, sans-serif",
      'inter': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    };

    const fontNames = {
      'default': 'Google Sans',
      'great-vibes': 'Great Vibes',
      'dancing-script': 'Dancing Script',
      'caveat': 'Caveat',
      'sacramento': 'Sacramento',
      'cinzel': 'Cinzel',
      'comfortaa': 'Comfortaa',
      'syne': 'Syne',
      'playfair': 'Playfair Display',
      'plus-jakarta': 'Plus Jakarta Sans',
      'outfit': 'Outfit',
      'jetbrains': 'JetBrains Mono',
      'space-grotesk': 'Space Grotesk',
      'lexend': 'Lexend',
      'inter': 'Inter',
      'custom': 'Custom Font'
    };

    const fontSubtitles = {
      'default': 'Default Clean',
      'great-vibes': 'Royal Cursive Calligraphy',
      'dancing-script': 'Aesthetic Casual Flow',
      'caveat': 'Studygram Handwritten',
      'sacramento': 'Delicate Signature',
      'cinzel': 'Luxury Roman / Academia',
      'comfortaa': 'Cute Soft Aesthetic',
      'syne': 'Avant-Garde Art',
      'playfair': 'Classy Serif',
      'plus-jakarta': 'iOS Aesthetic Sans',
      'outfit': 'Geometric & Crisp',
      'jetbrains': 'Developer Monospace',
      'space-grotesk': 'Modernist Tech Display',
      'lexend': 'Ultra Readable',
      'inter': 'Neutral Clean',
      'custom': 'Custom Uploaded Font'
    };

    const triggerSub = document.getElementById('font-trigger-sub');

    this.currentFontKey = 'default';

    this.applyFontFamily = async (fontKey, customFamilyName = null, skipSave = false) => {
      this.currentFontKey = fontKey;
      let stack = fontMap[fontKey] || fontMap['default'];
      let displayName = fontNames[fontKey] || fontKey;

      if (fontKey === 'custom' && customFamilyName) {
        stack = `'${customFamilyName}', -apple-system, BlinkMacSystemFont, sans-serif`;
        displayName = this.customLoadedCleanName || customFamilyName;
      }
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        // ── Draw image to 160×160 canvas ─────────────────────────────────────
        const canvas = document.createElement('canvas');
        const ctx    = canvas.getContext('2d');
        const SIZE   = 160;
        canvas.width = canvas.height = SIZE;
        ctx.drawImage(img, 0, 0, SIZE, SIZE);
        const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

        // â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        const rgbToHex = (r, g, b) =>
          '#' + [r, g, b].map(x =>
            Math.min(255, Math.max(0, Math.round(x))).toString(16).padStart(2, '0')
          ).join('');

        const hexToRgb = h => [
          parseInt(h.slice(1, 3), 16),
          parseInt(h.slice(3, 5), 16),
          parseInt(h.slice(5, 7), 16)
        ];

        const rgbToHsl = (r, g, b) => {
          r /= 255; g /= 255; b /= 255;
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          const l = (max + min) / 2;
          let h = 0, s = 0;
          if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            else if (max === g) h = ((b - r) / d + 2) / 6;
            else h = ((r - g) / d + 4) / 6;
          }
          return [h * 360, s, l];
        };

        const hslToRgb = (h, s, l) => {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1; if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          h /= 360;
          return [hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)]
            .map(x => Math.round(x * 255));
        };

        const dist = (r1, g1, b1, r2, g2, b2) =>
          Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);

        // ── Phase 1: Filter valid pixels into RGB samples ────────────────────
        const samplePixels = [];
        let topLumSum = 0, topPxCount = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a < 128) continue;

          const py = Math.floor((i / 4) / SIZE);
          if (py < SIZE * 0.25) {
            topLumSum += 0.299 * r + 0.587 * g + 0.114 * b;
            topPxCount++;
          }

          // Skip extreme blown-out highlights and absolute black
          if (r + g + b < 30 || (r > 248 && g > 248 && b > 248)) continue;

          samplePixels.push([r, g, b]);
        }

        // ── Phase 2: Quantize into fine color clusters (16-step quantization) ─
        const clusters = {};
        samplePixels.forEach(([r, g, b]) => {
          const qr = Math.round(r / 16) * 16;
          const qg = Math.round(g / 16) * 16;
          const qb = Math.round(b / 16) * 16;
          const key = `${qr},${qg},${qb}`;
          if (!clusters[key]) {
            const [, s, l] = rgbToHsl(qr, qg, qb);
            clusters[key] = { r: qr, g: qg, b: qb, count: 0, s, l };
          }
          clusters[key].count++;
        });

        // ── Phase 3: Rank clusters by visual significance & vibrancy ─────────
        // Favor colors with good presence and rich tone (saturation + midtone presence)
        const rankedClusters = Object.values(clusters).map(c => {
          // Boost vibrant & rich tones, but allow high-count neutrals
          const vibranceScore = c.s * 1.5 + (1 - Math.abs(c.l - 0.45));
          const score = c.count * (vibranceScore + 0.2);
          return { ...c, score };
        }).sort((a, b) => b.score - a.score);

        // ── Phase 4: Pick dominant key colors with smart distance ─────────────
        const picked = [];
        for (const cluster of rankedClusters) {
          if (picked.length >= 6) break;
          // Distinct color threshold
          const isDistinct = picked.every(p => dist(cluster.r, cluster.g, cluster.b, p.r, p.g, p.b) >= 42);
          if (isDistinct) {
            picked.push(cluster);
          }
        }

        // Fallback if very few clusters picked
        if (picked.length === 0 && rankedClusters.length > 0) {
          picked.push(rankedClusters[0]);
        }

        // ── Phase 5: Build harmonious 8-swatch palette from dominant themes ────
        // The most dominant extracted color sets the primary aesthetic anchor
        const isDark = this.currentMode === 'dark';

        const calibrateColor = (r, g, b, targetLShift = 0) => {
          let [h, s, l] = rgbToHsl(r, g, b);
          if (isDark) {
            l = Math.max(0.30, Math.min(0.68, l + targetLShift));
          } else {
            l = Math.max(0.24, Math.min(0.60, l + targetLShift));
          }
          return rgbToHex(...hslToRgb(h, s, l));
        };

        const courseSwatches = [];
        
        // 1. Add calibrated direct picked colors
        picked.forEach(p => {
          courseSwatches.push(calibrateColor(p.r, p.g, p.b));
        });

        // 2. Synthesize tonal companions from dominant colors to reach 8 harmonious swatches
        let srcIdx = 0;
        const shifts = isDark ? [0.12, -0.10, 0.20, -0.16] : [-0.10, 0.12, -0.16, 0.18];
        let shiftIdx = 0;
        while (courseSwatches.length < 8 && picked.length > 0) {
          const src = picked[srcIdx % picked.length];
          const shift = shifts[shiftIdx % shifts.length];
          const comp = calibrateColor(src.r, src.g, src.b, shift);
          if (!courseSwatches.includes(comp)) {
            courseSwatches.push(comp);
          }
          srcIdx++;
