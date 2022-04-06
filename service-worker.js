importScripts("/precache-manifest.1e775310467159db8e6423a59d8a7888.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('abdera-data').then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/index.html'
        ]
      );
    })
  );

  console.log('Service worker installed.')
});

self.addEventListener('activate', function () {
  self.clients.claim()

  console.log('Control claimed');
});

self.addEventListener('fetch', function(event) {
  if (!(event.request.url.indexOf('http') === 0)) {
    return false;
  }
  event.respondWith(
    caches.open('abdera-dynamic').then(function(cache) {
      return fetch(event.request)
        .then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(function() {
            console.log('The site is served from offline cache.')

            return caches.match(event.request);
        })
    })
  );
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
