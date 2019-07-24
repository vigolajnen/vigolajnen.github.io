
"use strict";

// Импортируем другие js-файлы

// Меню
(function() {
  var nav = document.querySelector(".mob-navigation");
  var navBtn = nav.querySelector(".mob-navigation__toggle");
  var navInner = nav.querySelector(".mob-navigation__inner");
  var navInnerLinks = nav.querySelectorAll(".mobmenu-inner__link");

  navBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    navInner.classList.add("active");
    navInner.classList.remove("closed");
    document.querySelector("body").classList.add("overlay");
  });

  var links = nav.querySelectorAll(".mob-navigation a");
  links.forEach(function(link) {
    link.addEventListener("click", function(evt) {
      if (link.nextElementSibling && !link.classList.contains("logo")) {
        evt.preventDefault();
        link.nextElementSibling.classList.toggle("active");
      }
    });
  });

  navInnerLinks.forEach(function(link){
    link.classList.remove("active");
    link.addEventListener('click', function(evt){
      link.classList.toggle("active");
    });
  });

  var navBtnClosed = nav.querySelector(".mob-navigation__closed");
  navBtnClosed.addEventListener('click', function(evt){
    evt.preventDefault();
    navInner.classList.remove("active");
    navInner.classList.add("closed");
    document.querySelector("body").classList.remove("overlay");
  });
})();
(function() {
  var links = document.querySelectorAll(".navigation__link");
  var menuItems = document.querySelectorAll(".sidemenu__inner-menu");
  var sidemenu = document.querySelector(".sidemenu__inner");

  links.forEach(function(link) {
    link.addEventListener("click", function(evt) {
      var nameItem = this.parentElement.getAttribute("data-item");
      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("sidemenu__inner-menu--active");
        var menuItem = menuItems[i];
        var menuItemName = menuItem.getAttribute("data-item");

        if (nameItem == menuItemName) {
          evt.preventDefault();
          sidemenu.classList.add("visible");
          document.querySelector("body").classList.add("overlay");
          document
            .querySelector(
              ".sidemenu__inner-menu[data-item='" + nameItem + "']"
            )
            .classList.add("sidemenu__inner-menu--active");
        }
      }
    });
  });

  var innerlinks = document.querySelectorAll(".sidemenu__inner-link");
  innerlinks.forEach(function(link) {
    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      link.classList.toggle("active");
      var list = link.nextElementSibling;
      if (list) list.classList.toggle("active");
    });
  });
  var btnCloseMenu = document.querySelector(".js-btn-close");
  if (btnCloseMenu) {
    btnCloseMenu.addEventListener("click", function(evt) {
      evt.preventDefault();
      sidemenu.classList.remove("visible");
      document.querySelector("body").classList.remove("overlay");
    });
  }
})();
(function(){
  var links = document.querySelectorAll(".page-footer__list-link");

  links.forEach(function(link){
    link.addEventListener('click', function(evt){
      evt.preventDefault();
      link.parentElement.classList.toggle('active');
    })
  });
  document.addEventListener("DOMContentLoaded", function(evt) {
    var items = document.querySelectorAll(".page-footer__list-item");

    items.forEach(function(item) {
      item.classList.add("active");
    });
    window.onresize = function() {
      resize_info();
    };
  });

  function resize_info() {
    var items = document.querySelectorAll(".page-footer__list-item");
    if (window.outerWidth > 600) {
      items.forEach(function(item) {
        item.classList.add("active");
      });
    } else {
      items.forEach(function(item) {
        item.classList.remove("active");
      });
    }
  }
})();

// Блоки
(function() {
  var links = document.querySelectorAll(".page-section__link span");
  links.forEach(function(link) {
    if (link && (window.outerWidth < 600)) {
      link.innerHTML = "Ещё";
    }
  });
})();
(function() {
  var textBlocks = document.querySelectorAll(".block-preview__text");
  textBlocks.forEach(function(block) {
    var size = 128;

    if (block.innerText.length >= size) {
      var text = block.innerText.substring(0, size);
      console.log(text);
      var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
      var text = block.innerText.substring(0, lastIndex) + "..."; // обрезаем до последнего слова

      return (block.innerText = text);
    }
  });
})();

// Form
var inputs = document.querySelectorAll(".page-form__inputfile");
inputs.forEach(function(input) {
  var label = input.nextElementSibling,
    labelVal = label.innerText;
  input.addEventListener("change", function(e) {
    var fileName = "";
    if (this.files && this.files.length > 1)
      fileName = "".replace("{count}", this.files.length);
    else fileName = e.target.value.split("\\").pop();
    if (fileName) label.innerText = fileName;
    else label.innerText = labelVal;
  });
  input.addEventListener("focus", function() {
    input.classList.add("has-focus");
  });
  input.addEventListener("blur", function() {
    input.classList.remove("has-focus");
  });
});


// var popup = document.querySelector(".popup");
var popups = document.querySelectorAll(".popup");
var popupOverlay = document.querySelector(".popup-overlay");
var popupBtnClose = document.querySelector(".popup-close");
var wrapper = document.querySelector(".wrapper");

var popupOpenBtns = document.querySelectorAll(".js-popup-btn");

