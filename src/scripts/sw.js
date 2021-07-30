/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker');

  // todo caching app shell resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, '/']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...');

  // todo delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  // todo add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
