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

    this.wallpaperSwatches = null;
    this.wallpaperPrimary = null;
    this.wallpaperSecondary = null;
    this.wallpaperTertiary = null;
    this.wallpaperHeader = null;

    // Un-grey and re-enable color palette and randomizer buttons
    this.setWallpaperModeUI(false);

    try {
      localStorage.removeItem('schedully_wallpaper_data');
      localStorage.removeItem('schedully_wallpaper_swatches');
      localStorage.removeItem('schedully_wallpaper_primary');
      localStorage.removeItem('schedully_wallpaper_secondary');
      localStorage.removeItem('schedully_wallpaper_tertiary');
      localStorage.removeItem('schedully_wallpaper_header');
    } catch (e) {}

    // Only wipe from active preset if user explicitly tapped the Remove Wallpaper button (not when switching presets)
    if (!isSwitchingPreset) {
      this.currentWallpaperData = null;
      if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
        this.presets[this.activePresetKey].wallpaper = null;
        this.presets[this.activePresetKey].wallpaperSwatches = null;
        this.presets[this.activePresetKey].wallpaperPrimary = null;
        this.presets[this.activePresetKey].wallpaperSecondary = null;
        this.presets[this.activePresetKey].wallpaperTertiary = null;
        this.presets[this.activePresetKey].wallpaperHeader = null;
      }
    }

    // Automatically seamless full-color resync back to the clean theme palette
    this.resyncColors(true);
  }

  setupFontFamilyEngine() {
    const fontSelect = document.getElementById('select-font-family');
    const customFontInput = document.getElementById('custom-font-upload');
    const floatingCustomFontInput = document.getElementById('floating-custom-font-upload');
    const dropdownContainer = document.getElementById('font-dropdown-container');
    const floatingDropdownContainer = document.getElementById('floating-font-dropdown-container');
    const triggerBtn = document.getElementById('btn-font-dropdown-trigger');
    const floatingTriggerBtn = document.getElementById('btn-floating-font-trigger');
    const dropdownMenu = document.getElementById('font-dropdown-menu');
    const floatingDropdownMenu = document.getElementById('floating-font-dropdown-menu');
    const triggerName = document.getElementById('font-trigger-name');
    const floatingTriggerName = document.getElementById('floating-font-trigger-name');
    const triggerBadge = document.getElementById('font-trigger-badge');
    const floatingTriggerBadge = document.getElementById('floating-font-trigger-badge');
    const triggerSub = document.getElementById('font-trigger-sub');
    const floatingTriggerSub = document.getElementById('floating-font-trigger-sub');

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

    // Populate floating dropdown menu options by cloning from main dropdown
    if (dropdownMenu && floatingDropdownMenu) {
      const sourceScroll = dropdownMenu.querySelector('.custom-font-menu-scroll');
      const targetScroll = floatingDropdownMenu.querySelector('.custom-font-menu-scroll');
      if (sourceScroll && targetScroll) {
        targetScroll.innerHTML = sourceScroll.innerHTML;
      }
    }

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
      
      // Update custom trigger UI in both locations
      [triggerName, floatingTriggerName].forEach(el => {
        if (el) el.innerText = displayName;
      });
      [triggerSub, floatingTriggerSub].forEach(el => {
        if (el) el.innerText = fontSubtitles[fontKey] || 'Custom Font';
      });
      [triggerBadge, floatingTriggerBadge].forEach(el => {
        if (el) el.style.fontFamily = stack;
      });

      // Update active state in both menus
      [dropdownMenu, floatingDropdownMenu].forEach(menu => {
        if (menu) {
          menu.querySelectorAll('.font-option-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-font') === fontKey);
          });
        }
      });

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

    // Toggle and selection handlers for both dropdown menus
    const wireDropdown = (btn, menu, container) => {
      if (!btn || !menu) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        } else {
          menu.classList.remove('hidden');
          btn.classList.add('is-open');
        }
      });

      menu.addEventListener('click', (e) => {
        const item = e.target.closest('.font-option-item');
        if (!item) return;
        const fontKey = item.getAttribute('data-font');
        if (fontKey) {
          this.applyFontFamily(fontKey);
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        }
      });

      document.addEventListener('click', (e) => {
        if (!container?.contains(e.target)) {
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        }
      });
    };

    wireDropdown(triggerBtn, dropdownMenu, dropdownContainer);
    wireDropdown(floatingTriggerBtn, floatingDropdownMenu, floatingDropdownContainer);

    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        this.applyFontFamily(e.target.value);
      });
    }

    // Handle font upload across inputs
    const handleFontUpload = async (file) => {
      if (!file) return;
      try {
        const fontName = 'CustomFont_' + Date.now();
        const buffer = await file.arrayBuffer();
        const fontFace = new FontFace(fontName, buffer);
        await fontFace.load();
        document.fonts.add(fontFace);

        const cleanName = file.name.replace(/\.[^/.]+$/, "");
        this.customLoadedCleanName = cleanName;

        [dropdownMenu, floatingDropdownMenu].forEach(menu => {
          if (!menu) return;
          let customItem = menu.querySelector('.font-option-item[data-font="custom"]');
          if (!customItem) {
            const scrollContainer = menu.querySelector('.custom-font-menu-scroll');
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
              customGroup.appendChild(customItem);
              scrollContainer.appendChild(customGroup);
            }
          } else {
            const titleEl = customItem.querySelector('.font-option-title');
            if (titleEl) titleEl.innerText = cleanName;
          }
        });

        this.customLoadedFontName = fontName;
        await this.applyFontFamily('custom', fontName);
      } catch (err) {
        console.error("Font loading error:", err);
        alert("Could not load font. Please ensure the file is a valid .ttf, .otf, or .woff2 font file.");
      }
    };

    customFontInput?.addEventListener('change', (e) => handleFontUpload(e.target.files[0]));
    floatingCustomFontInput?.addEventListener('change', (e) => handleFontUpload(e.target.files[0]));

    // Font Shadow Toggle
    const toggleFontShadow = document.getElementById('toggle-font-shadow');
    const toggleFloatingFontShadow = document.getElementById('toggle-floating-font-shadow');
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

      [toggleFontShadow, toggleFloatingFontShadow].forEach(group => {
        if (group) {
          group.querySelectorAll('.pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
          });
        }
      });

      this.renderTimetableGrid();
      if (!skipSave) {
        this._stagePending();
      }
    };

    [toggleFontShadow, toggleFloatingFontShadow].forEach(group => {
      if (group) {
        group.querySelectorAll('.pill-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
          btn.addEventListener('click', () => {
            const isYes = (btn.getAttribute('data-val') === 'yes');
            this.setFontShadow(isYes);
          });
        });
      }
    });

    // Reset Font & Style to Default
    const btnFloatingResetFont = document.getElementById('btn-floating-reset-font');
    btnFloatingResetFont?.addEventListener('click', () => {
      this.applyFontFamily('default');
      this.setFontShadow(false);
      this.fontScaleAll = 1.0;
      this.fontScaleCards = 1.0;
      this.fontScaleHeader = 1.0;
      this.fontScaleTitle = 1.0;
      this.fontScaleTrademark = 1.0;
      this.gridFontScale = 1.0;
      this.gridFontSizeVal = 9;
      try { localStorage.setItem('schedully_font_scale', '1.0'); } catch (e) {}
      this.renderTimetableGrid();
      window.soundFX?.play?.('zoom');
      window.haptics?.trigger?.('selection');
    });
  }

  setupDaysAndTimeEngine() {
    const floatingStartSelect = document.getElementById('floating-grid-start-time');
    const floatingEndSelect = document.getElementById('floating-grid-end-time');
    const toggleFloatingAxis = document.getElementById('toggle-floating-axis-mode');
    const toggleFloatingClock = document.getElementById('toggle-floating-clock-type');
    const btnFloatingResetDays = document.getElementById('btn-floating-reset-days');
    const floatingDayChecks = document.querySelectorAll('.floating-day-check');
    const sidebarDayChecks = document.querySelectorAll('.day-toggle');

    // Helper: sync active days UI across floating card and sidebar
    const syncDaysUI = () => {
      floatingDayChecks.forEach(chk => {
        chk.checked = this.activeDays.includes(chk.value);
      });
      sidebarDayChecks.forEach(chk => {
        chk.checked = this.activeDays.includes(chk.value);
      });
    };

    // Helper: sync start/end time select dropdowns
    const syncTimeSelects = () => {
      const startStr = `${String(this.gridStartHour).padStart(2, '0')}:00`;
      const endStr = `${String(this.gridEndHour).padStart(2, '0')}:00`;
      if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = startStr;
      if (floatingStartSelect) floatingStartSelect.value = startStr;
      if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = endStr;
      if (floatingEndSelect) floatingEndSelect.value = endStr;
    };

    // Helper: sync axis mode toggles (TIME vs PERIOD)
    const syncAxisUI = () => {
      const mode = this.axisMode || 'time';
      document.querySelectorAll('#toggle-axis-mode .pill-btn, #toggle-floating-axis-mode .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === mode);
      });
      const rowFloatingStart = document.getElementById('row-floating-start-time');
      const rowFloatingEnd = document.getElementById('row-floating-end-time');
      const rowFloatingClock = document.getElementById('row-floating-clock-type');
      const isPeriod = (mode === 'period');
      if (rowFloatingStart) rowFloatingStart.style.display = isPeriod ? 'none' : 'flex';
      if (rowFloatingEnd) rowFloatingEnd.style.display = isPeriod ? 'none' : 'flex';
      if (rowFloatingClock) rowFloatingClock.style.display = isPeriod ? 'none' : 'flex';
    };

    // Helper: sync clock format toggles (12-HOUR vs 24-HOUR)
    const syncClockUI = () => {
      const format = this.clockFormat || '12';
      document.querySelectorAll('#toggle-clock-type .pill-btn, #toggle-floating-clock-type .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === format);
      });
    };

    // Expose sync helper to class instance for loadPreset & external calls
    this.syncDaysAndTimeControlsUI = () => {
      syncDaysUI();
      syncTimeSelects();
      syncAxisUI();
      syncClockUI();
    };

    // 1. Floating Day Checkbox change handler
    floatingDayChecks.forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.floating-day-check:checked')).map(c => c.value);
        this.activeDays = checked.length > 0 ? checked : ['Mon'];
        syncDaysUI();
        this.renderTimetableGrid();
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 2. Floating Axis Mode Toggle (TIME vs PERIOD)
    toggleFloatingAxis?.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val') || 'time';
        this.axisMode = val;
        syncAxisUI();
        this.updateCourseFormMode();
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 3. Floating Start Time Select
    floatingStartSelect?.addEventListener('change', (e) => {
      this.gridStartHour = parseInt(e.target.value.split(':')[0], 10);
      syncTimeSelects();
      this.renderTimetableGrid();
      this._stagePending();
      window.soundFX?.play?.('tap');
    });

    // 4. Floating End Time Select
    floatingEndSelect?.addEventListener('change', (e) => {
      this.gridEndHour = parseInt(e.target.value.split(':')[0], 10);
      syncTimeSelects();
      this.renderTimetableGrid();
      this._stagePending();
      window.soundFX?.play?.('tap');
    });

    // 5. Floating Clock Format Toggle (12-HOUR vs 24-HOUR)
    toggleFloatingClock?.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val') || '12';
        this.clockFormat = val;
        syncClockUI();
        this.renderTimetableGrid();
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 6. Reset to Default Button in Floating Card
    btnFloatingResetDays?.addEventListener('click', () => {
      this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      this.gridStartHour = 8;
      this.gridEndHour = 20;
      this.axisMode = 'time';
      this.clockFormat = '12';
      this.syncDaysAndTimeControlsUI();
      this.updateCourseFormMode();
      this.renderTimetableGrid();
      if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
        this.renderWatchGlance();
      }
      this._stagePending();
      window.soundFX?.play?.('zoom');
      window.haptics?.trigger?.('selection');
    });

    // Run initial synchronization
    this.syncDaysAndTimeControlsUI();
  }

  extractColorsFromImage(dataUrl, skipAutoStage = false, forceOverrideAll = false) {
    const img = new Image();
    if (!dataUrl.startsWith('data:')) {
      img.crossOrigin = 'Anonymous';
    }
    const runExtraction = () => {
      try {
        // ── Draw image to 160×160 canvas ─────────────────────────────────────
        const canvas = document.createElement('canvas');
        const ctx    = canvas.getContext('2d');
        const SIZE   = 160;
        canvas.width = canvas.height = SIZE;
        ctx.drawImage(img, 0, 0, SIZE, SIZE);
        const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

        // ── Helpers ──────────────────────────────────────────────────────────
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
        const rankedClusters = Object.values(clusters).map(c => {
          const vibranceScore = c.s * 1.5 + (1 - Math.abs(c.l - 0.45));
          const score = c.count * (vibranceScore + 0.2);
          return { ...c, score };
        }).sort((a, b) => b.score - a.score);

        // ── Phase 4: Pick dominant key colors with smart distance ─────────────
        const picked = [];
        for (const cluster of rankedClusters) {
          if (picked.length >= 6) break;
          const isDistinct = picked.every(p => dist(cluster.r, cluster.g, cluster.b, p.r, p.g, p.b) >= 36);
          if (isDistinct) {
            picked.push(cluster);
          }
        }

        if (picked.length === 0 && rankedClusters.length > 0) {
          picked.push(rankedClusters[0]);
        }

        // ── Phase 5: Build harmonious 8-swatch palette from dominant themes ────
        const isDark = (this.currentMode === 'dark' || (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));

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
        picked.forEach(p => {
          courseSwatches.push(calibrateColor(p.r, p.g, p.b));
        });

        let srcIdx = 0;
        const shifts = isDark ? [0.12, -0.10, 0.20, -0.16, 0.26, -0.22] : [-0.10, 0.12, -0.16, 0.18, -0.22, 0.24];
        let shiftIdx = 0;
        let attempts = 0;
        while (courseSwatches.length < 8 && picked.length > 0 && attempts < 30) {
          attempts++;
          const src = picked[srcIdx % picked.length];
          const shift = shifts[shiftIdx % shifts.length];
          const comp = calibrateColor(src.r, src.g, src.b, shift);
          if (!courseSwatches.includes(comp)) {
            courseSwatches.push(comp);
          }
          srcIdx++;
          shiftIdx++;
        }

        while (courseSwatches.length < 8) {
          const baseHex = courseSwatches[courseSwatches.length - 1] || '#B91C1C';
          const [br, bg, bb] = hexToRgb(baseHex);
          let [bh, bs, bl] = rgbToHsl(br, bg, bb);
          bl = Math.max(0.25, Math.min(0.70, bl + (courseSwatches.length % 2 === 0 ? 0.08 : -0.08)));
          courseSwatches.push(rgbToHex(...hslToRgb((bh + 24 * courseSwatches.length) % 360, bs, bl)));
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

        // Must reset these flags here so applyThemeEngine/renderTimetableGrid uses wallpaper colors.
        // globalAdaptiveColor=false (from a previous shuffle/custom) would block wallpaper card colors.
        this.userHasPickedBgColor = false;
        this.userHasPickedHeaderColor = false;
        this.userHasPickedSurfaceColor = false;
        this.userHasPickedFontColor = false;
        this.globalAdaptiveColor = true;
        document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === 'yes');
        });

        try {
          localStorage.setItem('schedully_wallpaper_swatches', JSON.stringify(courseSwatches));
          localStorage.setItem('schedully_wallpaper_primary', primaryHex);
          localStorage.setItem('schedully_wallpaper_secondary', secondaryHex);
          localStorage.setItem('schedully_wallpaper_tertiary', tertiaryHex);
          localStorage.setItem('schedully_wallpaper_header', headerHex);
        } catch (e) {}

        this.applyHeaderColor(headerHex);
        this.setWallpaperModeUI(true);
        this.applyFontColor('');

        const lockHeader = document.getElementById('phone-lock-header');
        if (lockHeader) {
          lockHeader.style.color      = clockColor;
          lockHeader.style.textShadow = clockShadow;
        }

        // Auto-adapt all timetable courses to extracted wallpaper swatches (grouped by unique course code)
        const uniqueCodes = [...new Set((this.classes || []).map(item => item.code))];
        (this.classes || []).forEach((cls, idx) => {
          const codeIdx = uniqueCodes.indexOf(cls.code);
          const colorIdx = codeIdx >= 0 ? codeIdx : idx;
          cls.customColor = courseSwatches[colorIdx % courseSwatches.length];
          cls.color       = courseSwatches[colorIdx % courseSwatches.length];
          delete cls.isManualCustomColor;
          delete cls.fontColor;
        });

        if (this.activePresetKey && this.presets?.[this.activePresetKey]) {
          Object.assign(this.presets[this.activePresetKey], {
            classes:            this.classes,
            wallpaper:          dataUrl,
            wallpaperSwatches:  courseSwatches,
            wallpaperPrimary:   primaryHex,
            wallpaperSecondary: secondaryHex,
            wallpaperTertiary:  tertiaryHex,
            wallpaperHeader:    headerHex,
          });
        }

        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (courseSwatches[idx]) {
            dot.setAttribute('data-color', courseSwatches[idx]);
            dot.style.backgroundColor = courseSwatches[idx];
          }
        });
        if (courseSwatches.length > 0) this.selectedColor = courseSwatches[0];

        this.applyThemeEngine();
        this.renderAll();
        if (typeof this.syncFloatingEditorUI === 'function') {
          this.syncFloatingEditorUI();
        }
        if (typeof this.syncTitleBarModeUI === 'function') {
          this.syncTitleBarModeUI();
        }
        if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        if (!skipAutoStage) this._stagePending(true);

        // Safety net: deferred re-render after browser CSS variable flush (catches edge cases)
        setTimeout(() => {
          if (this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
            this.globalAdaptiveColor = true;
            this.userHasPickedBgColor = false;
            this.userHasPickedHeaderColor = false;
            this.userHasPickedSurfaceColor = false;
            this.userHasPickedFontColor = false;
            this.applyThemeEngine();
            this.renderAll();
          }
        }, 120);

      } catch (err) {
        console.warn('Color extraction failed:', err);
      }
    };

    // Guard against double-execution (img.complete fires before decode on data URLs in Chrome)
    let _extractionStarted = false;
    const safeRunExtraction = () => {
      if (_extractionStarted) return;
      _extractionStarted = true;
      runExtraction();
    };

    img.onload = safeRunExtraction;
    img.onerror = (err) => console.warn('Wallpaper image load failed in extraction:', err);
    img.src = dataUrl;
    // NOTE: Do NOT add an img.complete synchronous fallback here.
    // On Chrome/WebKit, img.complete is true immediately after setting img.src for data URLs
    // BEFORE the pixel data is decoded, so drawImage() would produce a blank/black canvas.
    // The img.onload event fires once the image is fully decoded and ready to draw.
  }

