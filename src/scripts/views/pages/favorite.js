import FavoriteRestaurantIdb from '../../data/database';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
          <h2 class="contentHeading">Your Favorite Restaurant</h2>
          <loader-element></loader-element>
          <empty-favorite></empty-favorite>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
        `;
  },

  async afterRender() {
    const emptyfavorite = document.getElementById('empty-favorite');
    const loader = document.getElementById('loading');
    loader.style.display = 'block';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      loader.style.display = 'none';
      emptyfavorite.style.display = 'block';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      loader.style.display = 'none';
      emptyfavorite.style.display = 'none';
    });
  },
};

export default Favorite;
