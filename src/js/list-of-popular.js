const popularRecipe = document.querySelector('.js-popular-recipes');
/*=================BACK-END===========================*/
serviceRecype()
    .then((data) => {
        console.log(data);
// popularRecipe.insertAdjacentHTML('beforeend', createMarkupCard(data))
    })
    .catch(err => console.log(err))
    function serviceRecype() {
        const URL =  'https://tasty-treats-backend.p.goit.global/api/recipes/popular';
        return fetch(`${URL}`)
    .then((resp) => {
    if(!resp.ok) {
        throw new Error('Error');
}
    return resp.json()
});
    }
/*=================SHOW-CARD===========================*/
function createMarkupCard(arr) {
return arr.map(({preview,title,description}) => {
    `<li class ="popular-recipe-list">
        <img class="img-dish" src=" 
        "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"${preview}" alt="${title}">
        <h2 class= "name-dish">${title}</h2>
        <h3 class="deskription-dish">${description}</h3>
    </li>`
}).join();
}