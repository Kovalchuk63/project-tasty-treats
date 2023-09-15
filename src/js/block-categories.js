const selectorsCategories = {
  allCategoriesBtn: document.querySelector('.js-all-categories-btn'),
  categoriesBtnList: document.querySelector('.js-categories-btn-card'),
};

// API categories-btn
serviseCategoriesBtn()
  .then(data => {
    console.log(data);
    selectorsCategories.categoriesBtnList.insertAdjacentHTML(
      'beforeend',
      createMarkup(data)
    );
  })
  .catch(error => console.log(error));
async function serviseCategoriesBtn() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/categories';
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

//Markup categories-btn
function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name }) =>
        `<button class="categories-btn" data-id="${_id}">${name}</button>`
    )
    .join('');
}

selectorsCategories.categoriesBtnList.addEventListener(
  'click',
  handlerSearchBtn
);

function handlerSearchBtn(evt) {
  selectorsCategories.allCategoriesBtn.classList.remove(
    'all-categories-btn-active'
  );
  serviseCategoriesRecipes(evt.target.textContent)
    .then(data => ``)
    .catch(error => console.log(error));
}

// API all-categories-recipes
async function serviseCategoriesRecipes(category) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
  const params = new URLSearchParams({
    category: category,
  });
  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
