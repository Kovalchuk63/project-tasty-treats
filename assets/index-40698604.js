/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const g={categoriesBtnList:document.querySelector(".js-categories-btn-card")};p().then(e=>{console.log(e),g.categoriesBtnList.insertAdjacentHTML("beforeend",d(e))}).catch(e=>console.log(e));async function p(){const t=await fetch("https://tasty-treats-backend.p.goit.global/api/categories");if(!t.ok)throw new Error(t.statusText);return t.json()}function d(e){return e.map(({_id:t,name:o})=>`<button class="categories-btn" data-id="${t}">${o}</button>`).join("")}const f=document.querySelector(".js-popular-recipe");h().then(e=>{f.insertAdjacentHTML("beforeend",m(e.results))}).catch(e=>console.log(e));function h(){return fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then(t=>{if(!t.ok)throw new Error("Error");return t.json()})}function m(e){return e.map(({id:t,preview:o,title:n,description:s,popularity:r})=>`<li key="${t}" class="popular-recipe-item">
        <img class="img-dish" src="${o}" alt="${n}">
        <h2 class="name-dish">${n}</h2>
        <h3 class="description-dish">${s}</h3>
      </li>`).join("")}const v=document.querySelector(".js-all-categories-btn"),a=document.querySelector(".js-card-list");v.addEventListener("click",y);b();const i={preview:"../img/no-image-icon-23485.png",title:"no title",description:"no description",rating:"xx"};async function l(){const e="https://tasty-treats-backend.p.goit.global/api",t=new URLSearchParams({limit:9}),o=await fetch(`${e}/recipes?${t}`);if(!o.ok)throw new Error(o.statusText);return await o.json()}function u(e){return console.log(e),e.results.map(({preview:o,title:n,description:s,rating:r})=>`<li class="card-item">
      <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../sprite.svg#icon-heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${o||i.preview}" alt="${n||i.title}"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${n||i.title}</h2>
      <p class="card-dish-descr">${s||i.description}</p>
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
    </li>`).join("")}function y(){l().then(e=>{const t=u(e);a.innerHTML=t}).catch(()=>{console.log("Error",error.message)})}async function b(){try{const e=await l(),t=u(e);a.innerHTML=t}catch(e){console.log("Error",e.message)}}
