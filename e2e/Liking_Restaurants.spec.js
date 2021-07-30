const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.see('Oops... your Favorites List is empty', '#empty-favorite');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see('Oops... your Favorites List is empty', '#empty-favorite');
  I.amOnPage('/');
  I.seeElement('.restaurantItemContentName a');
  const firstRestaurant = locate('.restaurantItemContentName a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurantItem');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurantItemContentName');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.see('Oops... your Favorites List is empty', '#empty-favorite');
  I.amOnPage('/');
  I.seeElement('.restaurantItemContentName a');
  I.click(locate('.restaurantItemContentName a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurantItemContentName a');
  I.click(locate('.restaurantItemContentName a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#empty-favorite');
  const unlike = 'Oops... your Favorites List is empty';
  const noFavoriteRestaurant = await I.grabTextFrom('#empty-favorite');

  assert.strictEqual(noFavoriteRestaurant, unlike);
});

Scenario('Customer review', ({ I }) => {
  I.see('Oops... your Favorites List is empty', '#empty-favorite');
  I.amOnPage('/');
  I.seeElement('.restaurantItemContentName a');
  I.click(locate('.restaurantItemContentName a').first());
  I.fillField('#name', 'Pekeleku');
  I.fillField('#review', 'Tempatnya strategis');
  I.seeElement('#submit');
  I.click('#submit');
});
