
"use strict";

// Импортируем другие js-файлы

// Меню


(function() {
  var nav = document.querySelector(".navigation");
  var navBtn = nav.querySelector(".navigation--opened");
  var navInner = document.querySelector(".navigation__items");

  navBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(navBtn);
    if (navBtn.classList.contains("navigation--opened")) {
      navBtn.classList.remove("navigation--opened");
      navBtn.classList.add("navigation--closed");
    } else {
      navBtn.classList.add("navigation--opened");
      navBtn.classList.remove("navigation--closed");
    }

    if (navInner.classList.contains("active")) {
      navInner.classList.remove("active");
      navInner.classList.add("closed");
    } else {
      navInner.classList.add("active");
      navInner.classList.remove("closed");
    }

    document.querySelector("body").classList.toggle("overlay");
  });

})();

// Form
(function() {
  var fieldCode = document.querySelector("#page-form-code");
  var btn = document.querySelector(".button[disabled]");
  if (btn) btn.disabled = true;
  if (fieldCode) {
    fieldCode.addEventListener("change", function() {
      if (fieldCode.value !== "") btn.disabled = false;
      else btn.disabled = true;
    });
  }
})();


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

        // inputName.focus();

        stepsPopup();

        popupBtnClose.addEventListener("click", function(evt) {
          evt.preventDefault();
          popupOverlay.classList.remove("popup-show");
          document.querySelector("body").classList.remove("overlay");
        });
      }
    }
  });
});



// var activeStep = function(step) {
//   document.querySelectorAll("[data-step^=step]").forEach(function(step) {
//     step.classList.remove("active");
//     step.classList.add("closed");

