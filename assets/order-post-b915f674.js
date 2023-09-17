(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const l={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")},c={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};l.categoriesBtnList.addEventListener("click",y);f().then(e=>l.categoriesBtnList.insertAdjacentHTML("beforeend",v(e))).catch(e=>console.log(e));async function f(){const s=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!s.ok)throw new Error(s.statusText);return s.json()}function v(e){return e.map(({_id:t,name:s})=>`<button class="categories-btn" data-id="${t}">${s}</button>`).join("")}function y(e){l.allCategoriesBtn.classList.remove("all-categories-btn-active"),b(e.target.textContent).then(t=>l.listCardRecipes.innerHTML=S(t.results)).catch(t=>console.log(t))}async function b(e){const t="https://tasty-treats-backend.p.goit.global/api",s="/recipes",a=new URLSearchParams({limit:9,category:e}),r=await fetch(`${t}${s}?${a}`);if(!r.ok)throw new Error(r.statusText);return r.json()}function S(e){return e.map(({preview:s,title:a,description:r,rating:o})=>{const n=L(o),d=Array.from({length:n},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),u=Array.from({length:5-n},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${s||c.preview}" alt="${a||c.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${a||c.title}</h2>
      <p class="card-dish-descr">${r||c.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${o}</p>
          <div class="rating-container">
          ${d}${u}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function L(e){return Math.floor(e/2)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=()=>{const r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),(r?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",a),s.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const k=document.querySelector(".js-popular-recipes");$().then(e=>{console.log(e),k.insertAdjacentHTML("beforeend",w(e))}).catch(e=>console.log(e));async function $(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function w(e){return`${e.map(({id:t,preview:s,title:a,description:r})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${s}" alt="${a}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${a.toUpperCase()}</h2>
        <p class="description-dish">${r}</p>
        </div>
         </li>`).join("")}
            `}const B=document.querySelector(".js-all-categories-btn"),g=document.querySelector(".js-card-list");B.addEventListener("click",M);j();const i={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function m(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),s=await fetch(`${e}/recipes?${t}`);if(!s.ok)throw new Error(s.statusText);return await s.json()}function h(e){return e.results.map(({preview:s,title:a,description:r,rating:o})=>{const n=C(o),d=Array.from({length:n},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),u=Array.from({length:5-n},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${s||i.preview}" alt="${a||i.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${a||i.title}</h2>
      <p class="card-dish-descr">${r||i.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${o}</p>
          <div class="rating-container">
          ${d}${u}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function M(){m().then(e=>{const t=h(e);g.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function j(){try{const e=await m(),t=h(e);g.innerHTML=t}catch(e){console.log("Error",e.message)}}function C(e){return Math.floor(e/2)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();const E={allCards:document.querySelector(".cards-list"),modalCardCont:document.querySelector(".card-markup-modal"),modalBackdrop:document.querySelector(".modal-backdrop"),modalButtonClose:document.querySelector(".modal-btn-close"),giveRatingModalBtn:document.querySelector(".modal-give-rating"),addToFavorite:document.querySelector(".modal-add-favorite"),recipeBtn:document.querySelector(".recipe-btn")};E.allCards.addEventListener("click",handlerGetIdCard);const p=document.querySelector(".modal-form-order");p.addEventListener("submit",q);function q(e){if(e.preventDefault(),p.checkValidity()){const t=new FormData(p);fetch("https://tasty-treats-backend.p.goit.global/api/orders",{method:"POST",body:t}).then(s=>s.json()).then(s=>{console.log("Order submitted successfully:",s)}).catch(s=>{console.error("Error:",s)})}else console.error("Form is invalid. Please check your input.")}
