(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const n={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")};n.categoriesBtnList.addEventListener("click",h);d().then(e=>n.categoriesBtnList.insertAdjacentHTML("beforeend",v(e))).catch(e=>console.log(e));async function d(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function v(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function h(e){n.allCategoriesBtn.classList.remove("all-categories-btn-active"),f(e.target.textContent).then(t=>n.listCardRecipes.innerHTML=m(t.results)).catch(t=>console.log(t))}async function f(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",i=new URLSearchParams({limit:9,category:e}),s=await fetch(`${t}${r}?${i}`);if(!s.ok)throw new Error(s.statusText);return s.json()}function m(e){return e.map(({preview:t,title:r,description:i,rating:s})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${t||defaults.preview}" alt="${r||defaults.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${r||defaults.title}</h2>
      <p class="card-dish-descr">${i||defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
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
    </li>`).join("")}const l=document.querySelector(".js-popular-recipes");b().then(e=>{console.log(e),l.insertAdjacentHTML("beforeend",y(e))}).catch(e=>console.log(e));async function b(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function y(e){return`${e.map(({id:t,preview:r,title:i,description:s})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${i}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${i.toUpperCase()}</h2>
        <p class="description-dish">${s}</p>
        </div>
         </li>`).join("")}
            </ul>`}console.log(l);const S=document.querySelector(".js-all-categories-btn"),g=document.querySelector(".js-card-list");S.addEventListener("click",$);L();const c={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function u(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function p(e){return console.log(e),e.results.map(({preview:r,title:i,description:s,rating:a})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||c.preview}" alt="${i||c.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${i||c.title}</h2>
      <p class="card-dish-descr">${s||c.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${a}</p>
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
    </li>`).join("")}function $(){u().then(e=>{const t=p(e);g.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function L(){try{const e=await u(),t=p(e);g.innerHTML=t}catch(e){console.log("Error",e.message)}}
