import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/database';

import '../../component/loader';

const Detail = {
  async render() {
    return `
        <loader-element></loader-element>
        <div id="restaurant" class="restaurant"></div>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loader = document.getElementById('loading');
    loader.style.display = 'block';
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    loader.style.display = 'none';

    const form = document.querySelector('#review-form');
    const thanks = document.getElementById('thanks-review');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name');
      const review = document.querySelector('#review');

      /* Sending data to API */
      if (name.value && review.value !== '') {
        thanks.innerHTML = '';
        const dataInput = {
          id: url.id,
          name: name.value,
          review: review.value,
        };
        RestaurantDbSource.postReview(dataInput);

        loader.style.display = 'block';

        setTimeout(() => {
          thanks.innerHTML = `<p>Terima kasih ${name.value} atas Reviewnya. Review anda telah tersimpan. Anda bisa melihat review anda di kolom Consumer Review dengan merefresh halaman ini.</p>`;
          name.value = '';
          review.value = '';
          loader.style.display = 'none';
        }, 2000);
      } else {
        thanks.innerHTML = '<p >Kolom belum diisi semua</p>';
      }
    });
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },

    });
  },
};

export default Detail;
