/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABSE_NAME, DATABAE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABSE_NAME, DATABAE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;

    const foundRestaurant = await this._favoritesRestaurant.searchRestaurants(this.latestQuery);

    this._showFoundMovies(foundMovies);
  },
};

export default FavoriteRestaurantIdb;
