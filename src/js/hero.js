// import {
//   onAddingToFavourites,
//   calculationOfRatedStars,
//   loadAllCategories,
//   onAllCategoryButtonClick,
//   allCategoriesMarkup,
//   categoriesCardsSearch,
// } from './list-of-recipes.js';

// const LS_DISHES_KEY = 'Favourite dishes';

// const favouritesCardsList = document.querySelector('.js-all-favourite-cards');
// console.log(favouritesCardsList);
// const productsForFavoriteMarkup =
//   JSON.parse(localStorage.getItem(LS_DISHES_KEY)) ?? [];

// function createFavoriteMarkup(arr) {
//   console.log(arr);
//   return arr
//     .map(({ preview, title, description, rating }) => {
//       const ratedStars = calculationOfRatedStars(rating);
//       const ratedStarsArray = Array.from(
//         { length: ratedStars },
//         () =>
//           `<svg class="svg-star rated">
//           <use href="../sprite.svg#icon-Star"></use>
//         </svg>`
//       ).join('');

//       const notRatedStarsArray = Array.from(
//         { length: 5 - ratedStars },
//         () =>
//           `<svg class="svg-star">
//           <use href="../sprite.svg#icon-Star"></use>
//         </svg>`
//       ).join('');

//       `<li class="card-item" data-id="${_id}">
//           <svg class="card-svg-heart js-card-svg-heart" width="22px" height="22px">
//         <use href="../sprite.svg#icon-heart"></use>
//       </svg>
//       <div class="image-gradient">
//       <img class="card-img" src="${preview || defaults.preview}" alt="${
//         title || defaults.title
//       }"/>
//       </div>
//       <div class="card-text">
//       <h2 class="card-dish-name">${title || defaults.title}</h2>
//       <p class="card-dish-descr">${description || defaults.description}</p>
//       </div>
//       <div class="rating-btn-container">

//           <p class="rating-number">${rating}</p>
//           <div class="rating-container">
//           ${ratedStarsArray}${notRatedStarsArray}
//         </div>
//         <button type="button" class="recipe-btn">See recipe</button>
//       </div>
//     </li>`;
//     })
//     .join('');
// }

// favouritesCardsList.insertAdjacentHTML(
//   'beforeend',
//   createFavoriteMarkup(productsForFavoriteMarkup)
// );
