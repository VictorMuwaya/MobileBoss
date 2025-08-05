self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("mobileboss-cache").then((cache) => {
        return cache.addAll([
          "index.html",
          "static/style.css",
          "script/script.js"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });