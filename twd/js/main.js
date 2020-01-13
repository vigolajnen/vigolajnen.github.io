
"use strict";

// Импортируем другие js-файлы



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
(function () {
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',

  });
})();
(function() {
  $('.collapse').collapse('show');
})();

function up(smooth) {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > -1) {
    var behavior = smooth ? "smooth" : "auto";
    window.scrollBy({ behavior: behavior, top: 600, left: 0 });
  }
  return false;
}

var scrollBtns = document.querySelectorAll(".section__btn");
scrollBtns.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    up(true);
  });
});


// форма поиска туров
(function () {



  $(function () {
    $('input[name="birthday"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        locale: {
          format: "MM/DD/YYYY",
          separator: " - ",
          applyLabel: "Применить",
          cancelLabel: "Отмена",
          fromLabel: "От",
          toLabel: "До",
          customRangeLabel: "Свой",
          daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
          ],
          firstDay: 1
        },
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        // alert("You are " + years + " years old!");
      }
    );
  });
  $(function () {
    $('input[name="passport-date-1"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        locale: {
          format: "MM/DD/YYYY",
          separator: " - ",
          applyLabel: "Применить",
          cancelLabel: "Отмена",
          fromLabel: "От",
          toLabel: "До",
          customRangeLabel: "Свой",
          daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
          ],
          firstDay: 1
        },
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        // alert("You are " + years + " years old!");
      }
    );
  });
  $(function () {
    $('input[name="passport-date-2"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        locale: {
          format: "MM/DD/YYYY",
          separator: " - ",
          applyLabel: "Применить",
          cancelLabel: "Отмена",
          fromLabel: "От",
          toLabel: "До",
          customRangeLabel: "Свой",
          daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
          ],
          firstDay: 1
        },
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        // alert("You are " + years + " years old!");
      }
    );
  });

  $(function () {
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        format: "MM/DD/YYYY",
        separator: " - ",
        applyLabel: "Применить",
        cancelLabel: "Отмена",
        fromLabel: "От",
        toLabel: "До",
        customRangeLabel: "Свой",
        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        firstDay: 1
      }
    });

    $('input[name="datefilter"]').on("apply.daterangepicker", function (
      ev,
      picker
    ) {
      $(this).val(
        picker.startDate.format("MM/DD/YYYY") +
        " - " +
        picker.endDate.format("MM/DD/YYYY")
      );
    });

    $('input[name="datefilter"]').on("cancel.daterangepicker", function (
      ev,
      picker
    ) {
      $(this).val("");
    });
    $(".search-form__btn-del").on("cancel.daterangepicker", function (
      ev,
      picker
    ) {
      $(this).val("");
    });
  });
})(); /* IIFE end */


(function () {
  var fields = document.querySelectorAll('input[name^="js-"]'),
    submitBtn = document.querySelector(".search-form__btn-submit");

  if (fields) {
    fields.forEach(function (field) {

      function hideHandler(evt) {
        console.log(evt.target == field);
        console.log(evt.target == listOptions);
        if (evt.target == field || evt.target == listOptions) return;

        toggleListOptions(false);
      }

      function toggleListOptions(isActiv) {
        if (isActiv) {
          listOptions.classList.add("active");
          listOptions.classList.remove("closed");
          document.addEventListener('click', hideHandler);
        } else {
          listOptions.classList.remove("active");
          listOptions.classList.add("closed");
          document.removeEventListener('click', hideHandler);
        }
      }

      var listOptions = field.parentElement.parentElement.nextElementSibling;
      listOptions.addEventListener("click", function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        var targetName = event.target.innerText;

        field.value = targetName;

        toggleListOptions(false);

        return field.value;
      });

      field.addEventListener("focus", function (evt) {
        field.focused = true;

        var activeOption = document.querySelector('.search-form__options.active');
        if (activeOption) {
          activeOption.classList.add('closed');
          activeOption.classList.remove('active');
        }

        toggleListOptions(true);

      });
    });
  }
  if (submitBtn) {
    submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.location.href = "#";
    });
  }


})();
(function(){


  $('body').append($('.modal'));
  // Модальное окно с выбором туристов
  $('.modal-backdrop').hide();

  $('.tc_TouristContentMinus').click(function () {
    var count = $('.tc_valAdults').text();
    if (count >= 2) {
      count--; var count = $('.tc_valAdults').text(count);
    }
  });
  $('.tc_TouristContentPlus').click(function () {
    var count = $('.tc_valAdults').text();
    if (count <= 5) {
      count++; var count = $('.tc_valAdults').text(count);
    }
  });

  $('.tc_addChild').click(function () {
    $('.tc_TouristButton .tc_pickAge').show();
    $('.tc_TouristPickElement').show();
    $('.tc_ButtonActive').hide();
  });

  $('.tc_TouristPickElement').hide();

  $('.tc_TouristButton .tc_pickAge').click(function (e) {
    var elem = " " + e.target.innerHTML;
    console.log(elem);

    $('.tc_TouristStatic').append('<div class="tc_TouristElement tc_child"><div class="tc_TouristAction tc_TouristActionMinus"><div class="tc_TouristContentMinus tc_symbol"> - </div></div> <div class="tc_TouristCount tc_TouristAll">Ребёнок&ensp;<span class="tc_childCount">' + elem + '</span></div></div>');


    $('.tc_TouristButton .tc_pickAge').hide();
    $('.tc_TouristPickElement').hide();
    $('.tc_addChild').show();
    $('.tc_ButtonActive').show();
    checkCountChild();
  }).hide();

  var checkCountChild = function () {
    var children = document.querySelectorAll('.tc_child');
    if (children.length >= 3) $('.tc_addChild').hide();
    else $('.tc_addChild').show();
  };

  document.onclick = function () {
    var div = Array.from(document.querySelectorAll('.tc_child'));
    div.forEach(function(e){
      e.onclick = function () {
        this.remove();
      }
    });

    checkCountChild();
  }

  $('.tc_ButtonActive').click(function () {
    var adult = $('.tc_valAdults').text();

    var children = document.querySelectorAll('.tc_childCount');
    var childCounter = [];
    children.forEach(function(el){
      childCounter.push(parseInt(el.innerText));
    });

    childCounter = childCounter.join(',');
    if (children.length != 0) {
      $('.formValAdult').val(adult);
      $('.formValChild').val(children.length);
      $('.formValYears').val(childCounter);
      $('#search-form-tourists').text(adult + ' взр. ' + children.length + ' реб.');
    }
    else if (adult == 1) {
      $('.formValAdult').val(adult);
      $('.formValChild').val(0);
      $('#search-form-tourists').text(adult + ' взрослый');
    }
    else {
      $('.formValAdult').val(adult);
      $('.formValChild').val(0);
      $('#search-form-tourists').text(adult + ' взрослых');
    }


    $('#w1').css({ 'display': 'none', 'margin-top': '50px', 'padding-right': '0px', 'opacity': '1' });
    $('#w1').removeClass('in');
    $('body').css({ 'padding-right': '0px' });
    $('body').removeClass('modal-open');
    $('.modal').removeClass('show');

    console.log(childCounter);

  });



})();

