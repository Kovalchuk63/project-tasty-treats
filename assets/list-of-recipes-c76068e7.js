(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const i={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")};i.categoriesBtnList.addEventListener("click",h);p().then(e=>i.categoriesBtnList.insertAdjacentHTML("beforeend",v(e))).catch(e=>console.log(e));async function p(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function v(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function h(e){i.allCategoriesBtn.classList.remove("all-categories-btn-active"),m(e.target.textContent).then(t=>i.listCardRecipes.innerHTML=f(t.results)).catch(t=>console.log(t))}async function m(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",n=new URLSearchParams({limit:9,category:e}),s=await fetch(`${t}${r}?${n}`);if(!s.ok)throw new Error(s.statusText);return s.json()}function f(e){return e.map(({preview:t,title:r,description:n,rating:s})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${t||defaults.preview}" alt="${r||defaults.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${r||defaults.title}</h2>
      <p class="card-dish-descr">${n||defaults.description}</p>
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
    </li>`).join("")}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),(s?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const l=document.querySelector(".js-popular-recipes");b().then(e=>{console.log(e),l.insertAdjacentHTML("beforeend",y(e))}).catch(e=>console.log(e));async function b(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function y(e){return`${e.map(({id:t,preview:r,title:n,description:s})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${n}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${n.toUpperCase()}</h2>
        <p class="description-dish">${s}</p>
        </div>
         </li>`).join("")}
            </ul>`}console.log(l);const S=document.querySelector(".js-all-categories-btn"),u=document.querySelector(".js-card-list");S.addEventListener("click",L);$();const c={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function d(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function g(e){return console.log(e),e.results.map(({preview:r,title:n,description:s,rating:a})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||c.preview}" alt="${n||c.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||c.title}</h2>
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
    </li>`).join("")}function L(){d().then(e=>{const t=g(e);u.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function $(){try{const e=await d(),t=g(e);u.innerHTML=t}catch(e){console.log("Error",e.message)}}
