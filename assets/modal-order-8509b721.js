(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const a={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")};a.categoriesBtnList.addEventListener("click",v);g().then(e=>a.categoriesBtnList.insertAdjacentHTML("beforeend",p(e))).catch(e=>console.log(e));async function g(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function p(e){return e.map(({_id:s,name:r})=>`<button class="categories-btn" data-id="${s}">${r}</button>`).join("")}function v(e){a.allCategoriesBtn.classList.remove("all-categories-btn-active"),h(e.target.textContent).then(s=>a.listCardRecipes.innerHTML=m(s.results)).catch(s=>console.log(s))}async function h(e){const s="https://tasty-treats-backend.p.goit.global/api",r="/recipes",c=new URLSearchParams({limit:9,category:e}),t=await fetch(`${s}${r}?${c}`);if(!t.ok)throw new Error(t.statusText);return t.json()}function m(e){return e.map(({preview:s,title:r,description:c,rating:t})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="/src/sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${s||defaults.preview}" alt="${r||defaults.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${r||defaults.title}</h2>
      <p class="card-dish-descr">${c||defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${t}</p>
          <div class="rating-container">
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`).join("")}(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),(t?enableBodyScroll:disableBodyScroll)(document.body)};s.addEventListener("click",c),r.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const f=document.querySelector(".js-popular-recipes");y().then(e=>{console.log(e),f.insertAdjacentHTML("beforeend",b(e))}).catch(e=>console.log(e));async function y(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function b(e){return`${e.map(({id:s,preview:r,title:c,description:t})=>`<li key="${s}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${c}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${c.toUpperCase()}</h2>
        <p class="description-dish">${t}</p>
        </div>
         </li>`).join("")}
            `}const S=document.querySelector(".js-all-categories-btn"),l=document.querySelector(".js-card-list");S.addEventListener("click",L);$();const o={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function d(){const e="https://tasty-treats-backend.p.goit.global/api",s=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${s}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function u(e){return console.log(e),e.results.map(({preview:r,title:c,description:t,rating:n})=>`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="/src/sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||o.preview}" alt="${c||o.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${c||o.title}</h2>
      <p class="card-dish-descr">${t||o.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${n}</p>
          <div class="rating-container">
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="/src/sprite.svg#icon-Star"></use>
          </svg>
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`).join("")}function L(){d().then(e=>{const s=u(e);l.innerHTML=s}).catch(()=>{console.log("Error",error.message)})}async function $(){try{const e=await d(),s=u(e);l.innerHTML=s}catch(e){console.log("Error",e.message)}}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();
