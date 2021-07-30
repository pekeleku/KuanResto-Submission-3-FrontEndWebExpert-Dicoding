import API_ENDPOINT from '../globals/api-endpoints';
import CONFIG from '../globals/config';
import '../component/loader';

class RestaurantDbSource {
  static async listRestaurant() {
    const loader = document.getElementById('loading');

    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);

    loader.style.display = 'none';

    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const loader = document.getElementById('loading');

    const response = await fetch(API_ENDPOINT.DETAIL(id));

    loader.style.display = 'none';

    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `${CONFIG.KEY}`,
      },
      body: JSON.stringify(review),
    })
      .catch((error) => {
        throw new Error(error);
      });
    return response.customerReviews;
  }
}

export default RestaurantDbSource;
