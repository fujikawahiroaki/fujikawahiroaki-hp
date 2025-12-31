// 古いService Workerを無効化する
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.registration.unregister();
});
