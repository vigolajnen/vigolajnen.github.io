
"use strict";

// Импортируем другие js-файлы


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

(function() {
  var jsTriggersSub = document.querySelectorAll(".js-subtab-trigger");
  jsTriggersSub.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-subtab"),
        content = document.querySelector(
          '.js-subtab-content[data-subtab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-subtab-trigger.active"),
        activeContent = document.querySelector(".js-subtab-content.active");

      activeTrigger.classList.remove("active");
      trigger.classList.add("active");

      activeContent.classList.remove("active");
      content.classList.add("active");
    });
  });
})();


(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var navButtons = document.querySelectorAll(".js-btn");
    var closeButtons = document.querySelectorAll(".js-btn-close");
    var wrapper = document.querySelector(".wrapper");

    navButtons.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");

        var blockEdit = document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        var blockClose = document.querySelectorAll(".w-close");
        blockClose.forEach(function(item) {
          item.classList.remove("active");
          item.parentElement.classList.remove("active");
        });

        if (blockEdit) {
          blockEdit.classList.add("active");
          blockEdit.parentElement.classList.add("active");
        } else if (blockEdit && blockEdit.classList.contains("js-iframe")) {
          blockEdit.contentWindow.document
            .querySelector(".bl-modal")
            .classList.add("active");
        }



        if (idBtn == 7) {
          wrapper.classList.add("wrapper-xs");
          wrapper.classList.remove("wrapper-sm");
        } else if (idBtn == 8) {
          wrapper.classList.add("wrapper-sm");
          wrapper.classList.remove("wrapper-xs");
        } else if (idBtn == 9) {
          wrapper.classList.remove("wrapper-xs");
          wrapper.classList.remove("wrapper-sm");
        }
      });
    });



    if (closeButtons) {
      closeButtons.forEach(function(item) {
        item.addEventListener("click", function(evt) {
          evt.preventDefault();
          var parentModal = this.closest(".bl-modal");
          parentModal.classList.toggle("active");
          parentModal.parentElement.classList.remove("active");

          top.document
            .querySelector(".js-iframe[name='code']")
            .parentElement.classList.remove("active");
          top.document
            .querySelector(".js-iframe[name='code']")
            .classList.remove("active");

          top.document
            .querySelector(".js-iframe[data-index='10']")
            .parentElement.classList.remove("active");
          top.document
            .querySelector(".js-iframe[data-index='10']")
            .classList.remove("active");
        });
      });
    }

    var subBtn = document.querySelector(".js-btn-sub");
    if (subBtn) {
      subBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        document
          .querySelector(".w-edit[data-index='5']")
          .classList.add("active");
        document
          .querySelector(".w-edit[data-index='5']")
          .parentElement.classList.add("active");
      });
    }
  });

  window.addEventListener("message", function(evt) {
    if (evt.data.target == 1) {
      parent.document
        .querySelector(".bl-modal[data-index='1']")
        .classList.add("active");
      parent.document
        .querySelector(".bl-modal[data-index='1']")
        .parentElement.classList.add("active");
    } else if (evt.data.target == 6) {
      parent.document
        .querySelector(".bl-modal[data-index='6']")
        .classList.add("active");
      parent.document
        .querySelector(".bl-modal[data-index='6']")
        .parentElement.classList.add("active");
    } else if (evt.data.target == 10) {
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .classList.add("active");
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .parentElement.classList.add("active");
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .contentDocument.querySelector(".bl-modal")
        .classList.add("active");
    }
  });
})();
(function() {
  var codeButton = document.querySelector("span[data-index='2']");
  if (codeButton) {
    codeButton.addEventListener("click", function(evt) {

      evt.preventDefault();
      parent.postMessage(
        {
          source: 2,
          type: "code page",
          target: 2
        },
        "*"
      );
    });
  }
})();
(function() {
  var widgetButtons = document.querySelectorAll("span[data-index='6']");
  if (widgetButtons) {
    widgetButtons.forEach(function(widgetButton) {
      widgetButton.addEventListener("click", function(evt) {
        console.log(evt);
        evt.preventDefault();
        parent.postMessage(
          {
            source: 0,
            type: "edit",
            target: 6
          },
          "*"
        );
      });
    });
  }

  var widgetButtons2 = document.querySelectorAll("span[data-index='10']");
  if (widgetButtons2) {
    widgetButtons2.forEach(function(widgetButton) {
      widgetButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        parent.postMessage(
          {
            source: 0,
            type: "properties",
            target: 10
          },
          "*"
        );
      });
    });
  }

  var widgetButtons3 = document.querySelectorAll("button[data-index='1']");
  if (widgetButtons3) {
    widgetButtons3.forEach(function(widgetButton) {
      widgetButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        parent.postMessage(
          {
            source: 0,
            type: "widget",
            target: 1
          },
          "*"
        );
      });
    });
  }
})();
(function() {
  var propertiasButton = document.querySelector("span[data-index='10']");
  if (propertiasButton) {
    propertiasButton.addEventListener("click", function(evt) {

      evt.preventDefault();
      parent.postMessage(
        {
          source: 10,
          type: "properties page",
          target: 10
        },
        "*"
      );
    });
  }
})();
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var controlBlocks = document.querySelectorAll(".block-control__item");
    var controlItems = document.querySelectorAll(".block-control__btn");

    controlItems.forEach(function(item) {
      item.addEventListener("click", function(evt) {
        evt.preventDefault();

        controlBlocks.forEach(function(item) {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });

        item.parentElement.classList.add("active");
      });
    });
  });
})();