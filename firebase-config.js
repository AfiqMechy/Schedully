// Firebase Integration for Schedully
//
// SYNC MODEL:
//   - Data is NEVER auto-written to Firebase on every change.
//   - Changes live in memory only until the user clicks the SAVE button.
//   - The SAVE button writes to localStorage AND Firebase.
//   - A real-time LISTENER runs on all open devices so that when you press
//     Save on one device, all your other open devices receive the update instantly.
//   - The _isSaving flag prevents your own save from echoing back to you.

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCjWjBb6x99Cu4p_SjVyy8f1vPLt7Yf-Q",
  authDomain: "schedully-2a6c3.firebaseapp.com",
  projectId: "schedully-2a6c3",
  storageBucket: "schedully-2a6c3.firebasestorage.app",
  messagingSenderId: "360667096979",
  appId: "1:360667096979:web:12eedb18521d9604016a66",
  measurementId: "G-8NQMXMFQFZ",
  databaseURL: "https://schedully-2a6c3-default-rtdb.asia-southeast1.firebasedatabase.app"
};

class SchedullyFirebaseService {
  constructor() {
    this.app = null;
    this.auth = null;
    this.db = null;
    this.firestore = null;
    this.currentUser = null;
    this.provider = null;
    this._onUserChangedCallback = null;
    this._onDataSyncedCallback = null;
    this.lastSyncedData = null;
    this._isSaving = false;
    this._activeListener = null;
    this._firestoreUnsub = null;

    this.init();
  }

  set onDataSyncedCallback(fn) {
    this._onDataSyncedCallback = fn;
    if (fn && this.lastSyncedData) {
      try {
        fn(this.lastSyncedData);
      } catch (e) {
        console.warn("Error calling newly attached onDataSyncedCallback:", e);
      }
    }
  }

  get onDataSyncedCallback() {
    return this._onDataSyncedCallback;
  }

  set onUserChangedCallback(fn) {
    this._onUserChangedCallback = fn;
    if (fn && this.currentUser !== undefined) {
      try {
        fn(this.currentUser);
      } catch (e) {
        console.warn("Error calling newly attached onUserChangedCallback:", e);
      }
    }
  }

  get onUserChangedCallback() {
    return this._onUserChangedCallback;
  }

