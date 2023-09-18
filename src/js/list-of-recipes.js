import sprite from '../sprite.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const categoriesBtn = document.querySelector('.js-all-categories-btn');
const cardsList = document.querySelector('.js-card-list');
let cardsInfo = [];
export const LS_DISHES_KEY = 'Favourite dishes';

categoriesBtn.addEventListener('click', onAllCategoryButtonClick);

loadAllCategories();

const defaults = {
  preview: '../img/no-image-icon-23485.png',
  title: 'no title',
  description: 'no description',
  rating: 'xx',
};

export async function categoriesCardsSearch() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const params = new URLSearchParams({
    limit: 9,
  });

  const response = await fetch(`${BASE_URL}/recipes?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export function allCategoriesMarkup(cards) {
  const markup = cards.results
    .map(({ preview, title, description, rating, _id }) => {
      const ratedStars = calculationOfRatedStars(rating);
      const ratedStarsArray = Array.from(
        { length: ratedStars },
        () =>
          `<svg class="svg-star rated">
          <use href="sprite#icon-Star"></use>
        </svg>`
      ).join('');

      const notRatedStarsArray = Array.from(
        { length: 5 - ratedStars },
        () =>
          `<svg class="svg-star">
          <use href="sprite#icon-Star"></use>
        </svg>`
      ).join('');

      const arrlocalStorage =
        JSON.parse(localStorage.getItem(LS_DISHES_KEY)) ?? [];
      if (
        arrlocalStorage.find(
          ({ _id: IdlocalStorage }) => IdlocalStorage === _id
        )
      ) {
        return `<li class="card-item" data-id="${_id}">
          <svg class="card-svg-heart-checked js-card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${preview || defaults.preview}" alt="${
          title || defaults.title
        }"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${title || defaults.title}</h2>
      <p class="card-dish-descr">${description || defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${rating}</p>
          <div class="rating-container">
          ${ratedStarsArray}${notRatedStarsArray}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`;
      } else {
        return `<li class="card-item" data-id="${_id}">
          <svg class="card-svg-heart js-card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${preview || defaults.preview}" alt="${
          title || defaults.title
        }"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${title || defaults.title}</h2>
      <p class="card-dish-descr">${description || defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${rating}</p>
          <div class="rating-container">
          ${ratedStarsArray}${notRatedStarsArray}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`;
      }
    })
    .join('');

  return markup;
}

export function onAllCategoryButtonClick() {
  categoriesCardsSearch()
    .then(cards => {
      const markup = allCategoriesMarkup(cards);
      cardsList.innerHTML = markup;
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong. Try reloading the page.', {
        width: '400px',
        borderRadius: '10px',
        position: 'right-corner',
      });
    });
}

export async function loadAllCategories() {
  try {
    const cards = await categoriesCardsSearch();
    cardsInfo.push(...cards.results);
    const markup = allCategoriesMarkup(cards);
    cardsList.innerHTML = markup;
  } catch (error) {
    Notify.failure('Oops! Something went wrong. Try reloading the page.', {
      width: '400px',
      borderRadius: '10px',
      position: 'right-corner',
    });
  }
}

// ============================START RATING====================

export function calculationOfRatedStars(rating) {
  const ratedStars = Math.floor(rating / 2);
  return ratedStars;
}
// ==================== FAVORITES ========================

let favouriteDishes = JSON.parse(localStorage.getItem(LS_DISHES_KEY)) ?? [];

cardsList.addEventListener('click', onAddingToFavourites);

export function onAddingToFavourites(event) {
  const svgHeart = event.target.closest('.js-card-svg-heart');
  if (!svgHeart) {
    return;
  }

  const favouriteDish = event.target.closest('.card-item');
  const favouriteDishId = favouriteDish.dataset.id;
  const currentDish = cardsInfo.find(({ _id }) => _id === favouriteDishId);
  const idx = favouriteDishes.findIndex(({ _id }) => _id === favouriteDishId);

  if (idx === -1) {
    favouriteDishes.push(currentDish);
    svgHeart.classList.replace('card-svg-heart', 'card-svg-heart-checked');
  } else {
    favouriteDishes.splice(idx, 1);
    svgHeart.classList.replace('card-svg-heart-checked', 'card-svg-heart');
  }
  localStorage.setItem(LS_DISHES_KEY, JSON.stringify(favouriteDishes));
}

// window.addEventListener('load', () => {
//   iconHeartFill = JSON.parse(localStorage.getItem(ICON_HEART_KEY));
//   const svgHeartIcons = document.querySelectorAll('.js-card-svg-heart');
//   svgHeartIcons.forEach(svgHeartIcon => {
//     if (iconHeartFill === 'none') {
//       svgHeartIcon.classList.replace(
//         'card-svg-heart',
//         'card-svg-heart-checked'
//       );
//     } else {
//       svgHeartIcon.classList.replace(
//         'card-svg-heart-checked',
//         'card-svg-heart'
//       );
//     }
//   });
// });
