(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const c={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")};c.categoriesBtnList.addEventListener("click",h);p().then(e=>c.categoriesBtnList.insertAdjacentHTML("beforeend",v(e))).catch(e=>console.log(e));async function p(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function v(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function h(e){c.allCategoriesBtn.classList.remove("all-categories-btn-active"),m(e.target.textContent).then(t=>c.listCardRecipes.innerHTML=f(t.results)).catch(t=>console.log(t))}async function m(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",o=new URLSearchParams({limit:9,category:e}),s=await fetch(`${t}${r}?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}function f(e){return e.map(({preview:t,title:r,description:o,rating:s})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${t||defaults.preview}" alt="${r||defaults.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${r||defaults.title}</h2>
      <p class="card-dish-descr">${o||defaults.description}</p>
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
    </li>`).join("")}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),(s?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const l=document.querySelector(".js-popular-recipes");y().then(e=>{console.log(e),l.insertAdjacentHTML("beforeend",b(e))}).catch(e=>console.log(e));async function y(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function b(e){return`${e.map(({id:t,preview:r,title:o,description:s})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${o}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${o.toUpperCase()}</h2>
        <p class="description-dish">${s}</p>
        </div>
         </li>`).join("")}
            </ul>`}console.log(l);const S=document.querySelector(".js-all-categories-btn"),d=document.querySelector(".js-card-list");S.addEventListener("click",L);$();const a={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function u(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function g(e){return console.log(e),e.results.map(({preview:r,title:o,description:s,rating:n})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||a.preview}" alt="${o||a.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${o||a.title}</h2>
      <p class="card-dish-descr">${s||a.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${n}</p>
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
    </li>`).join("")}function L(){u().then(e=>{const t=g(e);d.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function $(){try{const e=await u(),t=g(e);d.innerHTML=t}catch(e){console.log("Error",e.message)}}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();
