const CACHE_NAME = 'schedully-cache-v778';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css?v=20261006_v778',
  '/app_v3.js?v=20261006_v778',
  '/firebase-config.js?v=20260923_v721',
  '/ocr_parser.js?v=20260919_v602',
  '/ics_csv_parser_v3.js',
  '/timetable_engine.js?v=20261006_v778',
  '/i18n.js?v=20260923_v721',
  '/manifest.json?v=20260906_v444',
  '/logo-transparent.png',
  '/icon-192.png',
  '/icon-512.png',
  '/logo.jpg',
  '/tng_qr.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => key !== CACHE_NAME ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Handle local app assets with Stale-While-Revalidate for instantaneous sub-millisecond response
  if (url.origin === self.location.origin) {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            if (response && response.ok) {
              const toCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
            }
            return response;
          })
          .catch(() => caches.match(event.request).then((res) => res || caches.match('/index.html') || caches.match('/')))
      );
    } else {
      // Stale-While-Revalidate: Instant cache hit + silent background refresh
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.ok) {
                const toCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
              }
              return networkResponse;
            })
            .catch(() => null);

          return cachedResponse || fetchPromise;
        })
      );
    }
  }
});



