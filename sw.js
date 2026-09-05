const CACHE_NAME = 'schedully-cache-v431';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css?v=20260905_v428',
  '/app_v3.js?v=20260905_v428',
  '/ocr_parser.js?v=20260905_v428',
  '/ics_csv_parser_v3.js',
  '/timetable_engine.js',
  '/i18n.js?v=20260905_v428',
  '/manifest.json',
  '/logo-transparent.png',
  '/icon-192.png',
  '/icon-512.png',
  '/logo.jpg',
  '/tng_qr.png'
];

// Install Event: cache core app shell immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event: cleanup old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate for sub-millisecond instant refresh & offline speed
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  // Bypass non-GET, analytics, or external API calls
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.gstatic.com') && !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Background revalidation fetch
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => null);

      // Return instant cached response if available, or wait for fetch
      return cachedResponse || fetchPromise;
    })
  );
});