  getSavedConfig() {
    if (DEFAULT_FIREBASE_CONFIG.apiKey && !DEFAULT_FIREBASE_CONFIG.apiKey.startsWith("YOUR_")) {
      return DEFAULT_FIREBASE_CONFIG;
    }
    try {
      const stored = localStorage.getItem('schedully_firebase_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.apiKey && !parsed.apiKey.startsWith("YOUR_")) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  init() {
    if (this._initialized && this.auth && this.db) return;
    const config = this.getSavedConfig();
    if (!config || !config.apiKey || typeof firebase === 'undefined' || typeof firebase.auth === 'undefined') {
      console.log("Schedully: Waiting for Firebase Compat SDKs / Config...");
      if (typeof window !== 'undefined' && !this._retryScheduled) {
        this._retryScheduled = true;
        const retry = () => {
          if (!this._initialized || !this.db) this.init();
        };
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', retry, { once: true });
        }
        window.addEventListener('load', retry, { once: true });
        setTimeout(retry, 300);
        setTimeout(retry, 1000);
      }
      return;
    }

    try {
      if (!firebase.apps.length) {
        this.app = firebase.initializeApp(config);
      } else {
        this.app = firebase.app();
      }

      this.auth = firebase.auth();
      this.provider = new firebase.auth.GoogleAuthProvider();

      // [Fix 4] Explicit LOCAL persistence — user stays signed in across browser sessions
      this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(e => {
        console.warn("Schedully Firebase: Could not set auth persistence:", e);
      });

      // Prompt account selector every time so switching accounts is seamless
      this.provider.setCustomParameters({ prompt: 'select_account' });

      if (typeof firebase.database === 'function') {
        try {
          this.db = firebase.database();

          // [Fix 3] Monitor connection state via Firebase special .info/connected ref.
          // This lets the app detect offline/online transitions and log sync status.
          // Firebase RTDB automatically queues writes when offline and syncs on reconnect.
          this.db.ref('.info/connected').on('value', (snap) => {
            this._isOnline = snap.val() === true;
            console.log(this._isOnline
              ? "Schedully Firebase: Connected ✓"
              : "Schedully Firebase: Offline — will auto-sync when reconnected");
          });
        } catch (e) {
          console.warn("RTDB init notice:", e);
        }
      }

      this._initialized = true;

      this.auth.onAuthStateChanged(async (user) => {
        this.currentUser = user;
        if (this.onUserChangedCallback) {
          this.onUserChangedCallback(user);
        }
        if (user) {
          // 1. Initial fetch of cloud data
          await this.fetchUserData();
          // 2. Start continuous real-time cross-device sync listeners
          this._startRealtimeListener();
        } else {
          this._stopRealtimeListener();
        }
      });

      if (this.auth.getRedirectResult) {
        this.auth.getRedirectResult().then((res) => {
          if (res && res.user) {
            this.currentUser = res.user;
            if (this.onUserChangedCallback) this.onUserChangedCallback(res.user);
            this.fetchUserData();
            this._startRealtimeListener();
          }
        }).catch(e => console.warn("Firebase redirect handler notice:", e));
      }
    } catch (err) {
      this._initialized = false;
      console.error("Firebase Initialization Error:", err);
    }
  }

  _startRealtimeListener() {
    if (!this.currentUser) return;
    this._stopRealtimeListener();

    // 1. Realtime DB Listener
    if (this.db) {
      try {
        const userRef = this.db.ref('users/' + this.currentUser.uid);
        this._activeListener = userRef.on('value', (snapshot) => {
          if (this._isSaving) return;
          const data = snapshot.val();
          if (data) {
            this.lastSyncedData = data;
            if (this.onDataSyncedCallback) {
              this.onDataSyncedCallback(data);
            }
          }
        }, (err) => {
          console.warn("RTDB listener notice:", err);
        });
      } catch (e) {}
    }
  }

  _stopRealtimeListener() {
    if (this._activeListener && this.db && this.currentUser) {
      try {
        this.db.ref('users/' + this.currentUser.uid).off('value');
      } catch (e) {}
      this._activeListener = null;
    }
  }

  // Fetch data on demand
  async fetchUserData() {
    if (!this.currentUser) return null;
    let data = null;

    // 1. Fetch Realtime Database (Primary)
    if (this.db) {
      try {
        const snapshot = await this.db.ref('users/' + this.currentUser.uid).once('value');
        data = snapshot.val();
      } catch (e) {
        console.warn("RTDB fetch notice:", e);
        if (e && (e.message || '').includes('permission_denied')) {
          console.warn("Firebase Security Rules notice: Realtime Database rules need '.read': 'auth != null' in Firebase Console.");
        }
      }
    }

    if (data) {
      this.lastSyncedData = data;
      if (this.onDataSyncedCallback) {
        this.onDataSyncedCallback(data);
      }
    }
    return data;
  }

  async loginWithGoogle() {
    if (!this.auth) this.init();
    if (!this.auth) throw new Error("FIREBASE_NOT_CONFIGURED");
    try {
      const result = await this.auth.signInWithPopup(this.provider);
      return result.user;
    } catch (error) {
      if (error && (error.code === 'auth/popup-blocked' || error.code === 'auth/operation-not-supported-in-this-environment' || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) {
        try {
          await this.auth.signInWithRedirect(this.provider);
          return null;
        } catch (redirectErr) {
          console.error("Redirect sign-in error:", redirectErr);
          throw redirectErr;
        }
      }
      console.error("Google Sign-In Error:", error);
      throw error;
    }
  }

  async logout() {
    this._stopRealtimeListener();
    if (!this.auth) return;
    try {
      await this.auth.signOut();
      this.currentUser = null;
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  }

  // Helper to deep sanitize objects (replaces undefined with null since Firebase rejects undefined)
  _sanitizeData(obj) {
    if (obj === undefined) return null;
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => this._sanitizeData(item));
    }
    const clean = {};
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      clean[key] = val === undefined ? null : this._sanitizeData(val);
    }
    return clean;
  }

