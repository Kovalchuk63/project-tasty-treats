const popularRecipe = document.querySelector('.js-popular-recipe');
/* =================BACK-END ======================== */
serviceRecipe()
  .then((data) => {
    popularRecipe.insertAdjacentHTML('beforeend', createMarkupCard(data.results));
  })
  .catch((err) => console.log(err));
function serviceRecipe() {
  const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';
  return fetch(URL).then((resp) => {
    if (!resp.ok) {
      throw new Error('Error');
    }
    return resp.json();
  });
}
/* =================SHOW-CARD ======================== */
function createMarkupCard(arr) {
  return `<ul class="popular-recipe-list">
            ${arr.map(({ id, preview, title, description, popularity }) => {
              return `<li key="${id}" class="popular-recipe-item">
                        <img class="img-dish" src="${preview}" alt="${title}">
                        <h2 class="name-dish">${title}</h2>
                        <h3 class="description-dish">${description}</h3>
                      </li>`;
            }).join('')}
          </ul>`;
}