'use strict';

(function () {

  let hero = new Swiper('#hero-slider', {
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  let partners = new Swiper('#partners-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });
  
  let projects = new Swiper('#projects-slider', {
      grabCursor: true,
      centeredSlides: true,
    slidesPerView: 'auto',
      spaceBetween: 100,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
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



  


})();
