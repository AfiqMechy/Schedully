
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.currentMode === 'auto') {
          this.applyThemeEngine();
        }
      });
    }

    this.updateClock();
    setInterval(() => this.updateClock(), 60000);

    // this.loadFromLocal();
    this.renderAll();
    if (typeof this.applyCanvasZoom === 'function') {
      this.applyCanvasZoom(false);
    }
    document.body.classList.add('app-ready');
    this.updateHistoryButtonUI();
    this.setupAutoImmersiveFullscreen();
  }

  setupAutoImmersiveFullscreen() {
    // Edge-to-edge status bar background matching: ensure theme-color matches current canvas
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark-mode');
      const themeColor = isDark ? '#0B0F19' : '#F6F8FB';
      let metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        document.head.appendChild(metaTheme);
      }
      metaTheme.setAttribute('content', themeColor);
    };
    updateThemeColor();
    // Also listen for theme toggles to update theme-color dynamically
    const observer = new MutationObserver(() => updateThemeColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  initDOMElements() {
    this.headerTheme = document.getElementById('header-theme');
    this.contentTheme = document.getElementById('content-theme');
    
    this.headerLayoutOptions = document.getElementById('header-layout-options');
    this.contentLayoutOptions = document.getElementById('content-layout-options');

    this.headerAddCourse = document.getElementById('header-add-course');
    this.contentAddCourse = document.getElementById('content-add-course');
    this.headerFileImport = document.getElementById('header-file-import');
    this.contentFileImport = document.getElementById('content-file-import');
    this.headerScanner = document.getElementById('header-scanner');
    this.contentScanner = document.getElementById('content-scanner');

    this.ocrFileInput = document.getElementById('ocr-file-input');
    this.ocrLoadingBar = document.getElementById('ocr-loading-bar');
    this.ocrLoadingText = document.getElementById('ocr-loading-text');
    this.aiScanOverlay = document.getElementById('ai-scan-fullscreen-overlay');
    
    const inputApiKey = document.getElementById('input-api-key');
    if (inputApiKey) {
      const savedKey = localStorage.getItem('tf_api_key');
      if (savedKey) inputApiKey.value = savedKey;
      
      // Auto-save key as user types or pastes
      inputApiKey.addEventListener('input', (e) => {
        localStorage.setItem('tf_api_key', e.target.value.trim());
      });
    }

    this.addCourseForm = document.getElementById('add-course-form');
    this.inputCourseCode = document.getElementById('input-course-code');
    this.rowPeriodSelect = document.getElementById('row-period-select');
    this.inputPeriodSelect = document.getElementById('input-period-select');
    this.rowStartTime = document.getElementById('row-start-time');
    this.rowEndTime = document.getElementById('row-end-time');
    this.inputStartTime = document.getElementById('input-start-time');
    this.inputEndTime = document.getElementById('input-end-time');
    this.inputType = document.getElementById('input-type');
    this.inputLocation = document.getElementById('input-location');
    this.inputLecturer = document.getElementById('input-lecturer');
    this.inputGroup = document.getElementById('input-group');

    this.btnExportICAL = document.getElementById('btn-export-ical');
    this.btnExportCSV = document.getElementById('btn-export-csv');
    this.btnDownloadHD = document.getElementById('btn-download-hd');
    this.btnSavePdf   = document.getElementById('btn-save-pdf');
    this.btnAutoResolve = document.getElementById('btn-auto-resolve');
    this.btnResetLayout = document.getElementById('btn-reset-layout');

    this.clashAlert = document.getElementById('clash-alert');
    this.clashTitle = document.getElementById('clash-title');
    this.clashDesc = document.getElementById('clash-desc');

    this.slotsBadgeCount = document.getElementById('slots-badge-count');
    this.settingsCoursesBadge = document.getElementById('settings-courses-badge');
    this.btnClearAll = document.getElementById('btn-clear-all');
    this.universalTimetableGrid = document.getElementById('universal-timetable-grid');
    this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
        }
      });
    }

    this.updateClock();
    setInterval(() => this.updateClock(), 60000);

    // this.loadFromLocal();
    this.renderAll();
    if (typeof this.applyCanvasZoom === 'function') {
      this.applyCanvasZoom(false);
    }
    document.body.classList.add('app-ready');
    this.updateHistoryButtonUI();
    this.setupAutoImmersiveFullscreen();
  }

  setupAutoImmersiveFullscreen() {
    // Edge-to-edge status bar background matching: ensure theme-color matches current canvas
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark-mode');
      const themeColor = isDark ? '#0B0F19' : '#F6F8FB';
      let metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        document.head.appendChild(metaTheme);
      }
      metaTheme.setAttribute('content', themeColor);
    };
    updateThemeColor();
    // Also listen for theme toggles to update theme-color dynamically
    const observer = new MutationObserver(() => updateThemeColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  initDOMElements() {
    this.headerTheme = document.getElementById('header-theme');
    this.contentTheme = document.getElementById('content-theme');
    
    this.headerLayoutOptions = document.getElementById('header-layout-options');
    this.contentLayoutOptions = document.getElementById('content-layout-options');

    this.headerAddCourse = document.getElementById('header-add-course');
    this.contentAddCourse = document.getElementById('content-add-course');
    this.headerFileImport = document.getElementById('header-file-import');
    this.contentFileImport = document.getElementById('content-file-import');
    this.headerScanner = document.getElementById('header-scanner');
    this.contentScanner = document.getElementById('content-scanner');

    this.ocrFileInput = document.getElementById('ocr-file-input');
    this.ocrLoadingBar = document.getElementById('ocr-loading-bar');
    this.ocrLoadingText = document.getElementById('ocr-loading-text');
    this.aiScanOverlay = document.getElementById('ai-scan-fullscreen-overlay');
    
    const inputApiKey = document.getElementById('input-api-key');
    if (inputApiKey) {
      const savedKey = localStorage.getItem('tf_api_key');
      if (savedKey) inputApiKey.value = savedKey;
      
      // Auto-save key as user types or pastes
      inputApiKey.addEventListener('input', (e) => {
        localStorage.setItem('tf_api_key', e.target.value.trim());
      });
    }

    this.addCourseForm = document.getElementById('add-course-form');
    this.inputCourseCode = document.getElementById('input-course-code');
    this.rowPeriodSelect = document.getElementById('row-period-select');
    this.inputPeriodSelect = document.getElementById('input-period-select');
    this.rowStartTime = document.getElementById('row-start-time');
    this.rowEndTime = document.getElementById('row-end-time');
    this.inputStartTime = document.getElementById('input-start-time');
    this.inputEndTime = document.getElementById('input-end-time');
    this.inputType = document.getElementById('input-type');
    this.inputLocation = document.getElementById('input-location');
    this.inputLecturer = document.getElementById('input-lecturer');
    this.inputGroup = document.getElementById('input-group');

    this.btnExportICAL = document.getElementById('btn-export-ical');
    this.btnExportCSV = document.getElementById('btn-export-csv');
    this.btnDownloadHD = document.getElementById('btn-download-hd');
    this.btnSavePdf   = document.getElementById('btn-save-pdf');
    this.btnAutoResolve = document.getElementById('btn-auto-resolve');
    this.btnResetLayout = document.getElementById('btn-reset-layout');

    this.clashAlert = document.getElementById('clash-alert');
    this.clashTitle = document.getElementById('clash-title');
    this.clashDesc = document.getElementById('clash-desc');

    this.slotsBadgeCount = document.getElementById('slots-badge-count');
    this.settingsCoursesBadge = document.getElementById('settings-courses-badge');
    this.btnClearAll = document.getElementById('btn-clear-all');
    this.universalTimetableGrid = document.getElementById('universal-timetable-grid');
    this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    this.courseSearchDock = document.getElementById('course-search-dock');
    this.btnFloatingCourseSearch = document.getElementById('btn-floating-course-search');
    this.btnCloseCourseSearch = document.getElementById('btn-close-course-search');
    this.courseSearchContainer = document.getElementById('course-search-container');
    this.courseSearchInput = document.getElementById('course-search-input');
    this.renderAll();
    if (save && typeof this._stagePending === 'function') {
      this._stagePending(true);
    }
  }

  applyThemeEngine() {
    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }

    document.body.classList.toggle('dark-mode', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark-mode', resolvedMode === 'dark');

    // Sync UI mode dots
    document.querySelectorAll('.theme-mode-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
    });

    // Sync bottom capsule theme toggle button title
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    if (btnThemeToggle) {
      btnThemeToggle.setAttribute('title', resolvedMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    let paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    let selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;

    const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');

    // If Photo Wallpaper is active, synthesize a fully adaptive palette from the 3-color wallpaper palette
    if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
      const primaryHex   = this.wallpaperPrimary   || this.wallpaperSwatches[0];
      const secondaryHex = this.wallpaperSecondary || this.wallpaperSwatches[1] || primaryHex;
      const tertiaryHex  = this.wallpaperTertiary  || this.wallpaperSwatches[2] || secondaryHex;
      const isDarkHex = this._isColorDark(primaryHex);

      // Parse primary RGB for bg tinting
      let pr = 37, pg = 99, pb = 235;
      if (primaryHex.startsWith('#') && primaryHex.length === 7) {
        pr = parseInt(primaryHex.slice(1, 3), 16) || 37;
        pg = parseInt(primaryHex.slice(3, 5), 16) || 99;
        pb = parseInt(primaryHex.slice(5, 7), 16) || 235;
      }
      // Parse secondary for surface tinting
      let sr = pr, sg = pg, sb = pb;
      if (secondaryHex.startsWith('#') && secondaryHex.length === 7) {
        sr = parseInt(secondaryHex.slice(1, 3), 16) || sr;
        sg = parseInt(secondaryHex.slice(3, 5), 16) || sg;
        sb = parseInt(secondaryHex.slice(5, 7), 16) || sb;
      }

      const onPrimaryHex = isDarkHex ? '#FFFFFF' : '#0F172A';
      const adaptiveBg = resolvedMode === 'dark'
        ? `rgba(${Math.max(10, Math.round(pr * 0.10))}, ${Math.max(15, Math.round(pg * 0.10))}, ${Math.max(25, Math.round(pb * 0.10))}, 1)`
        : `rgba(${Math.min(255, Math.round(246 + (pr - 128) * 0.05))}, ${Math.min(255, Math.round(248 + (pg - 128) * 0.05))}, ${Math.min(255, Math.round(252 + (pb - 128) * 0.05))}, 1)`;
      // Surface tinted by secondary for more variety
      const adaptiveSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(14, Math.round(sr * 0.14 + 10))}, ${Math.max(20, Math.round(sg * 0.14 + 12))}, ${Math.max(32, Math.round(sb * 0.14 + 16))}, 0.90)`
        : '#FFFFFF';
      const adaptiveVariant = resolvedMode === 'dark'
        ? `rgba(${Math.max(20, Math.round(sr * 0.18 + 15))}, ${Math.max(28, Math.round(sg * 0.18 + 18))}, ${Math.max(44, Math.round(sb * 0.18 + 22))}, 1)`
        : `rgba(${sr}, ${sg}, ${sb}, 0.12)`;
      const adaptiveGridSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(12, Math.round(pr * 0.12 + 8))}, ${Math.max(18, Math.round(pg * 0.12 + 10))}, ${Math.max(30, Math.round(pb * 0.12 + 14))}, 0.80)`
        : '#FFFFFF';

      // Dedicated distinct header color: slightly deeper & rich framing shade
      let headerColorHex = this.wallpaperHeader;
      if (!headerColorHex) {
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const headerL = resolvedMode === 'dark' ? Math.max(0.18, pl * 0.72) : Math.min(0.40, pl * 0.82);
        headerColorHex = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.1), headerL));
      }

      selectedTheme = {
        top: primaryHex,
        secondary: secondaryHex,
        tertiary: tertiaryHex,
        bottom: primaryHex + (resolvedMode === 'dark' ? '30' : '18'),
        bg: adaptiveBg,
        surface: adaptiveSurface,
        variant: adaptiveVariant,
        defaultBg: adaptiveBg,
        defaultHeader: headerColorHex,
        defaultSurface: adaptiveGridSurface,
        text: resolvedMode === 'dark' ? '#F8FAFC' : '#0F172A',
        subtext: resolvedMode === 'dark' ? '#94A3B8' : '#475569',
        outline: resolvedMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        onPrimary: onPrimaryHex,
        swatches: this.wallpaperSwatches,
        courseSwatches: this.wallpaperSwatches.slice(0, 6)
      };
    }

    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-background', selectedTheme.bg);
    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }

    document.body.classList.toggle('dark-mode', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark-mode', resolvedMode === 'dark');

    // Sync UI mode dots
    document.querySelectorAll('.theme-mode-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
    });

    // Sync bottom capsule theme toggle button title
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    if (btnThemeToggle) {
      btnThemeToggle.setAttribute('title', resolvedMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    let paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    let selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;

    const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');

    // If Photo Wallpaper is active, synthesize a fully adaptive palette from the 3-color wallpaper palette
    if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
      const primaryHex   = this.wallpaperPrimary   || this.wallpaperSwatches[0];
      const secondaryHex = this.wallpaperSecondary || this.wallpaperSwatches[1] || primaryHex;
      const tertiaryHex  = this.wallpaperTertiary  || this.wallpaperSwatches[2] || secondaryHex;
      const isDarkHex = this._isColorDark(primaryHex);

      // Parse primary RGB for bg tinting
      let pr = 37, pg = 99, pb = 235;
      if (primaryHex.startsWith('#') && primaryHex.length === 7) {
        pr = parseInt(primaryHex.slice(1, 3), 16) || 37;
        pg = parseInt(primaryHex.slice(3, 5), 16) || 99;
        pb = parseInt(primaryHex.slice(5, 7), 16) || 235;
      }
      // Parse secondary for surface tinting
      let sr = pr, sg = pg, sb = pb;
      if (secondaryHex.startsWith('#') && secondaryHex.length === 7) {
        sr = parseInt(secondaryHex.slice(1, 3), 16) || sr;
        sg = parseInt(secondaryHex.slice(3, 5), 16) || sg;
        sb = parseInt(secondaryHex.slice(5, 7), 16) || sb;
      }

      const onPrimaryHex = isDarkHex ? '#FFFFFF' : '#0F172A';
      const adaptiveBg = resolvedMode === 'dark'
        ? `rgba(${Math.max(10, Math.round(pr * 0.10))}, ${Math.max(15, Math.round(pg * 0.10))}, ${Math.max(25, Math.round(pb * 0.10))}, 1)`
        : `rgba(${Math.min(255, Math.round(246 + (pr - 128) * 0.05))}, ${Math.min(255, Math.round(248 + (pg - 128) * 0.05))}, ${Math.min(255, Math.round(252 + (pb - 128) * 0.05))}, 1)`;
      // Surface tinted by secondary for more variety
      const adaptiveSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(14, Math.round(sr * 0.14 + 10))}, ${Math.max(20, Math.round(sg * 0.14 + 12))}, ${Math.max(32, Math.round(sb * 0.14 + 16))}, 0.90)`
        : '#FFFFFF';
      const adaptiveVariant = resolvedMode === 'dark'
        ? `rgba(${Math.max(20, Math.round(sr * 0.18 + 15))}, ${Math.max(28, Math.round(sg * 0.18 + 18))}, ${Math.max(44, Math.round(sb * 0.18 + 22))}, 1)`
        : `rgba(${sr}, ${sg}, ${sb}, 0.12)`;
      const adaptiveGridSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(12, Math.round(pr * 0.12 + 8))}, ${Math.max(18, Math.round(pg * 0.12 + 10))}, ${Math.max(30, Math.round(pb * 0.12 + 14))}, 0.80)`
        : '#FFFFFF';

      // Dedicated distinct header color: slightly deeper & rich framing shade
      let headerColorHex = this.wallpaperHeader;
      if (!headerColorHex) {
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const headerL = resolvedMode === 'dark' ? Math.max(0.18, pl * 0.72) : Math.min(0.40, pl * 0.82);
        headerColorHex = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.1), headerL));
      }

      selectedTheme = {
        top: primaryHex,
        secondary: secondaryHex,
        tertiary: tertiaryHex,
        bottom: primaryHex + (resolvedMode === 'dark' ? '30' : '18'),
        bg: adaptiveBg,
        surface: adaptiveSurface,
        variant: adaptiveVariant,
        defaultBg: adaptiveBg,
        defaultHeader: headerColorHex,
        defaultSurface: adaptiveGridSurface,
        text: resolvedMode === 'dark' ? '#F8FAFC' : '#0F172A',
        subtext: resolvedMode === 'dark' ? '#94A3B8' : '#475569',
        outline: resolvedMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        onPrimary: onPrimaryHex,
        swatches: this.wallpaperSwatches,
        courseSwatches: this.wallpaperSwatches.slice(0, 6)
      };
    }

    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-background', selectedTheme.bg);
    root.style.setProperty('--m3-sys-color-surface', selectedTheme.surface);
    root.style.setProperty('--m3-sys-color-surface-variant', selectedTheme.variant);
    root.style.setProperty('--m3-sys-text-primary', selectedTheme.text);
    root.style.setProperty('--m3-sys-text-secondary', selectedTheme.subtext);
    root.style.setProperty('--m3-sys-color-outline', selectedTheme.outline);
    root.style.setProperty('--m3-sys-color-primary', selectedTheme.top);
    root.style.setProperty('--m3-sys-color-primary-container', selectedTheme.bottom || selectedTheme.variant);
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
        this.renderAll();
        if (!skipAutoStage) this._stagePending();

      } catch (err) {
        console.warn('Color extraction failed:', err);
      }
    };
    img.src = dataUrl;
  }

  setupCustomColorModalEngine() {
    const modal = document.getElementById('custom-color-modal');
    const preview = document.getElementById('modal-color-preview');
    const hexInput = document.getElementById('modal-color-hex-input');
    const btnClose = document.getElementById('btn-close-color-modal');
    const btnCancel = document.getElementById('btn-cancel-custom-color');
    const btnApply = document.getElementById('btn-apply-custom-color');
    const titleEl = document.getElementById('custom-color-modal-title');

    const vibrantGrid = document.getElementById('palette-grid-vibrant');
    const pastelGrid = document.getElementById('palette-grid-pastel');
    const earthyGrid = document.getElementById('palette-grid-earthy');

    const VIBRANT_SHADES = [
      '#2563EB', '#3B82F6', '#60A5FA', '#0284C7', '#0EA5E9', '#06B6D4', '#10B981', '#059669',
      '#F59E0B', '#D97706', '#EA580C', '#E11D48', '#F43F5E', '#E11D48', '#9333EA', '#7C3AED'
    ];

    const PASTEL_SHADES = [
      '#BFDBFE', '#BAE6FD', '#A5F3FC', '#A7F3D0', '#BBF7D0', '#FDE68A', '#FED7AA', '#FECDD3',
      '#FBCFE8', '#DDD6FE', '#E0E7FF', '#C7D2FE', '#E2E8F0', '#F1F5F9', '#CBD5E1', '#94A3B8'
    ];

    const EARTHY_SHADES = [
      '#1E293B', '#0F172A', '#334155', '#475569', '#3F3F46', '#27272A', '#18181B', '#3E2723',
      '#4E342E', '#5D4037', '#6D4C41', '#795548', '#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8'
    ];

    let activeColorCallback = null;
    let currentColor = '#2563EB';

    const updatePreview = (hex) => {
      let cleanHex = hex.replace('#', '').trim();
      if (cleanHex.length === 3) cleanHex = cleanHex.split('').map(x => x + x).join('');
      if (cleanHex.length !== 6) return;
      const formattedHex = '#' + cleanHex.toUpperCase();
      currentColor = formattedHex;
      if (preview) {
        preview.style.backgroundColor = formattedHex;
        preview.style.color = this.getContrastColor(formattedHex);
      }
      if (hexInput && hexInput.value.toUpperCase() !== cleanHex.toUpperCase()) {
        hexInput.value = cleanHex.toUpperCase();
      }

      // Highlight active dot
      modal?.querySelectorAll('.color-modal-dot').forEach(dot => {
        dot.classList.toggle('ring-2', dot.getAttribute('data-hex').toUpperCase() === formattedHex);
        dot.classList.toggle('ring-blue-500', dot.getAttribute('data-hex').toUpperCase() === formattedHex);
      });
    };

    const renderDots = (grid, colors) => {
      if (!grid) return;
      grid.innerHTML = '';
      colors.forEach(hex => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'color-modal-dot w-7 h-7 rounded-lg border border-black/10 transition-all hover:scale-110 active:scale-95 shadow-xs';
        dot.style.backgroundColor = hex;
        dot.setAttribute('data-hex', hex);
        dot.addEventListener('click', () => updatePreview(hex));
        grid.appendChild(dot);
      });
    };

    renderDots(vibrantGrid, VIBRANT_SHADES);
    renderDots(pastelGrid, PASTEL_SHADES);
    renderDots(earthyGrid, EARTHY_SHADES);

    hexInput?.addEventListener('input', (e) => {
      updatePreview(e.target.value);
    });

    const closeModal = () => {
      modal?.classList.add('hidden');
      activeColorCallback = null;
    };

    btnClose?.addEventListener('click', closeModal);
    btnCancel?.addEventListener('click', closeModal);

    btnApply?.addEventListener('click', () => {
      if (typeof activeColorCallback === 'function') {
        activeColorCallback(currentColor);
      }
      closeModal();
    });

    // Public method to open color modal anywhere in the app
        this._stagePending();
      });
    });

    // Theme Mode Dots
    document.querySelectorAll('.theme-mode-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.theme-mode-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentMode = dot.getAttribute('data-mode');
        try { localStorage.setItem('schedully_theme_mode', this.currentMode); } catch (e) {}
        this.applyThemeEngine();
        this.renderAll();
        this._stagePending();
      });
    });

    // Device Platform Switching Logic
    document.querySelectorAll('#device-type-toggles [data-device]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window._globalDragSuppressUntil && Date.now() < window._globalDragSuppressUntil && !e._isProgrammaticDrag) {
          return;
        }
        const targetBtn = e.target.closest('[data-device]');
        const device = targetBtn ? (targetBtn.getAttribute('data-device') || 'phone') : (btn.getAttribute('data-device') || 'phone');
        this.switchDevice(device, true);
      });
    });

    // Swatch Color Dots
    document.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.selectedColor = dot.getAttribute('data-color');
      });
    });

    // Zoom and Theme Bottom Controls
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomLabel = document.getElementById('zoom-label-text');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const mainPhoneWrapper = document.getElementById('main-phone-wrapper');
    
    const getBaseModelDimensions = () => {
      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas) return { width: 380, height: 770 };
      if (originalCanvas.classList.contains('canvas-tablet')) return { width: 920, height: 690 };
      if (originalCanvas.classList.contains('canvas-watch')) {
        if (originalCanvas.classList.contains('watch-shape-band')) return { width: 220, height: 418 };
        if (originalCanvas.classList.contains('watch-shape-capsule')) return { width: 195, height: 440 };
        if (originalCanvas.classList.contains('watch-shape-round')) return { width: 340, height: 340 };
        return { width: 320, height: 390 };
      }
      if (originalCanvas.classList.contains('canvas-paper')) {
        const h = (originalCanvas.scrollHeight && originalCanvas.scrollHeight > 300) ? originalCanvas.scrollHeight : 540;
        return { width: 720, height: h };
      }
      return { width: 380, height: 770 };
    };

    // Auto-center canvas helper ensuring the model (phone/tablet/paper) is always centered on both axes
    const centerCanvasModel = (smooth = false) => {
      const scrollArea = document.getElementById('canvas-scroll-area');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scrollArea || !wrapper) return;
      
      const scrollW = scrollArea.scrollWidth;
      const clientW = scrollArea.clientWidth;
      const scrollH = scrollArea.scrollHeight;
      const clientH = scrollArea.clientHeight;
      
      const targetLeft = scrollW > clientW ? Math.round((scrollW - clientW) / 2) : 0;
      const targetTop = scrollH > clientH ? Math.round((scrollH - clientH) / 2) : 0;

      if (smooth) {
        scrollArea.scrollTo({ left: targetLeft, top: targetTop, behavior: 'smooth' });
      } else {
        scrollArea.scrollLeft = targetLeft;
        scrollArea.scrollTop = targetTop;
      }
    };
    window.centerCanvasModel = centerCanvasModel;

    // ═══════════════════════════════════════════════════════════════
    // IPHONE CAMERA-GRADE FLUID CONTINUOUS OPTICAL ZOOM ENGINE
    // Exponential Spring Damping + 120FPS Subpixel Hardware Render
    // ═══════════════════════════════════════════════════════════════
    let renderedZoom = this.zoomScale || 0.85;
    let targetZoom = renderedZoom;
    let zoomRaf = null;

    const renderZoomFrame = (scale) => {
      const scalerContainer = document.getElementById('canvas-scaler-container');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scalerContainer || !wrapper) return;

      const dims = getBaseModelDimensions();
      const visualW = dims.width * scale;
        this.renderAll();
        this._stagePending();
      });
    });

    // Device Platform Switching Logic
    document.querySelectorAll('#device-type-toggles [data-device]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window._globalDragSuppressUntil && Date.now() < window._globalDragSuppressUntil && !e._isProgrammaticDrag) {
          return;
        }
        const targetBtn = e.target.closest('[data-device]');
        const device = targetBtn ? (targetBtn.getAttribute('data-device') || 'phone') : (btn.getAttribute('data-device') || 'phone');
        this.switchDevice(device, true);
      });
    });

    // Swatch Color Dots
    document.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.selectedColor = dot.getAttribute('data-color');
      });
    });

    // Zoom and Theme Bottom Controls
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomLabel = document.getElementById('zoom-label-text');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const mainPhoneWrapper = document.getElementById('main-phone-wrapper');
    
    const getBaseModelDimensions = () => {
      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas) return { width: 380, height: 770 };
      if (originalCanvas.classList.contains('canvas-tablet')) return { width: 920, height: 690 };
      if (originalCanvas.classList.contains('canvas-watch')) {
        if (originalCanvas.classList.contains('watch-shape-band')) return { width: 220, height: 418 };
        if (originalCanvas.classList.contains('watch-shape-capsule')) return { width: 195, height: 440 };
        if (originalCanvas.classList.contains('watch-shape-round')) return { width: 340, height: 340 };
        return { width: 320, height: 390 };
      }
      if (originalCanvas.classList.contains('canvas-paper')) {
        const h = (originalCanvas.scrollHeight && originalCanvas.scrollHeight > 300) ? originalCanvas.scrollHeight : 540;
        return { width: 720, height: h };
      }
      return { width: 380, height: 770 };
    };

    // Auto-center canvas helper ensuring the model (phone/tablet/paper) is always centered on both axes
    const centerCanvasModel = (smooth = false) => {
      const scrollArea = document.getElementById('canvas-scroll-area');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scrollArea || !wrapper) return;
      
      const scrollW = scrollArea.scrollWidth;
      const clientW = scrollArea.clientWidth;
      const scrollH = scrollArea.scrollHeight;
      const clientH = scrollArea.clientHeight;
      
      const targetLeft = scrollW > clientW ? Math.round((scrollW - clientW) / 2) : 0;
      const targetTop = scrollH > clientH ? Math.round((scrollH - clientH) / 2) : 0;

      if (smooth) {
        scrollArea.scrollTo({ left: targetLeft, top: targetTop, behavior: 'smooth' });
      } else {
        scrollArea.scrollLeft = targetLeft;
        scrollArea.scrollTop = targetTop;
      }
    };
    window.centerCanvasModel = centerCanvasModel;

    // ═══════════════════════════════════════════════════════════════
    // IPHONE CAMERA-GRADE FLUID CONTINUOUS OPTICAL ZOOM ENGINE
    // Exponential Spring Damping + 120FPS Subpixel Hardware Render
    // ═══════════════════════════════════════════════════════════════
    let renderedZoom = this.zoomScale || 0.85;
    let targetZoom = renderedZoom;
    let zoomRaf = null;

    const renderZoomFrame = (scale) => {
      const scalerContainer = document.getElementById('canvas-scaler-container');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scalerContainer || !wrapper) return;

      const dims = getBaseModelDimensions();
      const visualW = dims.width * scale;
      const visualH = dims.height * scale;

      // Scaler footprint container defines exact scaled boundary for grid centering & panning
      scalerContainer.style.transition = 'none';
      scalerContainer.style.width = `${visualW.toFixed(2)}px`;
      scalerContainer.style.height = `${visualH.toFixed(2)}px`;
      scalerContainer.style.margin = '0 auto';
      scalerContainer.style.display = 'block';
      scalerContainer.style.position = 'relative';

      // Pure hardware-accelerated matrix transformation
      wrapper.style.transition = 'none';
        this.renderAll();
        this._stagePending(true);
      });
    }

    // Randomize Theme Palette Button (Bottom Pill Bar)
    const btnRandThemeEl = document.getElementById('btn-randomize-theme');
    btnRandThemeEl?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('click');
      
      // Visual feedback spin animation
      const iconSvg = btnRandThemeEl.querySelector('svg');
      if (iconSvg) {
        iconSvg.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        iconSvg.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          iconSvg.style.transition = 'none';
          iconSvg.style.transform = 'none';
        }, 450);
      }

      const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        // Rotate/shuffle the wallpaper swatches order so a new wallpaper-extracted color becomes the primary anchor & header
        const swatches = [...this.wallpaperSwatches];
        // Fisher-Yates shuffle
        for (let i = swatches.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [swatches[i], swatches[j]] = [swatches[j], swatches[i]];
        }
        this.wallpaperSwatches = swatches;
        this.wallpaperPrimary = swatches[0];
        this.wallpaperSecondary = swatches[1] || swatches[0];
        this.wallpaperTertiary = swatches[2] || swatches[1] || swatches[0];

        // Recalculate companion header color
        const [pr, pg, pb] = hexToRgb(swatches[0]);
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const isDark = (this.currentMode === 'dark');
        const headerL = isDark ? Math.max(0.18, Math.min(0.38, pl * 0.70)) : Math.min(0.42, Math.max(0.24, pl * 0.82));
        this.wallpaperHeader = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.15), headerL));

        if (this.activePresetKey && this.presets?.[this.activePresetKey]) {
          Object.assign(this.presets[this.activePresetKey], {
            wallpaperSwatches: swatches,
            wallpaperPrimary: swatches[0],
            wallpaperSecondary: this.wallpaperSecondary,
            wallpaperTertiary: this.wallpaperTertiary,
            wallpaperHeader: this.wallpaperHeader,
          });
        }

        // Reassign course card colors based on new wallpaper palette order
        const uniqueCodes = [...new Set(this.classes.map(c => c.code))];
        const codeMap = {};
        uniqueCodes.forEach((code, idx) => {
          codeMap[code] = swatches[idx % swatches.length];
        });
        this.classes.forEach(c => {
          c.customColor = codeMap[c.code] || swatches[0];
          c.color = codeMap[c.code] || swatches[0];
          c.isManualCustomColor = true;
        });

        // Update swatch picker dots in UI
        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (swatches[idx]) {
            dot.setAttribute('data-color', swatches[idx]);
            dot.style.backgroundColor = swatches[idx];
          }
        });

        this.applyThemeEngine();
        this.renderAll();
        this._stagePending(true);
        if (typeof showToast === 'function') {
          showToast('Wallpaper palette shuffled!', 'info');
        }
        return;
      }

      const resolvedMode = (this.currentMode === 'dark' || (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';
      const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
      const paletteKeys = Object.keys(paletteGroup);
      const available = paletteKeys.filter(k => k !== this.currentPalette);
      const randomPalette = available[Math.floor(Math.random() * available.length)] || paletteKeys[0];
      if (randomPalette) {
        this.setPalette(randomPalette, true);
        if (typeof showToast === 'function') {
          const formattedName = randomPalette.charAt(0).toUpperCase() + randomPalette.slice(1);
          showToast(`Theme: ${formattedName}`, 'info');
        }
      }
    });

    // Randomize Course Card Colors Button (Bottom Pill Bar)
    const btnRandCourseEl = document.getElementById('btn-randomize-course-colors');
    btnRandCourseEl?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('click');
      
        this.renderAll();
        this._stagePending(true);
        if (typeof showToast === 'function') {
          showToast('Wallpaper palette shuffled!', 'info');
        }
        return;
      }

      const resolvedMode = (this.currentMode === 'dark' || (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';
      const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
      const paletteKeys = Object.keys(paletteGroup);
      const available = paletteKeys.filter(k => k !== this.currentPalette);
      const randomPalette = available[Math.floor(Math.random() * available.length)] || paletteKeys[0];
      if (randomPalette) {
        this.setPalette(randomPalette, true);
        if (typeof showToast === 'function') {
          const formattedName = randomPalette.charAt(0).toUpperCase() + randomPalette.slice(1);
          showToast(`Theme: ${formattedName}`, 'info');
        }
      }
    });

    // Randomize Course Card Colors Button (Bottom Pill Bar)
    const btnRandCourseEl = document.getElementById('btn-randomize-course-colors');
    btnRandCourseEl?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('click');
      
      const iconSvg = btnRandCourseEl.querySelector('svg');
      if (iconSvg) {
        iconSvg.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        iconSvg.style.transform = 'rotate(180deg) scale(1.15)';
        setTimeout(() => {
          iconSvg.style.transition = 'none';
          iconSvg.style.transform = 'none';
        }, 450);
      }

      const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
      
      let paletteColors;
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        // Strictly shuffle colors extracted from the wallpaper!
        paletteColors = [...this.wallpaperSwatches];
      } else {
        paletteColors = [
          '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8',
          '#D97706', '#F59E0B', '#FBBF24', '#B45309', '#7C3AED',
          '#A855F7', '#C084FC', '#DB2777', '#EC4899', '#F472B6',
          '#0284C7', '#38BDF8', '#10B981', '#34D399', '#059669',
          '#6D597A', '#B596C1', '#C2A878', '#E34F26', '#006D77'
        ];
      }

      // Shuffle assignment per unique course code
      const shuffled = [...paletteColors].sort(() => Math.random() - 0.5);
      const codeColorMap = {};
      const uniqueCodes = [...new Set(this.classes.map(c => c.code))];
      uniqueCodes.forEach((code, idx) => {
        codeColorMap[code] = shuffled[idx % shuffled.length];
      });

      this.classes.forEach(c => {
        c.customColor = codeColorMap[c.code];
        c.color = codeColorMap[c.code];
        c.isManualCustomColor = true;
      });

      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      this.renderAll();
      this._stagePending(true);
      if (typeof showToast === 'function') {
        showToast('Course colors shuffled!', 'info');
      }
    });

    // Expandable Canvas Controls Popover Toggle
    const btnTogglePopover = document.getElementById('btn-toggle-canvas-popover');
    const canvasPopover = document.getElementById('canvas-controls-popover');
    const canvasRatioPopover = document.getElementById('canvas-ratio-popover');

    if (btnTogglePopover && canvasPopover) {
      btnTogglePopover.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = canvasPopover.classList.toggle('hidden');
        if (isHidden && canvasRatioPopover) {
          canvasRatioPopover.classList.add('hidden');
        }
        if (!canvasPopover.classList.contains('hidden')) {
          setTimeout(window.syncGlassSliders, 20);
          setTimeout(window.syncGlassSliders, 120);
          setTimeout(window.syncGlassSliders, 360); // after popoverSpring animation (300ms) fully settles
        }
      });

      // Keep popover open while customizing themes/sidebars/controls.
      // Do NOT close when clicking sidebars, theme pickers, theme mode toggles, or bottom toolbar!

      // 3. Grid Dimensions & Position
      if (settings.gridWidthVal) {
        this.gridWidthVal = settings.gridWidthVal;
        const gwEl = document.getElementById('grid-width-val');
        if (gwEl) gwEl.value = this.gridWidthVal;
      }
      if (settings.gridHeightVal) {
        this.gridHeightVal = settings.gridHeightVal;
        const ghEl = document.getElementById('grid-height-val');
        if (ghEl) ghEl.value = this.gridHeightVal;
      }
      if (settings.gridYPosVal !== undefined) {
        this.gridYPosVal = settings.gridYPosVal;
        const gyEl = document.getElementById('grid-ypos-val');
        if (gyEl) gyEl.value = this.gridYPosVal;
      }
      if (settings.fontSizeVal) {
        this.fontSizeVal = settings.fontSizeVal;
        this.gridFontSizeVal = settings.fontSizeVal;
        const fsEl = document.getElementById('grid-fontsize-val');
        if (fsEl) fsEl.value = this.fontSizeVal;
      }

      // 4. Clock Format
      if (settings.clockFormat) {
        this.clockFormat = settings.clockFormat;
        document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === this.clockFormat);
        });
      }

      // 5. Background Blur
      if (typeof settings.bgBlurEnabled === 'boolean') {
        this.bgBlurEnabled = settings.bgBlurEnabled;
        this.bgBlurIntensity = settings.bgBlurIntensity || 10;
        
        const toggleBgBlur = document.getElementById('toggle-bg-blur');
        const blurControl = document.getElementById('blur-intensity-control');
        const blurSlider = document.getElementById('slider-bg-blur');
        const blurValText = document.getElementById('blur-intensity-val');

        if (toggleBgBlur) {
          toggleBgBlur.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.bgBlurEnabled ? 'yes' : 'no'));
          });
        }
        if (blurControl) blurControl.classList.toggle('hidden', !this.bgBlurEnabled);
        if (blurSlider) blurSlider.value = this.bgBlurIntensity;
        if (blurValText) blurValText.innerText = `${this.bgBlurIntensity}px`;
        document.documentElement.style.setProperty('--wallpaper-blur-val', this.bgBlurEnabled ? `${this.bgBlurIntensity}px` : '0px');
      }

      // 6. Font Family
      if (settings.fontFamily && this.applyFontFamily) {
        this.applyFontFamily(settings.fontFamily, null, true);
      }

      // 7. Timetable Opacity
      if (settings.timetableOpacity && this.setTimetableOpacity) {
        this.setTimetableOpacity(settings.timetableOpacity);
      }

      // 8. Title
      if (settings.showTitle !== undefined) {
        this.setTitleVisibility(settings.showTitle, false);
      }
      if (settings.titleText) {
        this.updateTitleText(settings.titleText);
      }

      // 8b. Trademark
      if (settings.showTrademark !== undefined) {
        this.showTrademark = settings.showTrademark;
        const toggleTrademark = document.getElementById('toggle-trademark');
        if (toggleTrademark) {
          toggleTrademark.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.showTrademark ? 'yes' : 'no'));
          });
        }
        const rowTrademark = document.getElementById('row-trademark-text');
        const rowStyle = document.getElementById('row-trademark-style');
        if (rowTrademark) {
          rowTrademark.style.display = this.showTrademark ? 'flex' : 'none';
        }
        if (rowStyle) {
          rowStyle.style.display = this.showTrademark ? 'flex' : 'none';
        }
        if (this.lockTrademarkFooter) {
          this.lockTrademarkFooter.style.display = this.showTrademark ? 'inline-flex' : 'none';
        }
      }
      if (settings.trademarkText !== undefined) {
        this.updateTrademarkText(settings.trademarkText);
      }
      if (settings.trademarkStyle !== undefined) {
        this.applyTrademarkStyle(settings.trademarkStyle);
      }

      // 9. Active Days

        this.presets = {
          default: {
            name: 'Default',
            classes: [],
            settings: freshSettings,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null
          }
        };
        this.activePresetKey = 'default';
        this.applyPresetSettings(freshSettings);
        this.updatePresetSelectDropdown();
        this.renderAll();

        // 3. Reset Firebase Cloud Data
        if (window.schedullyFirebase?.currentUser) {
          await window.schedullyFirebase.resetUserData(freshSettings);
        }

        // Cache the clean state in local storage so refreshes don't pull ghost data
        localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
        localStorage.setItem('schedully_active_preset', 'default');
        localStorage.setItem('schedully_classes', JSON.stringify([]));

        this.markSaved();
        alert("Account reset successfully! Fresh default workspace is ready.");
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', async () => {
        profileSettingsMenu?.classList.add('hidden');

        if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);

        await window.schedullyFirebase?.logout();
        if (btnSaveCloud) btnSaveCloud.style.display = 'none';

        // Reset in-memory state and reload offline storage so previous user's data does not linger
        localStorage.removeItem('schedully_presets');
        localStorage.removeItem('schedully_active_preset');
        localStorage.removeItem('schedully_classes');
        localStorage.removeItem('schedully_wallpaper_data');
        localStorage.removeItem('schedully_wallpaper_swatches');
        localStorage.removeItem('schedully_wallpaper_primary');
        localStorage.removeItem('schedully_wallpaper_secondary');
        localStorage.removeItem('schedully_wallpaper_tertiary');
        localStorage.removeItem('schedully_wallpaper_header');

        this.classes = [];
        this.currentWallpaperData = null;
        this.wallpaperSwatches = null;
        this.wallpaperPrimary = null;
        this.wallpaperSecondary = null;
        this.wallpaperTertiary = null;
        this.wallpaperHeader = null;
        this.customHexColors = null;
        this.historyUndoStack = [];
        this.historyRedoStack = [];
        this._hasUnsavedCloudChanges = false;
        this.updateHistoryButtonUI();
        this.removeWallpaper(true);
        if (this.phoneCanvas) {
          this.phoneCanvas.style.backgroundColor = '';
          this.phoneCanvas.className = 'm3-phone-canvas';
        }
        this.applyHeaderColor('');
        this.applyFontColor('');
        this.currentPalette = 'nord';
        this.currentMode = 'light';
        this.applyThemeEngine();

        const freshSettings = this.getPresetSettings();
        this.presets = {
          default: {
            name: 'Default',
            classes: [],
            settings: freshSettings,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null
          }
        };
        this.activePresetKey = 'default';
        this.updatePresetSelectDropdown();
        this.renderAll();
      });
    }

    // Listen for Auth state updates
    const initAuthListener = () => {
      if (window.schedullyFirebase) {

        const freshSettings = this.getPresetSettings();
        this.presets = {
          default: {
            name: 'Default',
            classes: [],
            settings: freshSettings,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null
          }
        };
        this.activePresetKey = 'default';
        this.updatePresetSelectDropdown();
        this.renderAll();
      });
    }

    // Listen for Auth state updates
    const initAuthListener = () => {
      if (window.schedullyFirebase) {
        window.schedullyFirebase.onUserChangedCallback = (user) => {
          if (user) {
            if (displayNameEl) displayNameEl.innerText = user.displayName || 'User';
            if (statusTextEl) statusTextEl.innerText = user.email || 'Online';
            if (avatarBadge) {
              avatarBadge.classList.remove('hidden');
              if (user.photoURL) {
                avatarBadge.innerHTML = `<img src="${user.photoURL}" class="w-full h-full object-cover rounded-full" alt="User Avatar" />`;
              } else {
                avatarBadge.innerText = (user.displayName || 'U').charAt(0).toUpperCase();
              }
            }
            if (authIconLoggedOut) authIconLoggedOut.classList.add('hidden');
            if (authOutsideLabel) authOutsideLabel.innerText = 'Profile';
          } else {
            if (avatarBadge) {
              avatarBadge.classList.add('hidden');
              avatarBadge.innerHTML = 'U';
            }
            if (authIconLoggedOut) authIconLoggedOut.classList.remove('hidden');
            if (authOutsideLabel) authOutsideLabel.innerText = 'Login';
          }
        };

        // Fires on login (initial load) and whenever cloud data updates
        window.schedullyFirebase.onDataSyncedCallback = (data) => {
          try {
            // Case 1: Brand new user with NO cloud data yet -> Clear local storage & start completely fresh
            if (!data || (!data.presets && !data.classes && !data.settings)) {
              console.log("New user detected (no cloud data) - initializing clean fresh workspace.");
              localStorage.removeItem('schedully_presets');
              localStorage.removeItem('schedully_active_preset');
              localStorage.removeItem('schedully_classes');
              localStorage.removeItem('schedully_wallpaper_data');

              this.classes = [];
              const freshSettings = {
                cardCornerStyle: 'rounded',
                cardCornerRadiusVal: 8,
                currentMode: 'light',
                currentPalette: 'nord',
                gridWidthVal: 100,
                gridHeightVal: 49,
                gridYPosVal: 0,
                fontSizeVal: 9,
                clockFormat: '12-hour',
                bgBlurEnabled: false,
                bgBlurIntensity: 10,
                fontFamily: 'default',
                timetableOpacity: 100,
                showTitle: true,
                titleText: 'Untitled',
                activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                gridStartHour: 8,
                gridEndHour: 20
              };
              this.presets = {
                default: { name: 'Default', classes: [], settings: freshSettings, wallpaper: null, wallpaperSwatches: null }
              };
              this.activePresetKey = 'default';
              this.removeWallpaper();
              this.applyPresetSettings(freshSettings);
              this.updatePresetSelectDropdown();
              this.renderAll();
              this.markSaved();
              return;
            }

            // Case 2: Existing user WITH cloud data -> Restore progress accurately without losing anything!
            if (data.presets && typeof data.presets === 'object') {
              this.presets = data.presets;
              this.updatePresetSelectDropdown();
            }

            if (data.activePreset && this.presets[data.activePreset]) {
              this.activePresetKey = data.activePreset;
            }
            if (data.zoomScale) {
              const parsedZoom = parseFloat(data.zoomScale);
              if (!isNaN(parsedZoom) && parsedZoom >= 0.3 && parsedZoom <= 2.0) {
                this.zoomScale = parsedZoom;
                try { localStorage.setItem('schedully_zoom_scale', String(this.zoomScale)); } catch (e) {}
                if (typeof this.applyCanvasZoom === 'function') {
                  this.applyCanvasZoom(false);
                }
              }
            }

            // Restore schedule classes
            if (Array.isArray(data.classes)) {
              this.classes = data.classes;
            } else if (data.activePreset && this.presets[data.activePreset] && Array.isArray(this.presets[data.activePreset].classes)) {
              this.classes = this.presets[data.activePreset].classes;
            }

            // If wallpaper is active, only assign wallpaper swatch if course has no existing color
            if (this.phoneCanvas?.classList.contains('has-photo-wallpaper') && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
              this.classes.forEach((cls, idx) => {
                if (!cls.customColor && !cls.color) {
                  cls.customColor = this.wallpaperSwatches[idx % this.wallpaperSwatches.length];
                  cls.color = cls.customColor;
                }
              });
            }

            this.renderAll();

            // Cache cloud data into localStorage so offline refresh preserves progress
            localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
            localStorage.setItem('schedully_active_preset', this.activePresetKey);
            localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
            if (this.wallpaperSwatches) {
              localStorage.setItem('schedully_wallpaper_swatches', JSON.stringify(this.wallpaperSwatches));
            }
            if (this.wallpaperPrimary) localStorage.setItem('schedully_wallpaper_primary', this.wallpaperPrimary);
            if (this.wallpaperSecondary) localStorage.setItem('schedully_wallpaper_secondary', this.wallpaperSecondary);
            if (this.wallpaperTertiary) localStorage.setItem('schedully_wallpaper_tertiary', this.wallpaperTertiary);
            if (this.wallpaperHeader) localStorage.setItem('schedully_wallpaper_header', this.wallpaperHeader);

            // Silently clear unsaved indicator on load
            this._hasUnsavedCloudChanges = false;
          } catch (syncErr) {
            console.warn("Cloud sync non-fatal error:", syncErr);
          }
        };

        if (window.schedullyFirebase.currentUser) {
          window.schedullyFirebase.onUserChangedCallback(window.schedullyFirebase.currentUser);
          window.schedullyFirebase.fetchUserData();
        }
      } else {
        setTimeout(initAuthListener, 200);
      }
    };

    initAuthListener();
  }

  getPresetSettings() {
    return {
      tableCornerStyle: this.tableCornerStyle || 'rounded',
      tableCornerRadiusVal: this.tableCornerRadiusVal || 8,
      cardCornerStyle: this.cardCornerStyle || 'rounded',
      cardCornerRadiusVal: this.cardCornerRadiusVal || 8,
      borderStyle: this.borderStyle || 'default',
      currentMode: this.currentMode || 'light',
      currentPalette: this.currentPalette || 'nord',
      customHexColors: this.customHexColors || null,
      gridWidthVal: this.gridWidthVal || 100,
      gridHeightVal: this.gridHeightVal || 49,
      gridYPosVal: this.gridYPosVal || 0,
      fontSizeVal: this.gridFontSizeVal || this.fontSizeVal || 9,
      clockFormat: this.clockFormat || '12-hour',
      bgBlurEnabled: this.bgBlurEnabled || false,
      bgBlurIntensity: this.bgBlurIntensity || 10,
      fontFamily: this.currentFontKey || 'default',
      timetableOpacity: this.timetableOpacity || 100,
      showTitle: this.showTitle !== undefined ? this.showTitle : true,
      titleText: this.timetableTitleText || 'Untitled',
      showTrademark: this.showTrademark || false,
      trademarkText: this.trademarkText || 'Schedully • Student Edition',
      trademarkStyle: this.trademarkStyle || 'default',
      activeDays: this.activeDays ? [...this.activeDays] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      gridStartHour: this.gridStartHour || 8,
      gridEndHour: this.gridEndHour || 20,
      axisMode: this.axisMode || 'time',
      gridPeriodCount: this.gridPeriodCount || 6,
      selectedOcrPeriodPreset: this.selectedOcrPeriodPreset || '90m-900',
      timeDisplayMode: this.timeDisplayMode || localStorage.getItem('schedully_time_display_mode') || 'time',
      screenRatio: this.currentScreenRatio || localStorage.getItem('schedully_screen_ratio') || 'auto',
      activeDevice: this.activeDevice || localStorage.getItem('schedully_active_device') || 'phone',
      zoomScale: this.zoomScale || 0.85,
      showLockUI: this.showLockUI !== undefined ? this.showLockUI : true,
      language: (window.SchedullyI18n ? window.SchedullyI18n.currentLang : (localStorage.getItem('schedully_language') || 'en')),

      // Card Formats & Sub-options
