import { fechCook } from './API/request-cook.js';

import SwiperCore from 'swiper/core';
/* import 'swiper/swiper-bundle.min.css'; */

const swiperContainer = document.querySelector('.events');

fechCook().then(data => {
  const swiperCard = data
    .map(
      item => `
      <div class="swiper-slide">
        <div class="swiper-card">
          <div class="cook-slide"><img src="${item.cook.imgUrl}" alt="${item.topic.name}" width=137px height=442px/></div>
          <div class="plate-slide">
            <div class="plate"><img src="${item.topic.previewUrl}" width=351px height=468px"/></div>
            <p class="plate-name">${item.topic.name}</p>
            <p class="plate-area">${item.topic.area}</p>
          </div>
          <div class="dish"><img src="${item.topic.previewUrl}" width=351px height=442px"/></div>
        </div>
      </div>`
    )
    .join('');

  swiperContainer.innerHTML = swiperCard;

  const swiper = new SwiperCore('.events', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.page',
      clickable: true,
    },
    speed: 500,
    loop: true,
  });
});
