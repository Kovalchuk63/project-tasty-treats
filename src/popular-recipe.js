const popularRecipe = document.querySelector('js-popular-recipe');

/*=================BACK-END===========================*/
serviceRecype() 
    .then((data) => {
popularRecipe.insertAdjacentElement('beforeend', createMarkupCard(data.results))
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
return arr.map(({id,preview,title,description,popularity}) => {
    `<li class ="popular-recipe-list">
        <img class="img-dish" src="${preview}" alt="${title}">
        <h2 class= "name-dish">${title}</h2>
        <h3 class="deskription-dish">${description}</h3>
    </li>`
}).join();
}

