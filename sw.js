const CACHE="alphabet-practice-shell-v1.2";
const FILES=["./","./index.html","./styles.css","./app.js","./answers.json","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting();})());});
self.addEventListener("activate",event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith("alphabet-practice-shell-")&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener("fetch",event=>{const req=event.request;if(req.method!=="GET")return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 if(url.pathname.endsWith("/answers.json")){event.respondWith((async()=>{try{const res=await fetch(req);if(res.ok){const cache=await caches.open(CACHE);await cache.put("./answers.json",res.clone());}return res;}catch(e){return (await caches.match("./answers.json"))||Response.error();}})());return;}
 event.respondWith((async()=>{const cached=await caches.match(req,{ignoreSearch:true});return cached||fetch(req);})());});
self.addEventListener("message",event=>{if(event.data?.type!=="VERIFY_OFFLINE")return;event.waitUntil((async()=>{const cache=await caches.open(CACHE);const matches=await Promise.all(FILES.map(file=>cache.match(file)));event.ports[0]?.postMessage({ready:matches.every(Boolean)});})());});
