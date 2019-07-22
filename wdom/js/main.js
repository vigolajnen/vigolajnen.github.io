
"use strict";

// Импортируем другие js-файлы

// Меню
(function() {
  var nav = document.querySelector(".mob-navigation");
  var navBtn = nav.querySelector(".mob-navigation__toggle");
  var navInner = nav.querySelector(".mob-navigation__inner");

  navBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    navInner.classList.add("active");
    navInner.classList.remove("closed");
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

  var navBtnClosed = nav.querySelector(".mob-navigation__closed");
  navBtnClosed.addEventListener('click', function(evt){
    evt.preventDefault();
    navInner.classList.remove("active");
    navInner.classList.add("closed");
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

      if (nameBtn == namePopup) {
        popupOverlay.classList.add("popup-show");
        document.querySelector("body").classList.add("overlay");

        popupBtnClose.addEventListener("click", function(evt) {
          evt.preventDefault();
          popupOverlay.classList.remove("popup-show");
          document.querySelector("body").classList.remove("overlay");
        });
      }
    }
  });
});

// // var popupForm = popup.querySelector('form');
// var inputName = popup.querySelector("[id=name]");
// // var inputPhone = popup.querySelector('[id=phone]');
// // var inputEmail = popup.querySelector('[id=email]');

// wrapper.addEventListener("click", function(evt) {
//   var target = evt.target;
//   if (target.className != "button button-order popup-btn") return;
//   popupOverlay.classList.add("popup-show");
//   document.querySelector("body").classList.add("overlay");
//   inputName.focus();
// });

// $(".popup-order__input--file").change(function() {
//   if ($(this).val() != "")
//     $(this)
//       .prev()
//       .text("Выбрано файлов: " + $(this)[0].files.length);
//   else
//     $(this)
//       .prev()
//       .text("Прикрепить файл (jpg, pdf, excel, word, zip, rar)");
// });
(function() {
  var sliderAll = [
    {
      id: "#js-slider-web",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5
    },
    {
      id: "#js-slider-design",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5
    },
    {
      id: "#js-slider-video",
      slideCount: 3,
      loopedSlidesCount: 3,
      slidesPerView320: 1.5
    },
    {
      id: "#js-slider-news",
      slideCount: 4,
      loopedSlidesCount: 1,
      slidesPerView320: 1.5
    },
    {
      id: "#js-slider-jobs",
      slideCount: 4,
      loopedSlidesCount: 4,
      slidesPerView320: 1.5
    },
    {
      id: "#js-slider-history",
      slideCount: 2,
      loopedSlidesCount: 4,
      slidesPerView320: 1.5
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
          slidesPerView: 2,
          spaceBetween: 15
        },
        // when window width is <= 1200px
        1200: {
          slidesPerView: 3,
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
})();
(function() {
  var jsTriggers = document.querySelectorAll(".js-tab-trigger");
  jsTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-tab"),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-tab-trigger.active"),
        activeContent = document.querySelector(".js-tab-content.active");

      activeTrigger.classList.remove("active");
      trigger.classList.add("active");

      activeContent.classList.remove("active");
      content.classList.add("active");
    });
  });
})();

var canvas = document.getElementById("nokey"),
  can_w = parseInt(canvas.getAttribute("width")),
  can_h = parseInt(canvas.getAttribute("height")),
  ctx = canvas.getContext("2d");

// console.log(typeof can_w);

var ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    alpha: 1,
    phase: 0
  },
  ball_color = {
    r: 230,
    g: 230,
    b: 230
  },
  R = 6,
  balls = [],
  alpha_f = 0.03,
  alpha_phase = 0,
  // Line
  link_line_width = 0.8,
  dis_limit = 260,
  add_mouse_point = true,
  mouse_in = false,
  mouse_ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    type: "mouse"
  };

// Random speed
function getRandomSpeed(pos) {
  var min = -1,
    max = 1;
  switch (pos) {
    case "top":
      return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      break;
    case "right":
      return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      break;
    case "bottom":
      return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      break;
    case "left":
      return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      break;
    default:
      return;
      break;
  }
}