  // MANUAL / AUTO SAVE — called on any schedule or theme change
  async saveUserData(userData) {
    if (!this.currentUser) return false;
    try {
      this._isSaving = true;
      const newTimestamp = new Date().toISOString(); // stamped in payload for cross-device sync ordering
      const cleanPayload = this._sanitizeData({
        classes: userData.classes || [],
        presets: userData.presets || {},
        activePreset: userData.activePreset || 'default',
        wallpaper: userData.wallpaper || null,
        wallpaperSwatches: userData.wallpaperSwatches || null,
        wallpaperPrimary: userData.wallpaperPrimary || null,
        wallpaperSecondary: userData.wallpaperSecondary || null,
        wallpaperTertiary: userData.wallpaperTertiary || null,
        wallpaperHeader: userData.wallpaperHeader || null,
        settings: userData.settings || {},
        title: userData.title || userData.titleText || userData.settings?.titleText || 'Untitled',
        titleText: userData.titleText || userData.title || userData.settings?.titleText || 'Untitled',
        trademarkText: userData.trademarkText || userData.settings?.trademarkText || 'Schedully • Student Edition',
        language: userData.language || userData.settings?.language || 'en',
        activeDevice: userData.activeDevice || userData.settings?.activeDevice || 'phone',
        zoomScale: userData.zoomScale || userData.settings?.zoomScale || 0.85,
        updatedAt: newTimestamp,
        userEmail: this.currentUser.email || '',
        displayName: this.currentUser.displayName || ''
      });

      let saved = false;

      // Save to Realtime Database
      if (this.db) {
        try {
          await this.db.ref('users/' + this.currentUser.uid).set(cleanPayload);
          saved = true;
        } catch (dbErr) {
          console.warn("Schedully Firebase: RTDB save warning:", dbErr);
          if (dbErr && (dbErr.message || '').includes('permission_denied')) {
            console.warn("Schedully Firebase: Set Security Rules in Firebase Console → Realtime Database → Rules:\n" +
              '{"rules":{"users":{"$uid":{".read":"auth != null && auth.uid === $uid",".write":"auth != null && auth.uid === $uid"}}}}');
          }
        }
      }

      setTimeout(() => { this._isSaving = false; }, 300);
      return saved;
    } catch (error) {
      this._isSaving = false;
      console.error("Schedully Firebase: Error saving data:", error);
      return false;
    }
  }

  // RESET USER CLOUD DATA — completely wipes damaged/broken data and writes fresh starter state
  async resetUserData(freshPresetSettings, starterClasses) {
    if (!this.currentUser) return false;
    try {
      this._isSaving = true;
      const classes = (starterClasses && Array.isArray(starterClasses)) ? starterClasses : [];
      const defaultState = this._sanitizeData({
        classes: classes,
        presets: {
          default: {
            name: 'Default',
            classes: classes,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null,
            settings: freshPresetSettings || {}
          }
        },
        activePreset: 'default',
        wallpaper: null,
        wallpaperSwatches: null,
        wallpaperPrimary: null,
        wallpaperSecondary: null,
        wallpaperTertiary: null,
        wallpaperHeader: null,
        settings: freshPresetSettings || {},
        language: 'en',
        activeDevice: 'phone',
        zoomScale: 0.85,
        updatedAt: new Date().toISOString(),
        userEmail: this.currentUser.email || '',
        displayName: this.currentUser.displayName || ''
      });

      let saved = false;

      // 1. Write fresh restart data to Realtime Database
      if (this.db) {
        try {
          await this.db.ref('users/' + this.currentUser.uid).set(defaultState);
          saved = true;
        } catch (e) {
          console.warn("RTDB reset warning:", e);
        }
      }

      setTimeout(() => { this._isSaving = false; }, 300);
      return saved;
    } catch (error) {
      this._isSaving = false;
      console.error("Error resetting user data in Firebase:", error);
      return false;
    }
  }
}

// ─── Global Singleton ──────────────────────────────────────────────────────
// [Fix 2] Use DOMContentLoaded guard to ensure Firebase SDK scripts have executed
// before SchedullyFirebaseService is instantiated. This prevents the race condition
// that breaks the app when served over HTTP (GitHub Pages, Vercel, Netlify).
(function () {
  function createInstance() {
    if (typeof firebase === 'undefined' || typeof firebase.auth === 'undefined') {
      // SDK not ready yet — defer to after load event
      console.warn("Schedully Firebase: SDK not ready at DOMContentLoaded. Deferring to load event...");
      window.addEventListener('load', function () {
        window.schedullyFirebase = new SchedullyFirebaseService();
      }, { once: true });
      return;
    }
    window.schedullyFirebase = new SchedullyFirebaseService();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createInstance, { once: true });
  } else {
    // DOM already loaded (script placed at bottom of body — this is the normal path)
    createInstance();
  }
})();
