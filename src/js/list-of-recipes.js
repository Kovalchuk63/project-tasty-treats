const categoriesBtn = document.querySelector('.all-categories-btn');
const cardsList = document.querySelector('.js-card-list');

categoriesBtn.addEventListener('click', onAllCategoryButtonClick);

categoriesBtn.classList.add('all-categories-btn-active');
// categoriesBtn.classList.remove("all-categories-btn-active"); - Для Романа

loadAllCategories();

// const defaults = {
//   webformatURL:
//     "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
//   largeImageURL:
//     "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
//   tags: "no description",
//   likes: "0",
//   views: "0",
//   comments: "0",
// };

async function categoriesCardsSearch() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const params = new URLSearchParams({
    perPage: 9,
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
        <use href=""></use>
      </svg>
      <img class="card-img" src="${preview}" alt="${title}" width="335px" height="335px" />
      <div class="card-text">
      <h2 class="card-dish-name">${title}</h2>
      <p class="card-dish-descr">${description}</p>
      </div>
      <div class="rating-btn-container">
        <div class="rating-container">
          <p class="rating-number">${rating}</p>
          <svg class="svg-star" width="18px" height="18px">
            <use href=""></use>
          </svg>
          <svg class="svg-star" width="18px" height="18px">
            <use href=""></use>
          </svg>
          <svg class="svg-star" width="18px" height="18px">
            <use href=""></use>
          </svg>
          <svg class="svg-star" width="18px" height="18px">
            <use href=""></use>
          </svg>
          <svg class="svg-star" width="18px" height="18px">
            <use href=""></use>
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
  categoriesBtn.classList.add('all-categories-btn-active');
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
