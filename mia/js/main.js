
"use strict";

// Импортируем другие js-файлы

var linkPollShow = document.querySelector("#one .poll__button");
var linksPollShow = document.querySelectorAll("#two .poll__button");
linkPollShow.addEventListener("click", function(evt){
  evt.preventDefault();

  document.querySelector("#one").style.display = "none";
  document.querySelector("#two").style.display = "block";
});

linksPollShow.forEach(function(item){
  item.addEventListener("click", function (evt) {
    evt.preventDefault();

    document.querySelector("#two").style.display = "none";
    document.querySelector("#three").style.display = "block";
  });
});