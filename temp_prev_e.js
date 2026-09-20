      this.extractColorsFromImage(dataUrl, isSwitchingPreset);
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

      document.documentElement.style.setProperty('--timetable-font-family', stack);
      
      // Update custom trigger UI
      if (triggerName) {
        triggerName.innerText = displayName;
      }
      if (triggerSub) {
        triggerSub.innerText = fontSubtitles[fontKey] || 'Custom Font';
      }
      if (triggerBadge) {
        triggerBadge.style.fontFamily = stack;
      }

      // Update active state in custom popover items
      if (dropdownMenu) {
        dropdownMenu.querySelectorAll('.font-option-item').forEach(item => {
          item.classList.toggle('active', item.getAttribute('data-font') === fontKey);
        });
      }

      // Ensure browser font cache is primed
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch (e) {}
      }

      if (fontSelect && fontKey !== 'custom') {
        fontSelect.value = fontKey;
      }
      this.renderTimetableGrid();
      if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
        this.renderWatchGlance();
      }
      if (!skipSave) {
        this._stagePending();
      }
    };

    // Toggle Popover Menu
    if (triggerBtn && dropdownMenu) {
      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !dropdownMenu.classList.contains('hidden');
        if (isOpen) {
          dropdownMenu.classList.add('hidden');
          triggerBtn.classList.remove('is-open');
        } else {
          dropdownMenu.classList.remove('hidden');
          triggerBtn.classList.add('is-open');
        }
      });

      // Option item selection
      dropdownMenu.querySelectorAll('.font-option-item').forEach(item => {
        item.addEventListener('click', () => {
          const fontKey = item.getAttribute('data-font');
          if (fontKey) {
            this.applyFontFamily(fontKey);
            dropdownMenu.classList.add('hidden');
            triggerBtn.classList.remove('is-open');
          }
        });
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!dropdownContainer?.contains(e.target)) {
          dropdownMenu.classList.add('hidden');
          triggerBtn.classList.remove('is-open');
        }
      });
    }

    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        this.applyFontFamily(e.target.value);
      });
    }

    if (customFontInput) {
      customFontInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
          const fontName = 'CustomFont_' + Date.now();
          const buffer = await file.arrayBuffer();
          const fontFace = new FontFace(fontName, buffer);
          await fontFace.load();
          document.fonts.add(fontFace);

          const cleanName = file.name.replace(/\.[^/.]+$/, "");
          this.customLoadedCleanName = cleanName;

          // Add or update custom item in custom dropdown menu
          if (dropdownMenu) {
            let customItem = dropdownMenu.querySelector('.font-option-item[data-font="custom"]');
            if (!customItem) {
              const scrollContainer = dropdownMenu.querySelector('.custom-font-menu-scroll');
              if (scrollContainer) {
                const customHeader = document.createElement('div');
                customHeader.className = 'font-group-header';
                customHeader.innerHTML = `
                  <svg class="w-3.5 h-3.5 shrink-0 font-header-icon-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                  </svg>
                  <span>Uploaded Custom Font</span>
                `;
                scrollContainer.appendChild(customHeader);

                const customGroup = document.createElement('div');
                customGroup.className = 'font-group-items';
                customItem = document.createElement('button');
                customItem.type = 'button';
                customItem.className = 'font-option-item active';
                customItem.setAttribute('data-font', 'custom');
                customItem.innerHTML = `
                  <div class="font-option-info">
                    <span class="font-option-title">${cleanName}</span>
                    <span class="font-option-desc">Custom Uploaded Font</span>
                  </div>
                  <span class="font-check-icon">✓</span>
                `;
                customItem.addEventListener('click', () => {
                  this.applyFontFamily('custom', fontName);
                  dropdownMenu.classList.add('hidden');
                  triggerBtn?.classList.remove('is-open');
                });
                customGroup.appendChild(customItem);
                scrollContainer.appendChild(customGroup);
              }
            } else {
              customItem.querySelector('.font-option-title').innerText = cleanName;
            }
          }

          // Fallback select element
          let customOpt = fontSelect.querySelector('option[value="custom"]');
          if (!customOpt) {
            customOpt = document.createElement('option');
            customOpt.value = 'custom';
            fontSelect.appendChild(customOpt);
          }
          customOpt.innerText = `Custom: ${cleanName}`;
          customOpt.selected = true;

          this.customLoadedFontName = fontName;
          await this.applyFontFamily('custom', fontName);
        } catch (err) {
          console.error("Font loading error:", err);
          alert("Could not load font. Please ensure the file is a valid .ttf, .otf, or .woff2 font file.");
        }
      });
    }

    // Font Shadow Toggle
    const toggleFontShadow = document.getElementById('toggle-font-shadow');
    const savedFontShadow = (localStorage.getItem('schedully_font_shadow') === 'yes');
    this.fontShadowEnabled = savedFontShadow;

    this.setFontShadow = (enabled, skipSave = false) => {
      this.fontShadowEnabled = !!enabled;
      try { localStorage.setItem('schedully_font_shadow', this.fontShadowEnabled ? 'yes' : 'no'); } catch (e) {}

      const timetableContainer = document.getElementById('lock-timetable-container');
      const universalGrid = document.getElementById('universal-timetable-grid');
      const watchCardsList = document.getElementById('watch-cards-list');
      const phoneLockHeader = document.getElementById('phone-lock-header');
      const phoneCanvas = document.getElementById('phone-canvas');

      if (timetableContainer) timetableContainer.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (universalGrid) universalGrid.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (watchCardsList) watchCardsList.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (phoneLockHeader) phoneLockHeader.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (phoneCanvas) phoneCanvas.classList.toggle('has-font-shadow', this.fontShadowEnabled);

      if (toggleFontShadow) {
        toggleFontShadow.querySelectorAll('.pill-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
        });
      }

      this.renderTimetableGrid();
      if (!skipSave) {
        this._stagePending();
      }
    };

    if (toggleFontShadow) {
      toggleFontShadow.querySelectorAll('.pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
        btn.addEventListener('click', () => {
          const isYes = (btn.getAttribute('data-val') === 'yes');
          this.setFontShadow(isYes);
        });
      });
    }
  }

  extractColorsFromImage(dataUrl, skipAutoStage = false, forceOverrideAll = false) {
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
          shiftIdx++;
        }

        // Fallback default if needed
        while (courseSwatches.length < 8) {
          courseSwatches.push(courseSwatches[0] || '#B91C1C');
        }

        // ── Phase 6: Set primary, secondary & tertiary for UI ────────────────
        const primaryHex   = courseSwatches[0];
        const secondaryHex = courseSwatches[1] || courseSwatches[0];
        const tertiaryHex  = courseSwatches[2] || courseSwatches[1] || courseSwatches[0];

        // ── Phase 7: Apply CSS + theme ────────────────────────────────────────
        const avgTopLum   = topPxCount > 0 ? topLumSum / topPxCount : 128;
        const clockColor  = avgTopLum > 130 ? '#111827' : '#FFFFFF';
        const clockShadow = avgTopLum > 130 ? 'none'    : '0 2px 12px rgba(0,0,0,0.7)';

        const root = document.documentElement;
        root.style.setProperty('--m3-sys-color-primary',             primaryHex);
        root.style.setProperty('--m3-sys-color-on-primary',          this._isColorDark(primaryHex)   ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-primary-container',   primaryHex + (isDark ? '30' : '20'));
        root.style.setProperty('--m3-sys-color-secondary',           secondaryHex);
        root.style.setProperty('--m3-sys-color-on-secondary',        this._isColorDark(secondaryHex) ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-secondary-container', secondaryHex + (isDark ? '28' : '1E'));
        root.style.setProperty('--m3-sys-color-tertiary',            tertiaryHex);
        root.style.setProperty('--m3-sys-color-on-tertiary',         this._isColorDark(tertiaryHex)  ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-tertiary-container',  tertiaryHex + (isDark ? '28' : '1E'));

        // Header color: deeper, richly framing companion tone
        const [pr, pg, pb] = hexToRgb(primaryHex);
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const headerL = isDark ? Math.max(0.18, Math.min(0.38, pl * 0.70)) : Math.min(0.42, Math.max(0.24, pl * 0.82));
        const headerHex = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.15), headerL));

        this.wallpaperHeader    = headerHex;
        this.wallpaperPrimary   = primaryHex;
        this.wallpaperSecondary = secondaryHex;
        this.wallpaperTertiary  = tertiaryHex;
        this.wallpaperSwatches  = courseSwatches;

        this.applyHeaderColor(headerHex);
        this.setWallpaperModeUI(true);
        this.applyFontColor('');

        const lockHeader = document.getElementById('phone-lock-header');
        if (lockHeader) {
          lockHeader.style.color      = clockColor;
          lockHeader.style.textShadow = clockShadow;
        }

        if (this.activePresetKey && this.presets?.[this.activePresetKey]) {
          Object.assign(this.presets[this.activePresetKey], {
            wallpaperSwatches:  courseSwatches,
            wallpaperPrimary:   primaryHex,
            wallpaperSecondary: secondaryHex,
            wallpaperTertiary:  tertiaryHex,
            wallpaperHeader:    headerHex,
          });
        }

        this.classes.forEach((cls, idx) => {
          cls.customColor = courseSwatches[idx % courseSwatches.length];
          cls.color       = courseSwatches[idx % courseSwatches.length];
        });

        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (courseSwatches[idx]) {
            dot.setAttribute('data-color', courseSwatches[idx]);
            dot.style.backgroundColor = courseSwatches[idx];
          }
        });
        if (courseSwatches.length > 0) this.selectedColor = courseSwatches[0];

        this.applyThemeEngine();
        this.renderAll();
        if (!skipAutoStage) this._stagePending();

      } catch (err) {
        console.warn('Color extraction failed:', err);
      }
    };
    img.src = dataUrl;
  }

