'use strict';

(function () {

  if ('NodeList' in window && !NodeList.prototype.forEach) {

    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  var nav = document.querySelector('.page-header__nav');
  var navBtn = document.querySelector('.page-header__burger');
  var navItems = document.querySelectorAll('.nav__item');
  var subItems = document.querySelectorAll('.nav__sub-item');

  function fadeLeftNavOpen() {
    nav.classList.add('fadeOutLeft');
    nav.classList.remove('fadeInLeft');
    nav.classList.remove('fadeInUp');
  }

  function fadeLeftNavClose() {
    nav.classList.add('fadeInLeft');
    nav.classList.remove('fadeOutLeft');
    nav.classList.remove('fadeInUp');
  }

  function fadeNavOpen(elem) {
    elem.classList.add('fadeInUp');
    elem.classList.remove('fadeOutLeft');
    elem.classList.remove('fadeInLeft');
    elem.classList.remove('fadeOutUp');
  }

  function fadeNavClose(elem) {
    elem.classList.add('fadeOutUp');
    elem.classList.remove('fadeOutLeft');
    elem.classList.remove('fadeInLeft');
    elem.classList.remove('fadeInUp');
  }

  if (nav) {
    nav.classList.add('animated');
  }

  if (navBtn) {
    navBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (navBtn.classList.contains('page-header__burger--cross')) {
        navBtn.classList.remove('page-header__burger--cross');

      } else {
        navBtn.classList.add('page-header__burger--cross');
      }

      if (nav.classList.contains('page-header__nav--open')) {
        nav.classList.remove('page-header__nav--open');

        fadeLeftNavOpen();

      } else {
        nav.classList.add('page-header__nav--open');
        nav.classList.remove('page-header__nav--close');

        fadeLeftNavClose();
      }
      document.querySelector('.page').classList.toggle('page--overlay');
    });
  }

  function mobMenu() {
    if (window.screen.width > 992) {
      fadeNavOpen(nav);
      document.querySelector('body').classList.remove('page--overlay');
      if (nav.classList.contains('page-header__nav--open')) {
        nav.classList.remove('page-header__nav--open');
      }
      if (nav.classList.contains('page-header__nav--close')) {
        nav.classList.remove('page-header__nav--close');
      }
      if (navBtn.classList.contains('page-header__burger--cross')) {
        navBtn.classList.remove('page-header__burger--cross');
      }
    } else {
      nav.classList.remove('page-header__nav--open');
    }
  }

  mobMenu();

  window.onresize = function () {
    mobMenu();
  };

  function subMenuOpen(subLists) {
    subLists.forEach(function (subList) {
      subList.classList.add('nav__sub-list--open');
      if (subList.classList.contains('nav__sub-list--close')) {
        subList.classList.remove('nav__sub-list--close');
      }
    });
  }

  function subItemsOpen() {
    subItems.forEach(function (subItem) {
      subItem.classList.add('animated');
      subItem.classList.add('fadeInLeft');

      if (subItem.classList.contains('fadeOutLeft')) {
        subItem.classList.remove('fadeOutLeft');
      }

      if (window.screen.width > 992) {
        fadeNavOpen(subItem);
      }
    });
  }

  function subMenuClose(subLists) {
    setTimeout(function () {
      subLists.forEach(function (subList) {
        subList.classList.add('nav__sub-list--close');
        if (subList.classList.contains('nav__sub-list--open')) {
          subList.classList.remove('nav__sub-list--open');
        }
      });
    }, 1500);
  }

  function subItemsClose() {
    subItems.forEach(function (subItem) {
      subItem.classList.add('animated');
      subItem.classList.add('fadeOutLeft');
      subItem.classList.remove('fadeInLeft');

      if (window.screen.width > 992) {
        fadeNavClose(subItem);
      }
    });
  }

  navItems.forEach(function (navItem) {
    navItem.addEventListener('click', function () {

      var subList = navItem.lastChild;
      var subLists = navItem.lastChild.childNodes;

      if (subList) {

        navItem.classList.toggle('nav__item--active');

        subItemsClose();
        subMenuClose(subLists);

        var activeItem = document.querySelector('.nav__item.nav__item--active');
        if (activeItem) {
          activeItem.classList.remove('nav__item--active');
          navItem.classList.add('nav__item--active');

          subMenuOpen(subLists);
          subItemsOpen();
        }
      }
    });
  });

})();
