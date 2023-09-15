const popularRecipe = document.querySelector('.js-popular-recipes');
/*=================BACK-END===========================*/
serviceRecype()
    .then((data) => {
        console.log(data);
        popularRecipe.insertAdjacentHTML('beforeend', createMarkupCard(data));

    })
    .catch(err => console.log(err))

    async function serviceRecype() {
        const URL =  'https://tasty-treats-backend.p.goit.global/api/recipes/popular';
        const resp = await fetch(`${URL}`);
        // if (!resp.ok) {
        //     throw new Error(resp.statusText);
        //   }
        return await resp.json();
    }

/*=================SHOW-CARD===========================*/

function createMarkupCard(arr) {
    return `${arr.map(({ id, preview, title, description, }) => {
        return `<li key="${id}" class="popular-recipe-item">            
        <img class="img-dish" src="${preview}" alt="${title}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${title.toUpperCase()}</h2>
        <p class="description-dish">${description}</p>
        </div>
         </li>`;
              }).join('')}
            </ul>`;
  } 

  /*=================DISPLAY-NONE-CARD===========================*/
//   const windowWidth = window.innerWidth;

//   const mobileBreakpoint = 768;
  
//   if (windowWidth < mobileBreakpoint) {
//     const mobileCards = document.querySelector('.js-popular-recipes');
//     mobileCards.map(card => {
//       card.style.display = 'none';
//     });
//   }