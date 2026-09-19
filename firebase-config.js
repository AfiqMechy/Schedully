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
    this.currentUser = null;
    this.provider = null;
    this.onUserChangedCallback = null;
    // Called when another device saves — updates your UI with their changes
    this.onDataSyncedCallback = null;
    // True while we are the ones writing, so we ignore our own echo
    this._isSaving = false;
    this._activeListener = null;

    this.init();
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
    if (!config || !config.apiKey || typeof firebase === 'undefined' || typeof firebase.database === 'undefined' || typeof firebase.auth === 'undefined') {
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
        setTimeout(retry, 400);
        setTimeout(retry, 1200);
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
      // Prompt account selector every time so switching accounts is seamless
      this.provider.setCustomParameters({
        prompt: 'select_account'
      });

      if (firebase.database) {
        this.db = firebase.database();
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
          // 2. Start continuous real-time cross-device sync listener
          this._startRealtimeListener();
        } else {
          this._stopRealtimeListener();
        }
      });
    } catch (err) {
      this._initialized = false;
      console.error("Firebase Initialization Error:", err);
    }
  }

  _startRealtimeListener() {
    if (!this.db || !this.currentUser) return;
    this._stopRealtimeListener();
    const userRef = this.db.ref('users/' + this.currentUser.uid);
    this._activeListener = userRef.on('value', (snapshot) => {
      // Ignore incoming echo while we are saving
      if (this._isSaving) return;
      const data = snapshot.val();
      if (data && this.onDataSyncedCallback) {
        this.onDataSyncedCallback(data);
      }
    }, (err) => {
      console.warn("Firebase Realtime listener error:", err);
    });
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
    if (!this.db || !this.currentUser) return null;
    try {
      const snapshot = await this.db.ref('users/' + this.currentUser.uid).once('value');
      const data = snapshot.val();
      if (data && this.onDataSyncedCallback) {
        this.onDataSyncedCallback(data);
      }
      return data;
    } catch (err) {
      console.warn("Error fetching user cloud data:", err);
      return null;
    }
  }

  async loginWithGoogle() {
    if (!this.auth) this.init();
    if (!this.auth) throw new Error("FIREBASE_NOT_CONFIGURED");
    try {
      const result = await this.auth.signInWithPopup(this.provider);
      return result.user;
    } catch (error) {
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

  // Helper to deep sanitize objects (replaces undefined with null since Firebase RTDB rejects undefined)
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

  // MANUAL SAVE — called when user triggers save or debounced auto-save
  async saveUserData(userData) {
    if (!this.db || !this.currentUser) return false;
    try {
      this._isSaving = true;
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
        language: userData.language || userData.settings?.language || 'en',
        activeDevice: userData.activeDevice || userData.settings?.activeDevice || 'phone',
        zoomScale: userData.zoomScale || userData.settings?.zoomScale || 0.85,
        updatedAt: new Date().toISOString(),
        userEmail: this.currentUser.email || '',
        displayName: this.currentUser.displayName || ''
      });

      await this.db.ref('users/' + this.currentUser.uid).set(cleanPayload);
      setTimeout(() => { this._isSaving = false; }, 300);
      return true;
    } catch (error) {
      this._isSaving = false;
      console.error("Error saving data to Database:", error);
      return false;
    }
  }

  // RESET USER CLOUD DATA — completely wipes damaged/broken data and writes fresh default state
  async resetUserData(freshPresetSettings) {
    if (!this.db || !this.currentUser) return false;
    try {
      this._isSaving = true;
      const defaultState = this._sanitizeData({
        classes: [],
        presets: {
          default: {
            name: 'Default',
            classes: [],
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
      await this.db.ref('users/' + this.currentUser.uid).set(defaultState);
      setTimeout(() => { this._isSaving = false; }, 300);
      return true;
    } catch (error) {
      this._isSaving = false;
      console.error("Error resetting user data in Firebase:", error);
      return false;
    }
  }
}

// Global Singleton Instance
window.schedullyFirebase = new SchedullyFirebaseService();
