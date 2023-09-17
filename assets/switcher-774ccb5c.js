(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const p={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")},u={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};p.categoriesBtnList.addEventListener("click",$);L().then(e=>p.categoriesBtnList.insertAdjacentHTML("beforeend",E(e))).catch(e=>console.log(e));async function L(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function E(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function $(e){p.allCategoriesBtn.classList.remove("all-categories-btn-active"),B(e.target.textContent).then(t=>p.listCardRecipes.innerHTML=M(t.results)).catch(t=>console.log(t))}async function B(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",s=new URLSearchParams({limit:9,category:e}),o=await fetch(`${t}${r}?${s}`);if(!o.ok)throw new Error(o.statusText);return o.json()}function M(e){return e.map(({preview:r,title:s,description:o,rating:a})=>{const c=C(a),l=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),d=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||u.preview}" alt="${s||u.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${s||u.title}</h2>
      <p class="card-dish-descr">${o||u.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${a}</p>
          <div class="rating-container">
          ${l}${d}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function C(e){return Math.floor(e/2)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),s=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),(o?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",s),r.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const A=document.querySelector(".js-popular-recipes");j().then(e=>{console.log(e),A.insertAdjacentHTML("beforeend",q(e))}).catch(e=>console.log(e));async function j(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function q(e){return`${e.map(({id:t,preview:r,title:s,description:o})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${s}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${s.toUpperCase()}</h2>
        <p class="description-dish">${o}</p>
        </div>
         </li>`).join("")}
            `}const T=document.querySelector(".js-all-categories-btn"),b=document.querySelector(".js-card-list");T.addEventListener("click",R);x();const m={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function k(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function S(e){return e.results.map(({preview:r,title:s,description:o,rating:a})=>{const c=I(a),l=Array.from({length:c},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),d=Array.from({length:5-c},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||m.preview}" alt="${s||m.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${s||m.title}</h2>
      <p class="card-dish-descr">${o||m.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${a}</p>
          <div class="rating-container">
          ${l}${d}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function R(){k().then(e=>{const t=S(e);b.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function x(){try{const e=await k(),t=S(e);b.innerHTML=t}catch(e){console.log("Error",e.message)}}function I(e){return Math.floor(e/2)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();const O="https://tasty-treats-backend.p.goit.global/api/recipes";async function U(){try{const e=await fetch(O);if(!e.ok)throw new Error(`Код: ${e.status}`);return await e.json()}catch(e){return console.error(e),null}}const n={allCards:document.querySelector(".div-popular-list"),modalCardCont:document.querySelector(".card-markup-modal"),modalBackdrop:document.querySelector(".modal-backdrop"),modalButtonClose:document.querySelector(".modal-btn-close"),giveRatingModalBtn:document.querySelector(".modal-give-rating"),addToFavorite:document.querySelector(".modal-add-favorite"),recipeBtn:document.querySelector(".recipe-btn")};n.allCards.addEventListener("click",N);async function N(e){if(e.target.nodeName!=="BUTTON")return;e.target.getAttribute("id");const t=await U(),r=P(t);n.modalCardCont.innerHTML=r,w()}function P(e){const t=e.youtube;function r(i){const y=i.match(/v=([^&]+)/);return y?y[1]:""}const o=`https://www.youtube.com/embed/${r(t)}`,a=parseFloat(e.rating).toFixed(1),l=e.tags.slice(0,2).map(i=>`
      <li class="hashtag-btn-item">#${i}</li>
    `).join(""),d=e.ingredients.map(i=>`
  <li class="modal-card-ingr">
    ${i.name}
    <span class="modal-card-measure">${i.measure}</span>
  </li>
`).join("");return`
      <iframe
        src="${o}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="iframe-video"
      ></iframe>
      <h3 class="modal-recipe-name">${e.title}</h3>
      <div class="modal-general-inf">
      <div class="card-star-modal card_star-rating">
      <p class="modal-raiting cards-raiting">${a}</p>
      <div class="starts-modal ">
  


      <p class="modal-card-time">${e.time} min</p>
    </div>

     
        <ul class="modal-ingr-list">${d}</ul>
        <ul class="hashtag-btn-list-tablet list">${l}</ul>
        <p class="modal-recipe-instructions">${e.instructions}</p>
      </div>
`}n.recipeBtn.addEventListener("click",w);function w(){n.modalButtonClose.addEventListener("click",g),n.modalBackdrop.addEventListener("click",v),window.addEventListener("keydown",f),n.modalBackdrop.classList.add("is-open"),document.body.style.overflow="hidden"}function f(e){e.key==="Escape"&&g()}function g(){n.modalButtonClose.removeEventListener("click",g),n.modalBackdrop.removeEventListener("click",v),window.removeEventListener("keydown",f),n.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const e=document.querySelector(".iframe-video");e.src=""}function v(e){if(e&&e.target===n.modalBackdrop){n.modalButtonClose.removeEventListener("click",g),n.modalBackdrop.removeEventListener("click",v),window.removeEventListener("keydown",f),n.modalBackdrop.classList.remove("is-open"),document.body.style.overflow="auto";const t=document.querySelector(".iframe-video");t.src=""}}const h=document.querySelector(".modal-form-order");h.addEventListener("submit",_);function _(e){if(e.preventDefault(),h.checkValidity()){const t=new FormData(h);fetch("https://tasty-treats-backend.p.goit.global/api/orders",{method:"POST",body:t}).then(r=>r.json()).then(r=>{console.log("Order submitted successfully:",r)}).catch(r=>{console.error("Error:",r)})}else console.error("Form is invalid. Please check your input.")}function F(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=e||t;document.documentElement.setAttribute("data-theme",r),document.querySelectorAll(".input-switcher").forEach(function(o){o.checked=r==="dark"})}function D(){const t=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",t),document.querySelectorAll(".input-switcher").forEach(function(s){s.checked=t==="dark"}),localStorage.setItem("theme",t)}const H=document.querySelectorAll(".input-switcher");H.forEach(function(e){e.addEventListener("change",D)});F();
