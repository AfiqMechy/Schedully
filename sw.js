const CACHE_NAME = 'schedully-cache-v366';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app_v3.js',
  '/ocr_parser.js',
  '/ics_csv_parser_v3.js',
  '/timetable_engine.js',
  '/i18n.js',
  '/manifest.json',
  '/logo-transparent.png',
  '/icon-192.png',
  '/icon-512.png',
  '/logo.jpg',
  '/tng_qr.png'
];

// Install Event: cache core app shell
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

// Fetch Event: Network-first for code assets, cache fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  const isCodeAsset = url.pathname.endsWith('.html') || 
                      url.pathname.endsWith('.css') || 
                      url.pathname.endsWith('.js') || 
                      url.pathname === '/';

  if (isCodeAsset) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      });
    })
  );
});
