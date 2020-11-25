const FALLBACK_CACHE = 'abdera-offline';
const FALLBACK_URL = '/index.html';

self.addEventListener('install', function(event) {
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

  console.log('Service worker installed.')
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
            console.log('The site is served from offline cache.')

            return caches.match(FALLBACK_URL, {
              cacheName: FALLBACK_CACHE
            });
        })
    })
  );
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});