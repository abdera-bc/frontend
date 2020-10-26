self.addEventListener('install', function(event) {
  console.log('Service worker installed.')
  event.waitUntil(
    caches.open('mysite-data').then(function(cache) {
      return cache.addAll(
        ['/index.html']
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});