function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumFrom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall() {
  var pos = randomArrayItem(["top", "right", "bottom", "left"]);
  switch (pos) {
    case "top":
      return {
        x: randomSidePos(can_w),
        y: -R,
        vx: getRandomSpeed("top")[0],
        vy: getRandomSpeed("top")[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10)
      };
      break;
    case "right":
      return {
        x: can_w + R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed("right")[0],
        vy: getRandomSpeed("right")[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10)
      };
      break;
    case "bottom":
      return {
        x: randomSidePos(can_w),
        y: can_h + R,
        vx: getRandomSpeed("bottom")[0],
        vy: getRandomSpeed("bottom")[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10)
      };
      break;
    case "left":
      return {
        x: -R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed("left")[0],
        vy: getRandomSpeed("left")[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10)
      };
      break;
  }
}

function randomSidePos(length) {
  return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls() {
  Array.prototype.forEach.call(balls, function(b) {
    if (!b.hasOwnProperty("type")) {
      ctx.fillStyle =
        "rgba(" +
        ball_color.r +
        "," +
        ball_color.g +
        "," +
        ball_color.b +
        "," +
        b.alpha +
        ")";
      ctx.beginPath();
      ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  });
}

// Update balls
function updateBalls() {
  var new_balls = [];
  Array.prototype.forEach.call(balls, function(b) {
    b.x += b.vx;
    b.y += b.vy;

    if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
      new_balls.push(b);
    }

    // alpha change
    b.phase += alpha_f;
    b.alpha = Math.abs(Math.cos(b.phase));
    // console.log(b.alpha);
  });

  balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf() {}

// Draw lines
function renderLines() {
  var fraction, alpha;
  for (var i = 0; i < balls.length; i++) {
    for (var j = i + 1; j < balls.length; j++) {
      fraction = getDisOf(balls[i], balls[j]) / dis_limit;

      if (fraction < 1) {
        alpha = (1 - fraction).toString();

        ctx.strokeStyle = "rgba(150,150,150," + alpha + ")";
        ctx.lineWidth = link_line_width;

        ctx.beginPath();
        ctx.moveTo(balls[i].x, balls[i].y);
        ctx.lineTo(balls[j].x, balls[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

// calculate distance between two points
function getDisOf(b1, b2) {
  var delta_x = Math.abs(b1.x - b2.x),
    delta_y = Math.abs(b1.y - b2.y);

  return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
}

// add balls if there a little balls
function addBallIfy() {
  if (balls.length < 20) {
    balls.push(getRandomBall());
  }
}

// Render
function render() {
  ctx.clearRect(0, 0, can_w, can_h);

  renderBalls();

  renderLines();

  updateBalls();

  addBallIfy();

  window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num) {
  for (var i = 1; i <= num; i++) {
    balls.push({
      x: randomSidePos(can_w),
      y: randomSidePos(can_h),
      vx: getRandomSpeed("top")[0],
      vy: getRandomSpeed("top")[1],
      r: R,
      alpha: 1,
      phase: randomNumFrom(0, 10)
    });
  }
}
// Init Canvas
function initCanvas() {
  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);

  can_w = parseInt(canvas.getAttribute("width"));
  can_h = parseInt(canvas.getAttribute("height"));
}
window.addEventListener("resize", function(e) {
  console.log("Window Resize...");
  initCanvas();
});

function goMovie() {
  initCanvas();
  initBalls(30);
  window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener("mouseenter", function() {
  console.log("mouseenter");
  mouse_in = true;
  balls.push(mouse_ball);
});
canvas.addEventListener("mouseleave", function() {
  console.log("mouseleave");
  mouse_in = false;
  var new_balls = [];
  Array.prototype.forEach.call(balls, function(b) {
    if (!b.hasOwnProperty("type")) {
      new_balls.push(b);
    }
  });
  balls = new_balls.slice(0);
});
canvas.addEventListener("mousemove", function(e) {
  var e = e || window.event;
  mouse_ball.x = e.pageX;
  mouse_ball.y = e.pageY;
  // console.log(mouse_ball);
});