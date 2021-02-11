'use strict';

(function () {

  let hero = new Swiper('#hero-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    lazy: true,
    
    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  let partners = new Swiper('#partners-slider', {
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 30,
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
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  let projects = new Swiper('#projects-slider', {
    lazy: true,
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
  


  
  // header scroll
  const body = document.body;
  const triggerMenu = document.querySelector(".page-header__btn-burger");

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  triggerMenu.addEventListener("click", () => {
    body.classList.toggle("menu-open");
    triggerMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
    
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
})();







