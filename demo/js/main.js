
"use strict";

// Импортируем другие js-файлы
$(document).ready(function () {
  $(".js-button").click(function () {
    var elementClick = $(this).attr("data-target");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 1100);
    return false;
  });
});


ScrollReveal().reveal('.headline');