//     step.nextElementSibling.classList.remove("closed");
//     step.nextElementSibling.classList.add("active");
//     return step;
//   });
// };
(function() {
  var sliderAll = [
    {
      id: "#js-slider-office",
      slideCount: "1.5",
      loopedSlidesCount: 1,
      slidesPerView320: 1,
      slidesPerView640: 2,
      slidesPerView1200: 3
    }
  ];


  for (var i = 0; i < sliderAll.length; i++) {
    var slider = sliderAll[i];

    var swiper = new Swiper(slider.id, {
      direction: "horizontal",
      slidesPerView: slider.slideCount,
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
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
          spaceBetween: 20
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

})(); /* IIFE end */
(function() {
  // var jsTriggers = document.querySelectorAll(".js-tab-trigger");
  // jsTriggers.forEach(function(trigger) {
  //   trigger.addEventListener("click", function() {
  //     var id = this.getAttribute("data-tab"),
  //       content = document.querySelector(
  //         '.js-tab-content[data-tab="' + id + '"]'
  //       ),
  //       activeTrigger = document.querySelector(".js-tab-trigger.active"),
  //       activeContent = document.querySelector(".js-tab-content.active");

  //       enableSwiper();

  //     activeTrigger.classList.remove("active");
  //     trigger.classList.add("active");

  //     activeContent.classList.remove("active");
  //     content.classList.add("active");
  //   });
  // });
  // var items = document.querySelectorAll(".js-tab-trigger");
  // var contents = document.querySelectorAll(".js-tab-content");

  // items.forEach(function(item) {
  //   item.addEventListener("click", function(evt) {
  //     evt.preventDefault();

  //     for (var i = 0; i < items.length; i++) {
  //       items[i].classList.remove("active");
  //     }
  //     for (var i = 0; i < contents.length; i++) {
  //       contents[i].classList.remove("active");
  //     }

  //     var tabName = this.getAttribute("data-tab");

  //     var activeItem = document.querySelector(
  //       ".tabs__item[data-tab='" + tabName + "']"
  //     );
  //     var activeContent = document.querySelector(
  //       ".tabs__panel[data-tab='" + tabName + "']"
  //     );

  //     activeItem.classList.add("active");
  //     activeContent.classList.add("active");
  //   });
  // });
})();
(function(){
  var openBtns = document.querySelectorAll(".accordion__item-title"),
    closeBtns = document.querySelectorAll(".accordion__btn-close"),
    descItems = document.querySelectorAll(".accordion__desc");

  openBtns.forEach(function(item){
    item.addEventListener('click', function(evt){
      evt.preventDefault();

      descItems.forEach(function(desc) {
        desc.classList.remove("active");
        desc.style.maxHeight = "0";
      });

      var text = item.nextElementSibling;
      text.style.maxHeight = text.scrollHeight + 'px';
      text.classList.toggle('active');

      if (!text.classList.contains('active')) text.style.maxHeight = "0";

    });
  });

  closeBtns.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();
      var text = item.parentElement;
      text.style.maxHeight = "0";
      text.classList.remove("active");
    });
  });
})();
(function() {
  var btns = document.querySelectorAll(".js-btn-more");
  btns.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      var content =
        btn.parentElement.parentElement.parentElement.nextElementSibling;

      btn.classList.toggle("active");
      content.classList.toggle("active");
    });

    var items = document.querySelectorAll(".js-tab-trigger");
    var contents = document.querySelectorAll(".js-tab-content");

    for (var i = 0; i < items.length; i++) {
      var tabName = items[i].getAttribute("data-tab");
      items[i].setAttribute("data-tab", tabName + "-" + i);
    }
    for (var i = 0; i < contents.length; i++) {
      var tabName = contents[i].getAttribute("data-tab");
      contents[i].setAttribute("data-tab", tabName + "-" + i);
    }

    items.forEach(function(item) {
      item.addEventListener("click", function(evt) {
        evt.preventDefault();

        var contentAll = document.querySelectorAll(".hotel-item__content");

        for (var i = 0; i < contentAll.length; i++) {
          contentAll[i].classList.remove("active");
        }

        var content = this.parentElement.parentElement.parentElement
          .parentElement.nextElementSibling;

        content.classList.add("active");

        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("active");
        }
        for (var i = 0; i < contents.length; i++) {
          contents[i].classList.remove("active");
        }

        var tabName = this.getAttribute("data-tab");

        var activeItem = document.querySelector(
          ".tabs__item[data-tab='" + tabName + "']"
        );
        var activeContent = document.querySelector(
          ".tabs__panel[data-tab='" + tabName + "']"
        );

        activeItem.classList.add("active");
        activeContent.classList.add("active");
      });
    });
  });

  // сортировка по цене
  // 1. массив цен
  var priceHotels = document.querySelectorAll(".hotel-item__info-price");
  var arrHotelPrices = [].map.call(priceHotels, function(obj) {
    return obj.innerText
      .slice(0, -1)
      .replace(/\s/g, "")
      .split(",");
  });

  for (var i = 0; i < arrHotelPrices.length; i++) {
    arrHotelPrices[i] = +arrHotelPrices[i];
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }


  arrHotelPrices.sort(compareNumeric);


  console.log(arrHotelPrices);
})();
(function() {
  CardInfo.setDefaultOptions({
    banksLogosPath: "../dist/banks-logos/",
    brandsLogosPath: "../dist/brands-logos/"
  });

  $(function() {
    var $front = $("#front");
    var $bankLink = $("#bank-link");
    var $brandLogo = $("#brand-logo");
    var $number = $("#number");
    var $code = $("#code");
    var $random = $("#random");
    var $instance = $("#instance");
    var sendedPrefix = window.location.search.substr(1);

    $number
      .on("keyup change paste", function() {
        var cardInfo = new CardInfo($number.val());
        if (cardInfo.bankUrl) {
          $bankLink
            .attr("href", cardInfo.bankUrl)
            .css("backgroundImage", 'url("' + cardInfo.bankLogo + '")')
            .show();
        } else {
          $bankLink.hide();
        }
        $front
          .css("background", cardInfo.backgroundGradient)
          .css("color", cardInfo.textColor);
        $code.attr("placeholder", cardInfo.codeName ? cardInfo.codeName : "");
        $number.mask(cardInfo.numberMask);
        if (cardInfo.brandLogo) {
          $brandLogo
            .attr("src", cardInfo.brandLogo)
            .attr("alt", cardInfo.brandName)
            .show();
        } else {
          $brandLogo.hide();
        }
        $instance.html(JSON.stringify(cardInfo, null, 2));
      })
      .trigger("keyup");

    $random.on("click", function(e) {
      e.preventDefault();
      var aliases = Object.keys(CardInfo.banks);
      var alias = aliases[Math.floor(Math.random() * aliases.length)];
      var prefixes = Object.entries(CardInfo._prefixes);
      for (var i = prefixes.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var x = prefixes[i - 1];
        prefixes[i - 1] = prefixes[j];
        prefixes[j] = x;
      }
      var prefix = prefixes.find(function(pair) {
        return pair[1] === alias;
      })[0];
      $number.val($number.masked(prefix + "0000000000")).trigger("keyup");
    });
  });
})();

