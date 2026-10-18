const C="navratri-v9";
const SHELL=["./","index.html","manifest.webmanifest","config.js","assets/icons/icon-192.png","assets/icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()).catch(()=>{}));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
 if(/\.(mp4|mp3)$/.test(u.pathname))return; /* big media: always network, never cached */
 e.respondWith(fetch(r).then(res=>{if(res.ok&&(u.origin===location.origin||u.host==="cdnjs.cloudflare.com")){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));});
