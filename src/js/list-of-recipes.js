import sprite from '../sprite.svg'

const categoriesBtn = document.querySelector('.js-all-categories-btn');
const cardsList = document.querySelector('.js-card-list');

categoriesBtn.addEventListener('click', onAllCategoryButtonClick);

// categoriesBtn.classList.add('all-categories-btn-active');
// categoriesBtn.classList.remove("all-categories-btn-active"); - Для Романа

loadAllCategories();

const defaults = {
  preview: '../img/no-image-icon-23485.png',
  title: 'no title',
  description: 'no description',
  rating: 'xx',
};

async function categoriesCardsSearch() {
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

function allCategoriesMarkup(cards) {
  console.log(cards);
  
  const markup = cards.results
    .map(({ preview, title, description, rating }) => {
      return `<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
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
          <svg class="svg-star">
            <use href="../sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="../sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="../sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="../sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="../sprite.svg#icon-Star"></use>
          </svg>
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`;
    })
    .join('');
  return markup;
}

function onAllCategoryButtonClick() {
  // categoriesBtn.classList.add('all-categories-btn-active');
  categoriesCardsSearch()
    .then(cards => {
      const markup = allCategoriesMarkup(cards);
      cardsList.innerHTML = markup;
      // categoriesBtn.blur();
    })
    .catch(() => {
      console.log('Error', error.message);
    });
}

async function loadAllCategories() {
  try {
    const cards = await categoriesCardsSearch();
    const markup = allCategoriesMarkup(cards);
    cardsList.innerHTML = markup;
  } catch (error) {
    console.log('Error', error.message);
  }
}

// ======================================================