$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("data-placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this)
    .find("option")
    .each(function() {
      template +=
        '<span class="custom-option ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function() {
    $(this)
      .parents(".custom-options")
      .addClass("option-hover");
  },
  function() {
    $(this)
      .parents(".custom-options")
      .removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function() {
  $("html").one("click", function() {
    $(".custom-select").removeClass("opened");
  });
  $(this)
    .parents(".custom-select")
    .toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this)
    .parents(".custom-select")
    .removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});
var stepsForm = function() {
  var steps = document.querySelectorAll("[data-step^=step]");

  if (steps) {
    steps.forEach(function(step) {
      var name = step.getAttribute("data-step");

      step.classList.remove("active");
      step.classList.add("closed");

      if (name == "step-registration") {
        step.classList.add("active");
        step.classList.remove("closed");

        document
          .querySelector(".step-registration__btn")
          .addEventListener("click", function(evt) {
            evt.preventDefault();

            step.classList.remove("active");
            step.classList.add("closed");

            var activeStep = step.nextElementSibling;

            activeStep.classList.remove("closed");
            activeStep.classList.add("active");

            document
              .querySelector("#js-btn-confirm")
              .addEventListener("click", function(evt) {
                evt.preventDefault();

                document.location.href = "/cabinet-2.html";

                // activeStep.classList.remove("active");
                // activeStep.classList.add("closed");

                // activeStep.nextElementSibling.classList.remove("closed");
                // activeStep.nextElementSibling.classList.add("active");
              });
          });
      }

      if (document.querySelector("#js-btn-step-price")) {
        document
          .querySelector("#js-btn-step-price")
          .addEventListener("click", function(evt) {
            evt.preventDefault();

            document.location.href = "/cabinet-4.html";
          });
      }

      // 4 шаг

      if (name == "step-four-1") {
        step.classList.add("active");
        step.classList.remove("closed");

        var activeStep = step.nextElementSibling;

        activeStep.classList.remove("closed");
        activeStep.classList.add("active");

        var moreBtns = document.querySelectorAll("[data-btn^=js]");
        moreBtns.forEach(function(btn) {
          btn.addEventListener("click", function(evt) {
            evt.preventDefault();

            step.classList.remove("active");
            step.classList.add("closed");

            // document.location.href = "/cabinet-2.html";

            activeStep.classList.remove("active");
            activeStep.classList.add("closed");

            activeStep.nextElementSibling.classList.remove("closed");
            activeStep.nextElementSibling.classList.add("active");
          });
        });



        document
          .querySelector("[data-btn=js-step-more-2]")
          .addEventListener("click", function(evt) {
            evt.preventDefault();

            step.classList.remove("active");
            step.classList.add("closed");

            // document.location.href = "/cabinet-2.html";

            activeStep.classList.remove("active");
            activeStep.classList.add("closed");

            activeStep.nextElementSibling.classList.remove("closed");
            activeStep.nextElementSibling.classList.add("active");
          });
      }
    });
  }
};

stepsForm();


(function() {
  var links = document.querySelectorAll(".page-section__link span");
  links.forEach(function(link) {
    if (link && window.outerWidth < 600) {
      link.innerHTML = "Ещё";
    }
  });


  function up(smooth) {
    var top = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );
    if (top > 0) {
      var behavior = smooth ? "smooth" : "auto";
      window.scrollBy({ behavior: behavior, top: 700, left: 0 });
    }
    return false;
  }

  var scrollBtns = document.querySelectorAll(".page-section__btn");
  scrollBtns.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      up(true);
    });
  });
})();