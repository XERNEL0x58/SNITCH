// Service worker for العرصميتر — enables offline play after the first visit.
// Bump CACHE_VERSION whenever any core asset changes, so old caches get cleared.
const CACHE_VERSION = 'arsameter-v1';

const CORE_ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/script.js',
    './manifest.json',
    './assets/images/logo.png',
    './assets/icons/icon-192.png',
    './assets/icons/icon-512.png',
    './assets/icons/icon-maskable-192.png',
    './assets/icons/icon-maskable-512.png',
    './assets/icons/apple-touch-icon.png',
    './assets/icons/favicon-32.png',
    './assets/icons/favicon-16.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => cache.addAll(CORE_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Only handle simple GET requests; let everything else pass through normally.
    if (request.method !== 'GET') return;

    // Page navigations: try the network first (so updates show up when online),
    // and fall back to the cached shell when there is no connection.
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(() => caches.match('./index.html'))
        );
        return;
    }

    // Everything else (CSS, JS, images, the Google Font): cache-first,
    // and cache whatever we fetch fresh so it works offline next time.
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_VERSION).then((cache) => cache.put(request, responseClone));
                    }
                    return response;
                })
                .catch(() => cached);
        })
    );
});
