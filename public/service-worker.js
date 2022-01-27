self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/static/js/bundle.js'
            ]);
        })
    )
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                })
            })
            .catch(() => {
                return caches.match(event.request);
            })
    )
});