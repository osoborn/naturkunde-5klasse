const CACHE_NAME = "naturkunde-5klasse-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./naturkunde-data.js",
  "./app.js",
  "./manifest.json",
  "./img/heart_realistic.jpg",
  "./img/blood_components_realistic.jpg",
  "./img/alveoli_gas_exchange_realistic.jpg",
  "./img/smoking_damage_realistic.jpg",
  "./img/heft_knochenmark.jpg",
  "./img/heft_blutgefaess_cells.jpg",
  "./img/heft_comic_figuren.jpg",
  "./img/heft_gefaesse_tabelle.jpg",
  "./img/heft_koerper_kreislauf.jpg",
  "./img/heft_schema_seite4.jpg",
  "./img/heft_tabak_alltag.jpg",
  "./img/heft_no_adelantar_nikotin.jpg",
  "./img/heft_passivrauchen_kind.jpg",
  "./img/heft_gasaustausch_normal.jpg",
  "./img/heft_gasaustausch_raucher.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResp) => {
        const clone = networkResp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return networkResp;
      })
      .catch(() => caches.match(event.request))
  );
});
