import { createLikeRestaurantButtonTemplate, createUlikedRestaurantButtonTemplate }
  from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this.newLikeButtonContainer = likeButtonContainer;
    this.newRestaurant = restaurant;
    this.newFavoriteRestaurants = favoriteRestaurants;

    await this.renderButton();
  },
  async renderButton() {
    const { id } = this.newRestaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },
  async isRestaurantExist(id) {
    const restaurant = await this.newFavoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.newLikeButtonContainer.innerHTML += createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.newFavoriteRestaurants.putRestaurant(this.newRestaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.newLikeButtonContainer.innerHTML = createUlikedRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.newFavoriteRestaurants.deleteRestaurant(this.newRestaurant.id);
      this.renderButton();
    });
  },

};

export default LikeButtonPresenter;
