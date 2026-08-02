// [F16] Service Worker — Cache versioning + Auto-update + Client notification
// Versione: 4 (incrementare ad ogni deploy importante)
// Responsabilità: Caching offline, invalidazione cache stale, notifica aggiornamenti
// Status: STABLE

const CACHE_VERSION = '4';
const CACHE_NAME = `raffaella-pisani-v${CACHE_VERSION}`;
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png'
];

// [F16.1] Install event — cache assets + force activation
self.addEventListener('install', event => {
  console.log(`[SW] Installing Service Worker v${CACHE_VERSION}`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log(`[SW] Caching assets in ${CACHE_NAME}`);
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log(`[SW] Skipping waiting — activating immediately`);
        return self.skipWaiting();
      })
  );
});

// [F16.2] Activate event — clean old caches + claim clients
self.addEventListener('activate', event => {
  console.log(`[SW] Activating Service Worker v${CACHE_VERSION}`);
  event.waitUntil(
    caches.keys().then(keys => {
      console.log(`[SW] Found caches: ${keys.join(', ')}`);
      return Promise.all(
        keys
          .filter(key => !key.includes(`v${CACHE_VERSION}`))
          .map(key => {
            console.log(`[SW] Deleting old cache: ${key}`);
            return caches.delete(key);
          })
      );
    })
    .then(() => {
      console.log(`[SW] Claiming all clients`);
      return self.clients.claim();
    })
    .then(() => {
      console.log(`[SW] Notifying all clients of update`);
      return self.clients.matchAll();
    })
    .then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'SW_UPDATED',
          version: CACHE_VERSION,
          message: 'Aggiornamento disponibile — Ricarica la pagina per vedere le novità'
        });
      });
    })
  );
});

// [F16.3] Fetch event — cache first per risorse statiche, network first per HTML
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      // Aggiorna in background dalla rete (stale-while-revalidate)
      const networkFetch = fetch(event.request).then(response => {
        if (response && response.status >= 200 && response.status < 300) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => null);

      // Serve subito dalla cache se disponibile, altrimenti aspetta la rete
      return cached || networkFetch;
    })
  );
});

// [F16.4] Message handler — respond to client requests
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log(`[SW] Received SKIP_WAITING message`);
    self.skipWaiting();
  }
});
