






// Импортируем другие js-файлы

// navigation

(function () {

  var navMain = document.querySelector(".navigation");
  var navMainList = document.querySelector(".navigation__list");
  var navToggle = document.querySelector(".navigation__toggle");

  navMain.classList.remove("navigation--nojs");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle('mobile-menu--active');

    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
      document.querySelector('body').style.overflow = 'visible';
    }
  });

  navMainList.addEventListener("click", function () {
    navMain.classList.add("navigation--closed");
    navMain.classList.remove("navigation--opened");
    document.querySelector('body').style.overflow = 'visible';
  })

  document.querySelectorAll(".navigation__list li a").forEach(function(item){
    item.addEventListener('click', function() {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
      document.querySelector("body").style.overflow = "visible";
    })
  });
})();

// navigation end


(function() {
  var links = document.querySelectorAll(".bl-review__link");

  links.forEach(function(link) {
    link.addEventListener('click', function(evt){
      evt.preventDefault();

      link.previousElementSibling.classList.toggle('active');
      link.classList.toggle('close');
    })
  });
})();