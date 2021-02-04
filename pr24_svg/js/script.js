'use strict';


$(document).ready(function () {
  
  $(".accordion__item-header").on("click", function() {
    if ($(this).parent(".accordion__item").hasClass("active")) {
      $(this).parent(".accordion__item").removeClass("active");
      $(this)
        .siblings(".accordion__item-text")
        .slideUp("slow");
    } else {
      $(".accordion__item").removeClass("active");
      $(this).parent(".accordion__item").addClass("active");
      $(".accordion__item-text").slideUp("slow");
      $(this)
        .siblings(".accordion__item-text")
        .slideDown("slow");
    }
  });


  $(window).on("resize", function (e) {
      checkScreenSize();
    });
    

  function checkScreenSize() {
      var newWindowWidth = $(window).width();
    if (newWindowWidth < 601) {
        $('.slider__row').children().unwrap();
        $('.slider').bxSlider({
          auto: true,
          autoHover: true,
          controls: true,
        infiniteLoop: true
        });

      } else {
        $('.slider').bxSlider().destroySlider();
        setEqualHeight($(".reviews-and-questions__item"));
      }
  }

  function setEqualHeight(columns) {
    var tallestcolumn = 0;

    columns.each(function() {
      var currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });

    columns.height(tallestcolumn);
  }

  checkScreenSize();

  var rellax = new Rellax('.rellax');
});






