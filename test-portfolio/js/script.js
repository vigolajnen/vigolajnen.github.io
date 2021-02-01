'use strict';

document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper('.portfolio__slider', {
    slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
    loopFillGroupWithBlank: true,
      breakpoints: {
        500: {
          slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
        },
        960: {
          slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

});