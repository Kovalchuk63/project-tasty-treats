import { fechCook } from './js/api/requst-сook.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
const swiperContainer = document.querySelector('.events');

fechCook().then(data => {
  const swiperCard = data
    .map(
      item => `
      <div class="swiper-slide">
        <div class="swiper-card">
          <div class="cook-slide"><img src="${item.cook.imgUrl}" alt="${item.topic.name}" width="137px" height="442px"/></div>
          <div class="plate-slide">
            <div class="plate"><img src="${item.topic.previewUrl}" width="351px" height="468px"/></div>
            <p class="plate-name">${item.topic.name}</p>
            <p class="plate-area">${item.topic.area}</p>
          </div>
          <div class="dish"><img src="${item.topic.previewUrl}" width="351px" height="442px"/></div>
        </div>
      </div>`
    )
    .join('');

  swiperContainer.insertAdjacentHTML('beforeend', swiperCard(data));
  /*swiperContainer.innerHTML = swiperCard;*/

  const swiper = new Swiper('.swiper', {
    /*.events*/ modules: [Navigation, Pagination],
    allowSlideNext: true,
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/
    pagination: {
      el: '.page' /*event*/,
      clickable: true,
    },
    speed: 500,
    loop: true,
  });
});
