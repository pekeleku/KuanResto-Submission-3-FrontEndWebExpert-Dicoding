import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this.openCahce();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cachesNames = await caches.keys();
    cachesNames
      .filter((name) => name !== CONFIG.CACHES_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this.fetchRequest(request);
      return response;
    }
    return this.fetchRequest(request);
  },

  async openCahce() {
    return caches.open(CONFIG.CACHES_NAME);
  },

  async fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this.addCache(request);
    return response;
  },

  async addCache(request) {
    const cache = await this.openCahce();
    cache.add(request);
  },
};
export default CacheHelper;
