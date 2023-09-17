(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const m={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")},u={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};m.categoriesBtnList.addEventListener("click",B);w().then(e=>m.categoriesBtnList.insertAdjacentHTML("beforeend",$(e))).catch(e=>console.log(e));async function w(){const o=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!o.ok)throw new Error(o.statusText);return o.json()}function $(e){return e.map(({_id:t,name:o})=>`<button class="categories-btn" data-id="${t}">${o}</button>`).join("")}function B(e){m.allCategoriesBtn.classList.remove("all-categories-btn-active"),M(e.target.textContent).then(t=>m.listCardRecipes.innerHTML=E(t.results)).catch(t=>console.log(t))}async function M(e){const t="https://tasty-treats-backend.p.goit.global/api",o="/recipes",a=new URLSearchParams({limit:9,category:e}),r=await fetch(`${t}${o}?${a}`);if(!r.ok)throw new Error(r.statusText);return r.json()}function E(e){return e.map(({preview:o,title:a,description:r,rating:s})=>{const c=C(s),l=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),d=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${o||u.preview}" alt="${a||u.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${a||u.title}</h2>
      <p class="card-dish-descr">${r||u.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
          <div class="rating-container">
          ${l}${d}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function C(e){return Math.floor(e/2)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=()=>{const r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),(r?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",a),o.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const j=document.querySelector(".js-popular-recipes");q().then(e=>{console.log(e),j.insertAdjacentHTML("beforeend",R(e))}).catch(e=>console.log(e));async function q(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function R(e){return`${e.map(({id:t,preview:o,title:a,description:r})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${o}" alt="${a}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${a.toUpperCase()}</h2>
        <p class="description-dish">${r}</p>
        </div>
         </li>`).join("")}
            `}const A=document.querySelector(".js-all-categories-btn"),b=document.querySelector(".js-card-list");A.addEventListener("click",x);T();const p={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function k(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),o=await fetch(`${e}/recipes?${t}`);if(!o.ok)throw new Error(o.statusText);return await o.json()}function S(e){return e.results.map(({preview:o,title:a,description:r,rating:s})=>{const c=O(s),l=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),d=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${o||p.preview}" alt="${a||p.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${a||p.title}</h2>
      <p class="card-dish-descr">${r||p.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
          <div class="rating-container">
          ${l}${d}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function x(){k().then(e=>{const t=S(e);b.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function T(){try{const e=await k(),t=S(e);b.innerHTML=t}catch(e){console.log("Error",e.message)}}function O(e){return Math.floor(e/2)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();const I="https://tasty-treats-backend.p.goit.global/api/recipes";async function U(){try{const e=await fetch(I);if(!e.ok)throw new Error(`Код: ${e.status}`);return await e.json()}catch(e){return console.error(e),null}}const n={allCards:document.querySelector(".div-popular-list"),modalCardCont:document.querySelector(".card-markup-modal"),modalBackdrop:document.querySelector(".modal-backdrop"),modalButtonClose:document.querySelector(".modal-btn-close"),giveRatingModalBtn:document.querySelector(".modal-give-rating"),addToFavorite:document.querySelector(".modal-add-favorite"),recipeBtn:document.querySelector(".recipe-btn")};n.allCards.addEventListener("click",N);async function N(e){if(e.target.nodeName!=="BUTTON")return;e.target.getAttribute("id");const t=await U(),o=P(t);n.modalCardCont.innerHTML=o,L()}function P(e){const t=e.youtube;function o(i){const y=i.match(/v=([^&]+)/);return y?y[1]:""}const r=`https://www.youtube.com/embed/${o(t)}`,s=parseFloat(e.rating).toFixed(1),l=e.tags.slice(0,2).map(i=>`
      <li class="hashtag-btn-item">#${i}</li>
    `).join(""),d=e.ingredients.map(i=>`
  <li class="modal-card-ingr">
    ${i.name}
    <span class="modal-card-measure">${i.measure}</span>
  </li>
`).join("");return`
      <iframe
        src="${r}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="iframe-video"
      ></iframe>
      <h3 class="modal-recipe-name">${e.title}</h3>
      <div class="modal-general-inf">
      <div class="card-star-modal card_star-rating">
      <p class="modal-raiting cards-raiting">${s}</p>
      <div class="starts-modal ">
  


      <p class="modal-card-time">${e.time} min</p>
    </div>

     
        <ul class="modal-ingr-list">${d}</ul>
        <ul class="hashtag-btn-list-tablet list">${l}</ul>
        <p class="modal-recipe-instructions">${e.instructions}</p>
      </div>
`}n.recipeBtn.addEventListener("click",L);function L(){n.modalButtonClose.addEventListener("click",g),n.modalBackdrop.addEventListener("click",h),window.addEventListener("keydown",v),n.modalBackdrop.classList.add("is-open"),document.body.style.overflow="hidden"}function v(e){e.key==="Escape"&&g()}function g(){n.modalButtonClose.removeEventListener("click",g),n.modalBackdrop.removeEventListener("click",h),window.removeEventListener("keydown",v),n.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const e=document.querySelector(".iframe-video");e.src=""}function h(e){if(e&&e.target===n.modalBackdrop){n.modalButtonClose.removeEventListener("click",g),n.modalBackdrop.removeEventListener("click",h),window.removeEventListener("keydown",v),n.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const t=document.querySelector(".iframe-video");t.src=""}}const f=document.querySelector(".modal-form-order");f.addEventListener("submit",_);function _(e){if(e.preventDefault(),f.checkValidity()){const t=new FormData(f);fetch("https://tasty-treats-backend.p.goit.global/api/orders",{method:"POST",body:t}).then(o=>o.json()).then(o=>{console.log("Order submitted successfully:",o)}).catch(o=>{console.error("Error:",o)})}else console.error("Form is invalid. Please check your input.")}
