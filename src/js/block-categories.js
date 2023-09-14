const selectorsCategories = {
  categoriesBtnList: document.querySelector('.js-categories-btn-card'),
};

serviseCategories()
  .then(data => {
    console.log(data);
    selectorsCategories.categoriesBtnList.insertAdjacentHTML(
      'beforeend',
      createMarkup(data)
    );
  })
  .catch(error => console.log(error));
async function serviseCategories() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/categories';
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

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
  handlerClickBtn
);
