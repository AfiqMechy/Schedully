const CACHE_NAME = 'schedully-cache-v664';
const STATIC_ASSETS = [
  '/styles.css?v=20260921_v664',
  '/app_v3.js?v=20260921_v664',
  '/firebase-config.js?v=20260921_v651',
  '/ocr_parser.js?v=20260919_v602',
  '/ics_csv_parser_v3.js',
  '/timetable_engine.js?v=20260907_v471',
  '/i18n.js?v=20260921_v664',
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
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first for assets: serve from cache instantly, update cache in background.
    // [Fix 7] Use ignoreSearch:true so versioned URLs (e.g. styles.css?v=123) still
    // hit the cache even if the cached entry was stored without a query string.
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((cached) => {
        const networkUpdate = fetch(event.request).then((response) => {
          if (response && response.ok) {
            const toCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          }
          return response;
        }).catch(() => null);

        return cached || networkUpdate;
      })
    );
  }
});


