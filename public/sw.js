// Minimal Service Worker for PWA installability
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
    // Pass-through strategy for now
    event.respondWith(fetch(event.request));
});
