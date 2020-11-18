self.addEventListener('install', function(event) {
  console.log('Service worker installed.')
  event.waitUntil(
    caches.open('mysite-data').then(function(cache) {
      return cache.addAll(
        [
          'index.html'
        ]
      );
    })
  );
});

self.addEventListener('activate', function () {
  self.clients.claim()
  console.log('Control claimed');
});

self.addEventListener('fetch', function(event) {
  console.log('Fetched.');
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return fetch(event.request)
        .then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(function() {
            return cache.match(event.request)
              ? caches.match(event.request)
              : caches.match('/index.html');
        })
    })
  );
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});