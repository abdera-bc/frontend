const FALLBACK_CACHE = 'abdera-offline';
const FALLBACK_URL = '/index.html';

self.addEventListener('install', async function(event) {
  console.log('Service worker installed.')
  event.waitUntil(
    caches.open('abdera-data').then(function(cache) {
      return cache.addAll(
        [
          '/index.html'
        ]
      );
    })
  );
  event.waitUntil(
    caches.open(FALLBACK_CACHE)
      .then((cache) => cache.add(FALLBACK_URL))
  );
});

self.addEventListener('activate', function () {
  self.clients.claim()
  console.log('Control claimed');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('abdera-dynamic').then(function(cache) {
      return fetch(event.request)
        .then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(function() {
            return caches.match(FALLBACK_URL, {
                cacheName: FALLBACK_CACHE
              });
        })
    })
  );
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});