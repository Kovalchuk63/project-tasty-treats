(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const d={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")},i={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};d.categoriesBtnList.addEventListener("click",L);S().then(e=>d.categoriesBtnList.insertAdjacentHTML("beforeend",k(e))).catch(e=>console.log(e));async function S(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function k(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function L(e){d.allCategoriesBtn.classList.remove("all-categories-btn-active"),w(e.target.textContent).then(t=>d.listCardRecipes.innerHTML=B(t.results)).catch(t=>console.log(t))}async function w(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",n=new URLSearchParams({limit:9,category:e}),o=await fetch(`${t}${r}?${n}`);if(!o.ok)throw new Error(o.statusText);return o.json()}function B(e){return e.map(({preview:r,title:n,description:o,rating:s})=>{const c=E(s),p=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),m=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||i.preview}" alt="${n||i.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||i.title}</h2>
      <p class="card-dish-descr">${o||i.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
          <div class="rating-container">
          ${p}${m}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function E(e){return Math.floor(e/2)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),(o?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const $=document.querySelector(".js-popular-recipes");M().then(e=>{console.log(e),$.insertAdjacentHTML("beforeend",C(e))}).catch(e=>console.log(e));async function M(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function C(e){return`${e.map(({id:t,preview:r,title:n,description:o})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${n}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${n.toUpperCase()}</h2>
        <p class="description-dish">${o}</p>
        </div>
         </li>`).join("")}
            `}const j=document.querySelector(".js-all-categories-btn"),h=document.querySelector(".js-card-list");j.addEventListener("click",q);A();const l={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function y(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function b(e){return e.results.map(({preview:r,title:n,description:o,rating:s})=>{const c=R(s),p=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),m=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||l.preview}" alt="${n||l.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||l.title}</h2>
      <p class="card-dish-descr">${o||l.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
          <div class="rating-container">
          ${p}${m}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function q(){y().then(e=>{const t=b(e);h.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function A(){try{const e=await y(),t=b(e);h.innerHTML=t}catch(e){console.log("Error",e.message)}}function R(e){return Math.floor(e/2)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();const a={allCards:document.querySelector(".cards-list"),modalCardCont:document.querySelector(".card-markup-modal"),modalBackdrop:document.querySelector(".modal-backdrop"),modalButtonClose:document.querySelector(".modal-btn-close"),giveRatingModalBtn:document.querySelector(".modal-give-rating"),addToFavorite:document.querySelector(".modal-add-favorite"),recipeBtn:document.querySelector(".recipe-btn")};a.allCards.addEventListener("click",handlerGetIdCard);a.recipeBtn.addEventListener("click",x);function x(){a.modalButtonClose.addEventListener("click",u),a.modalBackdrop.addEventListener("click",f),window.addEventListener("keydown",v),a.modalBackdrop.classList.add("is-open"),document.body.style.overflow="hidden"}function v(e){e.key==="Escape"&&u()}function u(){a.modalButtonClose.removeEventListener("click",u),a.modalBackdrop.removeEventListener("click",f),window.removeEventListener("keydown",v),a.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const e=document.querySelector(".iframe-video");e.src=""}function f(e){if(e&&e.target===a.modalBackdrop){a.modalButtonClose.removeEventListener("click",u),a.modalBackdrop.removeEventListener("click",f),window.removeEventListener("keydown",v),a.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const t=document.querySelector(".iframe-video");t.src=""}}const g=document.querySelector(".modal-form-order");g.addEventListener("submit",O);function O(e){if(e.preventDefault(),g.checkValidity()){const t=new FormData(g);fetch("https://tasty-treats-backend.p.goit.global/api/orders",{method:"POST",body:t}).then(r=>r.json()).then(r=>{console.log("Order submitted successfully:",r)}).catch(r=>{console.error("Error:",r)})}else console.error("Form is invalid. Please check your input.")}
