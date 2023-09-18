const selectorsCategories = {
  allCategoriesBtn: document.querySelector('.js-all-categories-btn'),
  categoriesBtnList: document.querySelector('.js-categories-btn-card'),
  listCardRecipes: document.querySelector('.js-card-list'),
};

const defaultsValue = {
  preview: '../img/no-image-icon-23485.png',
  title: 'no title',
  description: 'no description',
  rating: 'xx',
};

selectorsCategories.categoriesBtnList.addEventListener(
  'click',
  handlerSearchBtn
);

serviseCategoriesBtn()
  .then(data =>
    selectorsCategories.categoriesBtnList.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoriesBtn(data)
    )
  )
  .catch(error => console.log(error));

// API categories btn
async function serviseCategoriesBtn() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = '/categories';
  const response = await fetch(`${BASE_URL}${END_POINT}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

//Markup categories btn
function createMarkupCategoriesBtn(arr) {
  return arr
    .map(
      ({ _id, name }) =>
        `<button class="categories-btn" data-id="${_id}">${name}</button>`
    )
    .join('');
}

//==============================================================

// Callback function - "click"
function handlerSearchBtn(evt) {
  selectorsCategories.allCategoriesBtn.classList.remove(
    'all-categories-btn-active'
  );
  serviseCategoriesRecipes(evt.target.textContent)
    .then(
      data =>
        (selectorsCategories.listCardRecipes.innerHTML =
          createMarkupCategoriesRecipes(data.results))
    )
    .catch(error => console.log(error));
}

// API all categories recipes
async function serviseCategoriesRecipes(category) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = '/recipes';
  const params = new URLSearchParams({
    limit: 9,
    category: category,
  });
  const response = await fetch(`${BASE_URL}${END_POINT}?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

// Markup categories recipes
// function createMarkupCategoriesRecipes(arr) {
//   return arr
//     .map(({ preview, title, description, rating }) => {
//       return `<li class="card-item">
//       <svg class="card-svg-heart" width="22px" height="22px">
//         <use href="sprite.svg#icon-heart"></use>
//       </svg>
//       <div class="image-gradient">
//       <img class="card-img" src="${preview || defaultsValue.preview}" alt="${
//         title || defaultsValue.title
//       }"/>
//       </div>
//       <div class="card-text">
//       <h2 class="card-dish-name">${title || defaultsValue.title}</h2>
//       <p class="card-dish-descr">${description || defaultsValue.description}</p>
//       </div>
//       <div class="rating-btn-container">

//           <p class="rating-number">${rating}</p>
//           <div class="rating-container">
//           <svg class="svg-star">
//             <use href="sprite.svg#icon-Star"></use>
//           </svg>
//           <svg class="svg-star">
//             <use href="sprite.svg#icon-Star"></use>
//           </svg>
//           <svg class="svg-star">
//             <use href="sprite.svg#icon-Star"></use>
//           </svg>
//           <svg class="svg-star">
//             <use href="sprite.svg#icon-Star"></use>
//           </svg>
//           <svg class="svg-star">
//             <use href="sprite.svg#icon-Star"></use>
//           </svg>
//         </div>
//         <button type="button" class="recipe-btn">See recipe</button>
//       </div>
//     </li>`;
//     })
//     .join('');
// }

// Markup categories recipes
function createMarkupCategoriesRecipes(arr) {
  const markup = arr
    .map(({ preview, title, description, rating }) => {
      const ratedStars = calculationOfRatedStars(rating);
      const ratedStarsArray = Array.from(
        { length: ratedStars },
        () =>
          `<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`
      ).join('');

      const notRatedStarsArray = Array.from(
        { length: 5 - ratedStars },
        () =>
          `<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`
      ).join('');

      return `<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${preview || defaultsValue.preview}" alt="${
        title || defaultsValue.title
      }"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${title || defaultsValue.title}</h2>
      <p class="card-dish-descr">${description || defaultsValue.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${rating}</p>
          <div class="rating-container">
          ${ratedStarsArray}${notRatedStarsArray}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`;
    })
    .join('');
  return markup;
}

// Rating function
function calculationOfRatedStars(rating) {
  const ratedStars = Math.floor(rating / 2);
  return ratedStars;
}
