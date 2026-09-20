const CACHE_NAME = 'schedully-cache-v645';
const STATIC_ASSETS = [
  '/styles.css?v=20260920_v645',
  '/app_v3.js?v=20260920_v645',
  '/firebase-config.js?v=20260920_v645',
  '/ocr_parser.js?v=20260919_v602',
  '/ics_csv_parser_v3.js',
  '/timetable_engine.js?v=20260907_v471',
  '/i18n.js?v=20260919_v540',
  '/manifest.json?v=20260906_v444',
  '/logo-transparent.png',
  '/icon-192.png',
  '/icon-512.png',
  '/logo.jpg',
  '/tng_qr.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => key !== CACHE_NAME ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => clients.forEach((c) => c.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME })))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    // Network-first for HTML: always fresh, fall back to cache offline
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.ok) {
          // Clone BEFORE body is consumed, then cache the clone
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first for assets: serve from cache instantly, update cache in background
    event.respondWith(
      caches.match(event.request).then((cached) => {
        // Always attempt a background network update
        const networkUpdate = fetch(event.request).then((response) => {
          if (response && response.ok) {
            // Clone BEFORE returning to browser so we can cache AND serve
            const toCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          }
          return response;
        }).catch(() => null);

        // Serve cached immediately if available; otherwise wait for network
        return cached || networkUpdate;
      })
    );
  }
});


