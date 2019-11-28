"use strict";

// Импортируем другие js-файлы

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
  var items = document.querySelectorAll(".js-tab-trigger");
  var contents = document.querySelectorAll(".js-tab-content");

  items.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();

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
})();