/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const i={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card")};p().then(e=>{console.log(e),i.categoriesBtnList.insertAdjacentHTML("beforeend",d(e))}).catch(e=>console.log(e));async function p(){const t=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!t.ok)throw new Error(t.statusText);return t.json()}function d(e){return e.map(({_id:t,name:o})=>`<button class="categories-btn" data-id="${t}">${o}</button>`).join("")}i.categoriesBtnList.addEventListener("click",h);function h(e){i.allCategoriesBtn.classList.remove("all-categories-btn-active"),f(e.target.textContent).then(t=>"").catch(t=>console.log(t))}async function f(e){const t="https://tasty-treats-backend.p.goit.global/api/recipes",o=new URLSearchParams({category:e}),n=await fetch(`${t}?${o}`);if(!n.ok)throw new Error(n.statusText);return n.json()}const m=document.querySelector(".js-popular-recipe");v().then(e=>{m.insertAdjacentHTML("beforeend",y(e.results))}).catch(e=>console.log(e));function v(){return fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then(t=>{if(!t.ok)throw new Error("Error");return t.json()})}function y(e){return e.map(({id:t,preview:o,title:n,description:s,popularity:r})=>`<li key="${t}" class="popular-recipe-item">
        <img class="img-dish" src="${o}" alt="${n}">
        <h2 class="name-dish">${n}</h2>
        <h3 class="description-dish">${s}</h3>
      </li>`).join("")}const b=document.querySelector(".js-all-categories-btn"),l=document.querySelector(".js-card-list");b.addEventListener("click",L);S();const a={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function u(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),o=await fetch(`${e}/recipes?${t}`);if(!o.ok)throw new Error(o.statusText);return await o.json()}function g(e){return console.log(e),e.results.map(({preview:o,title:n,description:s,rating:r})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${o||a.preview}" alt="${n||a.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||a.title}</h2>
      <p class="card-dish-descr">${s||a.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${r}</p>
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
    </li>`).join("")}function L(){u().then(e=>{const t=g(e);l.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function S(){try{const e=await u(),t=g(e);l.innerHTML=t}catch(e){console.log("Error",e.message)}}
