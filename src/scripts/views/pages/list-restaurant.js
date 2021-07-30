import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

import '../../component/loader';

const ListRestaurant = {
  async render() {
    return `
           <div class="content">
            <h2 class="contentHeading">List Restaurants in Kuan </h2>
            <loader-element></loader-element>
            <div id="restaurants" class="restaurants">
            </div>
           </div>
        `;
  },

  async afterRender() {
    const loader = document.getElementById('loading');
    loader.style.display = 'block';
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      loader.style.display = 'none';
    });
  },
};
export default ListRestaurant;
