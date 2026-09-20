const CACHE_NAME = 'schedully-cache-v637';
const STATIC_ASSETS = [
  '/styles.css?v=20260920_v637',
  '/app_v3.js?v=20260920_v637',
  '/firebase-config.js?v=20260920_v614',
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

// Install: cache static assets immediately, skip waiting so new SW activates right away
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete ALL old caches, claim all clients, then force-reload every open tab
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => key !== CACHE_NAME ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
      .then(() => {
        // Tell every open tab/window to reload so they get the fresh version immediately
        return self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
        });
      })
  );
});

// Fetch strategy:
//   - HTML (navigate): NETWORK FIRST — always serve fresh index.html, offline fallback to cache
//   - JS/CSS/assets:   CACHE FIRST + background revalidate — instant load
//   - External URLs:   pass through, no caching
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Pass through all external origins (Firebase, CDN, Google Fonts, etc.)
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    // NETWORK FIRST for page navigations: always fetch fresh HTML
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // CACHE FIRST for assets: instant, revalidate in background
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => null);
        return cached || networkFetch;
      })
    );
  }
});




