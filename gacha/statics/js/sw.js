const cacheName = "gacha"; // Change value to force update

self.addEventListener("install", event => {
	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"/statics/js/gacha.js",
				"/statics/js/jquery.min.js",
				"/statics/js/sw.js",
				"/statics/img/2426101.jpg",
				"/statics/img/logo.svg",
				"/statics/css/gacha.css",

				"/statics/config/manifest.webmanifest",
				"/statics/bootstrap/css/bootstrap.min.css",
				"/statics/bootstrap/js/bootstrap.min.js",


			]);
		})
	);
});


self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});