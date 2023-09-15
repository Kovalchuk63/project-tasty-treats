/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const i={allCategoriesBtn:document.querySelector(".js-all-categories-btn"),categoriesBtnList:document.querySelector(".js-categories-btn-card")};d().then(e=>{console.log(e),i.categoriesBtnList.insertAdjacentHTML("beforeend",h(e))}).catch(e=>console.log(e));async function d(){const t=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!t.ok)throw new Error(t.statusText);return t.json()}function h(e){return e.map(({_id:t,name:r})=>`<button class="categories-btn" data-id="${t}">${r}</button>`).join("")}i.categoriesBtnList.addEventListener("click",f);function f(e){i.allCategoriesBtn.classList.remove("all-categories-btn-active"),v(e.target.textContent).then(t=>"").catch(t=>console.log(t))}async function v(e){const t="https://tasty-treats-backend.p.goit.global/api/recipes",r=new URLSearchParams({category:e}),n=await fetch(`${t}?${r}`);if(!n.ok)throw new Error(n.statusText);return n.json()}const l=document.querySelector(".js-popular-recipes");m().then(e=>{console.log(e),l.insertAdjacentHTML("beforeend",y(e))}).catch(e=>console.log(e));async function m(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function y(e){return`${e.map(({id:t,preview:r,title:n,description:s})=>`<li key="${t}" class="popular-recipe-item">            
        <img class="img-dish" src="${r}" alt="${n}"> 
        <div class ="div-popular-list">
        <h3 class="name-dish">${n.toUpperCase()}</h2>
        <p class="description-dish">${s}</p>
        </div>
         </li>`).join("")}
            </ul>`}console.log(l);const b=document.querySelector(".js-all-categories-btn"),u=document.querySelector(".js-card-list");b.addEventListener("click",L);S();const a={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function g(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),r=await fetch(`${e}/recipes?${t}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}function p(e){return console.log(e),e.results.map(({preview:r,title:n,description:s,rating:o})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${r||a.preview}" alt="${n||a.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||a.title}</h2>
      <p class="card-dish-descr">${s||a.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${o}</p>
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
    </li>`).join("")}function L(){g().then(e=>{const t=p(e);u.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function S(){try{const e=await g(),t=p(e);u.innerHTML=t}catch(e){console.log("Error",e.message)}}