// карта с адресами офисов



ymaps.ready(init);

function init() {

  // Создание экземпляра карты.
  var myMap = new ymaps.Map('YMaps07', {
    center: [59.932473, 30.349142],
    zoom: 5
  }, {
    searchControlProvider: 'yandex#search'
  }),
    // Контейнер для меню.
    menu = $('<ul class="list-unstyled"></ul>');


  for (var i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i]);
  }

  function createMenuGroup(group) {
    // Пункт меню.
    var menuItem = $('<li class="mb-4"><a href="#">' + group.name + '</a></li>'),
      // Коллекция для геообъектов группы.
      collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
      // Контейнер для подменю.
      submenu = $('<ul class="list-unstyled"></ul>');

    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection);
    // Добавляем подменю.
    menuItem
      .append(submenu)
      // Добавляем пункт в меню.
      .appendTo(menu)
      // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
      .find('a')
      .bind('click', function () {
        if (collection.getParent()) {
          myMap.geoObjects.remove(collection);
          submenu.hide();
        } else {
          myMap.geoObjects.add(collection);
          submenu.show();
        }
      });
    for (var j = 0, m = group.items.length; j < m; j++) {
      createSubMenu(group.items[j], collection, submenu);
    }
  }

  function createSubMenu(item, collection, submenu) {
    // Пункт подменю.
    var submenuItem = $('<li class="mb-4 px-md-4"><a class="d-block link mb-2 h4 link" href="#">' + item.name + '</a><span class="d-block text-dark">' + item.address + '</span><a class="text-dark" href="tel:' + item.phone + '">' + item.phone + '</a></li>'),
      // Создаем метку.
      placemark = new ymaps.Placemark(item.center, { balloonContent: item.address });

    // Добавляем метку в коллекцию.
    collection.add(placemark);
    // Добавляем пункт в подменю.
    submenuItem
      .appendTo(submenu)
      // При клике по пункту подменю открываем/закрываем баллун у метки.
      .find('a')
      .bind('click', function () {
        if (!placemark.balloon.isOpen()) {
          placemark.balloon.open();
        } else {
          placemark.balloon.close();
        }
        return false;
      });
  }

  // Добавляем меню в тэг BODY.
  menu.appendTo($('.contacts__info'));
  // Выставляем масштаб карты чтобы были видны все группы.
  myMap.setBounds(myMap.geoObjects.getBounds());
}



// Группы объектов
var groups = [
  {
    name: "",
    style: "islands#redIcon",
    items: [
      {
        center: [59.936300, 30.316757],
        name: "Офис у м.Невский проспект",
        address: "Невский проспект, д.13",
        phone: "+7(812) 222-33-44"
      }
    ]
  },
  {
    name: "",
    style: "islands#greenIcon",
    items: [
      {
        center: [59.936805, 30.316263],
        name: "Офис у м.Невский проспект",
        address: "Невский проспект, д.14",
        phone: "+7(812) 222-33-44"
      }
    ]
  },
  {
    name: "",
    style: "islands#orangeIcon",
    items: [
      {
        center: [59.936138, 30.318204],
        name: "Офис у м.Невский проспект",
        address: "Невский проспект, д.15",
        phone: "+7(812) 222-33-44"
      }
    ]
  },
  {
    name: "",
    style: "islands#blueIcon",
    items: [
      {
        center: [59.936733, 30.316973],
        name: "Офис у м.Невский проспект",
        address: "Невский проспект, д.16",
        phone: "+7(812) 222-33-44"
      }
    ]
  }
];