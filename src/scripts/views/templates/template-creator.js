import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<article>
<div class="restaurantItem">
<div class="restaurantItemHeader">
    <figure>
    <img 
    data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
    class="lazyload restaurantItemHeaderPicture" 
    alt="${restaurant.name}" />
    </figure>
    <div class="restaurantItemHeaderRating">
    <p>${restaurant.address}</p>
    <p class="address">City: <span class="post-item__city">${restaurant.city}</span></p>
        <p style>⭐️<span class="restaurantItemHeaderRatingScore">${restaurant.rating}</span></p>
    </div>
</div>
<div class="restaurantItemContent">
    <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
</div>
<hr>

<div class="restaurant-category">
            <h3>Kategori Restoran:</h3>
            <p>${restaurant.categories.map((category) => `
            ${category.name}`).join(', ')}.</p>
        </div>
        
        <div id="menu-container">
            <div class="column">
                <div id="menu-makanan">
                    <p tabindex="0">Menu Makanan:</p>
                    <ol tabindex="0">
                        ${restaurant.menus.foods.map((food) => `
                        <li>${food.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
            
            <div class="column">
                <div id="menu-minuman">
                    <p tabindex="0">Menu Minuman:</p>
                    <ol tabindex="0">
                        ${restaurant.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="review-form-container">
            <form id="review-form">
                <ul class="wrapper">
                <h1 tabindex="0">Berikan Review untuk Restaurant <span>${restaurant.name}</span></h1>
                    <li class="form-row">
                        <input aria-label="Enter your name" type="text" id="name" placeholder="Your Name..." style="min-height: 40px"; />
                    </li>
                    <li class="form-row">
                        <textarea aria-label="Write your review here" type="text" id="review" placeholder="Write Your Review here..." style="height:100px"></textarea>
                    </li>
                    <li class="form-row">
                        <button aria-label="submit your review form" id="submit" type="submit">Submit</button>
                    </li>
                </ul>
            </form>
            
            <div id="thanks-review"></div>
        </div>
        
        <div id="customerReview"></div>
<br>
  
  <div class="cards">
  ${restaurant.customerReviews.map((review) => `
  <div class="card_content">
    <h2 tabindex="0" class="card_title">${review.name}</h2>
    <p tabindex="0" class="card_text">"${review.review}"</p>
    <p tabindex="0" style="font-size:smaller;">${review.date}</p>
 </div>
  `).join('')}
</div>
</div>
        
      </article>
`;

const createRestaurantItemTemplate = (restaurant) => `

    <div class="restaurantItem">
        <div class="restaurantItemHeader">
        <figure>
            <img class=" restaurantItemHeaderPicture lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        </figure>
            <div class="restaurantItemHeaderRating">
            <p class="address">City: <span class="post-item__city">${restaurant.city}</span></p>
                <p style>⭐️<span class="restaurantItemHeaderRatingScore">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurantItemContent">
            <h3 class="restaurantItemContentName"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <p>${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUlikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUlikedRestaurantButtonTemplate,
};
