import { fechCook } from '.api/request-cook.js';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.events');
  fechCook()
    .then(data => {
      const swiperCard = data
        .map(
          item => `
        <div class="swiper-slide">
          <div class="swiper-card">
            <div class="cook-slide"><img src="${item.cook.imgUrl}" alt="${item.topic.name}" width="137px" height="442px"/></div>
            <div class="plate-slide">
              <div class="plate"><img src="${item.topic.previewUrl}" width="351px" height="468px"/></div>
              <p class="plate-name">${item.topic.name}</p>
              <p class="plate-sub">${item.topic.area}</p>
            </div>
            <div class="dish"><img src="${item.topic.previewUrl}" width="351px" height="442px"/></div>
          </div>
        </div>`
        )
        .join('');
      swiperContainer.insertAdjacentHTML('beforeend', swiperCard);
      const swiper = new Swiper('.events', {
        modules: [Navigation, Pagination, Autoplay],
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.slice',
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
