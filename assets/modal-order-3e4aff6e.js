(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const i={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card"),listCardRecipes:document.querySelector(".js-card-list")};i.categoriesBtnList.addEventListener("click",v);m().then(e=>i.categoriesBtnList.insertAdjacentHTML("beforeend",h(e))).catch(e=>console.log(e));async function m(){const r=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!r.ok)throw new Error(r.statusText);return r.json()}function h(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}function v(e){i.allCategoriesBtn.classList.remove("all-categories-btn-active"),f(e.target.textContent).then(t=>i.listCardRecipes.innerHTML=y(t.results)).catch(t=>console.log(t))}async function f(e){const t="https://tasty-treats-backend.p.goit.global/api",r="/recipes",a=new URLSearchParams({limit:9,category:e}),s=await fetch(`${t}${r}?${a}`);if(!s.ok)throw new Error(s.statusText);return s.json()}function y(e){return e.map(({preview:t,title:r,description:a,rating:s})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${t||defaults.preview}" alt="${r||defaults.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${r||defaults.title}</h2>
      <p class="card-dish-descr">${a||defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${s}</p>
          <div class="rating-container">
          <svg class="svg-star">
            <use href="sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="sprite.svg#icon-Star"></use>
          </svg>
          <svg class="svg-star">
            <use href="sprite.svg#icon-Star"></use>
          </svg>
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`).join("")}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),a=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),(s?enableBodyScroll:disableBodyScroll)(document.body)};t.addEventListener("click",a),r.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),enableBodyScroll(document.body))})})();const b=document.querySelector(".js-popular-recipes");S().then(e=>{console.log(e),b.insertAdjacentHTML("beforeend",L(e))}).catch(e=>console.log(e));async function S(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function L(e){return`${e.map(({id:t,preview:r,title:a,description:s})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${a}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${a.toUpperCase()}</h2>
        <p class="description-dish">${s}</p>
        </div>
         </li>`).join("")}
            `}const $=document.querySelector(".js-all-categories-btn"),l=document.querySelector(".js-card-list");$.addEventListener("click",w);k();const c={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function d(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function u(e){return e.results.map(({preview:r,title:a,description:s,rating:n})=>{const o=M(n),g=Array.from({length:o},()=>`<svg class="svg-star rated">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join(""),p=Array.from({length:5-o},()=>`<svg class="svg-star">
          <use href="../sprite.svg#icon-Star"></use>
        </svg>`).join("");return`<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||c.preview}" alt="${a||c.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${a||c.title}</h2>
      <p class="card-dish-descr">${s||c.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${n}</p>
          <div class="rating-container">
          ${g}${p}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`}).join("")}function w(){d().then(e=>{const t=u(e);l.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function k(){try{const e=await d(),t=u(e);l.innerHTML=t}catch(e){console.log("Error",e.message)}}function M(e){return Math.floor(e/2)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?e.body.style.overflow="visible":e.body.style.overflow="hidden"}})();
