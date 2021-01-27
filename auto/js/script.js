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

  let nav = document.querySelector('.page-header__nav');
  let navBtn = document.querySelector('.page-header__burger');

  var forms = document.querySelectorAll('form');


  function maskPhone(inputPhoneName, mask) {
    var textArr = document.querySelectorAll(inputPhoneName);

    textArr.forEach(function (text) {
      // var text = document.querySelector(inputPhoneName);
      var value = text.value;

      var literalPattern = /[0\*]/;
      var numberPattern = /[0-9]/;
      var newValue = '';

      for (var vId = 0, mId = 0; mId < mask.length;) {

        if (mId >= value.length) {
          break;
        }

        if (mask[mId] === '0' && value[vId].match(numberPattern) === null) {
          break;
        }

        // Found a literal
        while (mask[mId].match(literalPattern) === null) {
          if (value[vId] === mask[mId]) {
            break;
          }

          newValue += mask[mId++];
        }

        newValue += value[vId++];
        mId++;

      }

      text.value = newValue;
    });

  }

  var phones = document.querySelectorAll('input[name$="phone"]');
  phones.forEach(function (phone) {
    phone.addEventListener('keyup', function () {
      maskPhone('input[name$="phone"]', '+7(000) 000 00 00');
    });
    phone.addEventListener('input', function () {
      // console.log(phone.value.length);
      if (phone.value.length < 17) {
        phone.setCustomValidity('Введите номер телефона полностью');

      } else {
        phone.setCustomValidity('');
      }
    });

    phone.addEventListener('focus', function (evt) {
      evt.preventDefault();
      phone.parentElement.classList.add('input-phone');
    });

    phone.addEventListener('blur', function (evt) {
      evt.preventDefault();
      phone.parentElement.classList.remove('input-phone');
    });

  });

  function generateError(text) {
    var error = document.createElement('div');
    error.className = 'error__text';
    error.innerText = text;
    return error;
  }

  function checkFieldsPresence(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value || (inputs[i].type === 'checkbox' && !inputs[i].checked)) {
        inputs[i].parentElement.classList.add('error');
        var error = generateError('Ошибка: заполните поле');
        inputs[i].parentElement.appendChild(error, inputs[i]);
      }
      if (inputs[i].getAttribute('placeholder') === 'телефон') {
        if (inputs[i].value.length < 17) {
          inputs[i].setCustomValidity('Введите номер телефона полностью');
        } else {
          inputs[i].setCustomValidity('');
        }
      }
    }
  }

  function removeValidation(form) {
    var errors = form.querySelectorAll('.error__text');

    for (var i = 0; i < errors.length; i++) {
      errors[i].parentElement.classList.remove('error');
      errors[i].remove();
    }
  }

  forms.forEach(function (form) {
    var inputs = form.querySelectorAll('input');
    form.addEventListener('click', function (evt) {
      if (evt.target.tagName === 'BUTTON') {
        removeValidation(form);
        checkFieldsPresence(inputs);
      }
    });


  });
 

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

  let accordion = document.querySelector('.accordion');

  accordion.addEventListener('click', (evt) => {
    evt.preventDefault();

    let target = evt.target.closest('.accordion__item-header');
    let item = target.parentElement;

    if (!target) return;
    if (!accordion.contains(target)) return;

    item.classList.toggle('accordion__item--active');

  });

})();
