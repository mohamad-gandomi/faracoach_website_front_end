import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//======================================================================
// COURSES CAROUSEL
//======================================================================

const testimonialsSwiper = new Swiper('.courses-carousel', {
  slidesPerView: 1,
  spaceBetween: 20,
  preventClicks: true,
//   speed: 800,
//   autoplay: {
//     delay: 3000,
//   },
  navigation: {
    nextEl: '.courses-carousel__next-btn',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
  }
});