popupOpenBtns.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    var nameBtn = btn.getAttribute("data-target");
    for (var i = 0; i < popups.length; i++) {
      popups[i].classList.remove("popup-show");
      var namePopup = popups[i].getAttribute("data-target");

      var inputName = popups[i].querySelector("[id=page-form-name]");

      if (nameBtn == namePopup) {
        popupOverlay.classList.add("popup-show");
        document.querySelector("body").classList.add("overlay");
        inputName.focus();

        popupBtnClose.addEventListener("click", function(evt) {
          evt.preventDefault();
          popupOverlay.classList.remove("popup-show");
          document.querySelector("body").classList.remove("overlay");
        });
      }
    }
  });
});
(function() {
  var sliderAll = [
    {
      id: "#js-slider-web",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5,
      slidesPerView640: 2,
      slidesPerView1200: 3
    },
    {
      id: "#js-slider-design",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5,
      slidesPerView640: 2,
      slidesPerView1200: 3
    },
    {
      id: "#js-slider-video",
      slideCount: "auto",
      loopedSlidesCount: 3,
      slidesPerView320: 1.5,
      slidesPerView640: 3,
      slidesPerView1200: 4
    },
    {
      id: "#js-slider-news",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5,
      slidesPerView640: 2,
      slidesPerView1200: 3
    },
    {
      id: "#js-slider-jobs",
      slideCount: 4,
      loopedSlidesCount: 4,
      slidesPerView320: 1.5,
      slidesPerView640: 2,
      slidesPerView1200: 3
    },
    {
      id: "#js-slider-history",
      slideCount: 2,
      loopedSlidesCount: 4,
      slidesPerView320: 1,
      slidesPerView640: 1,
      slidesPerView1200: 1
    }
  ];

  var sliderWebAll = [
    {
      id: "#js-slider-web-1",
      slidesPerView: 4,
      slidesPerViewMob: 2,
      spaceBetweenMob: 10
    },
    {
      id: "#js-slider-web-2",
      slidesPerView: 4,
      slidesPerViewMob: 1.5,
      spaceBetweenMob: 20
    },
    {
      id: "#js-slider-web-3",
      slidesPerView: 4,
      slidesPerViewMob: 1.5,
      spaceBetweenMob: 20
    },
    {
      id: "#js-slider-web-4",
      slidesPerView: 4,
      slidesPerViewMob: 1.5,
      spaceBetweenMob: 20
    },
    {
      id: "#js-slider-web-5",
      slidesPerView: 4,
      slidesPerViewMob: 1.5,
      spaceBetweenMob: 20
    },
    {
      id: "#js-slider-web-6",
      slidesPerView: 4,
      slidesPerViewMob: 1.5,
      spaceBetweenMob: 20
    }
  ];

  for (var i = 0; i < sliderAll.length; i++) {
    var slider = sliderAll[i];

    var swiper = new Swiper(slider.id, {
      direction: "horizontal",
      slidesPerView: slider.slideCount,
      spaceBetween: 15,
      loop: false,
      freeMode: true,

      spaceBetween: 10,
      speed: 700,
      loopedSlides: slider.loopedSlidesCount,
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: slider.slidesPerView320,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: sliderAll.slidesPerView640,
          spaceBetween: 15
        },
        // when window width is <= 1200px
        1200: {
          slidesPerView: sliderAll.slidesPerView1200,
          spaceBetween: 15
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  var swiperService = new Swiper("#js-slider-service", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    freeMode: true,

    spaceBetween: 10,
    speed: 700,
    loopedSlides: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is <= 1200px
      1200: {
        slidesPerView: 1,
        spaceBetween: 15
      }
    },
    effect: "fade",
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia("(min-width:992px)");

  // keep track of swiper instances to destroy later
  var mySwiper;

  var breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  var enableSwiper = function() {
    for (var i = 0; i < sliderWebAll.length; i++) {
      var slider = sliderWebAll[i];

      mySwiper = new Swiper(slider.id, {
        direction: "horizontal",
        slidesPerView: slider.slidesPerView,
        spaceBetween: 15,
        loop: false,
        freeMode: true,

        speed: 700,
        loopedSlides: 1,
        breakpoints: {
          320: {
            slidesPerView: slider.slidesPerViewMob,
            spaceBetween: slider.spaceBetweenMob
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        },
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

  var jsTriggers = document.querySelectorAll(".js-tab-trigger");
  jsTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-tab"),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-tab-trigger.active"),
        activeContent = document.querySelector(".js-tab-content.active");

      // keep an eye on viewport size changes
      breakpoint.addListener(breakpointChecker);

      // kickstart
      breakpointChecker();

      activeTrigger.classList.remove("active");
      trigger.classList.add("active");

      activeContent.classList.remove("active");
      content.classList.add("active");
    });
  });
})(); /* IIFE end */
// (function() {
//   var jsTriggers = document.querySelectorAll(".js-tab-trigger");
//   jsTriggers.forEach(function(trigger) {
//     trigger.addEventListener("click", function() {
//       var id = this.getAttribute("data-tab"),
//         content = document.querySelector(
//           '.js-tab-content[data-tab="' + id + '"]'
//         ),
//         activeTrigger = document.querySelector(".js-tab-trigger.active"),
//         activeContent = document.querySelector(".js-tab-content.active");

//         enableSwiper();

//       activeTrigger.classList.remove("active");
//       trigger.classList.add("active");

//       activeContent.classList.remove("active");
//       content.classList.add("active");
//     });
//   });
// })();