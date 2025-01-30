self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("travel-journal-cache").then((cache) => {
            return cache.addAll(["/", "/journal", "/camera"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
