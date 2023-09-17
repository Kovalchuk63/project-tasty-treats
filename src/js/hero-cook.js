import { fetchCook } from './request-cook.js';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.events');
  fetchCook()
    .then(data => {
      const swiperCard = data
        .map(
          item => `
        <div class="swiper-slide">
          <div class="swiper-card">
            <div class="cook-slide"><img src="${item.cook.imgUrl}" alt="${item.topic.name}" class="cook-img"/></div>
            <div class="plate-slide">
              <div class="plate"><img src="${item.topic.previewUrl}" class="plate-img"/></div>
              <p class="plate-name">${item.topic.name}</p>
              <p class="plate-sub">${item.topic.area}</p>
            </div>
            <div class="dish"><img src="${item.topic.previewUrl}" class="dish-img"/></div>
          </div>
        </div>`
        )
        .join('');
      swiperContainer.insertAdjacentHTML('beforeend', swiperCard);
      const swiper = new Swiper('.events', {
        modules: {
          Navigation,
          Pagination,
          Autoplay,
        },
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 500,
        loop: true,
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
