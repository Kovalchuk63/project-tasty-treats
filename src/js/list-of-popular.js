<<<<<<< HEAD
const popularRecipe = document.querySelector('.js-popular-recipes');
/*=================BACK-END===========================*/
// serviceRecype()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))

//     function serviceRecype() {
        const URL =  'https://tasty-treats-backend.p.goit.global/api/recipes/popular';
//         return fetch(`${URL}`)
//     .then((resp) => {
//         // popularRecipe.insertAdjacentHTML('beforeend', createMarkupCard(data))

//    console.log(resp);
//     return resp.json()
// });
//     }

async function serviceRecype() {
    try {
        const resp = await fetch(URL);
        const data = await resp.json()
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

serviceRecype();
=======
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

>>>>>>> upstream/main
/*=================SHOW-CARD===========================*/

function createMarkupCard(arr) {
return arr.map(({preview, title, description}) => {
    `<li class ="popular-recipe-list">
        <img class="img-dish" src="${preview}" 
         alt="${title}">
        <h2 class= "name-dish">${title}</h2>
        <h3 class="deskription-dish">${description}</h3>
    </li>`
}).join();
}

<<<<<<< HEAD
popularRecipe.insertAdjacentHTML('beforeend',)
=======
>>>>>>> upstream/main
