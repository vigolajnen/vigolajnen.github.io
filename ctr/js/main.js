

// Импортируем другие js-файлы
(function() {
  var widgetButton = document.querySelector("span[data-index='6']");
  if (widgetButton) {
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
  }
  
  if (document.querySelector("button[data-index='1']")) {
    document.querySelector("button[data-index='1']").addEventListener('click', function (evt) {
        console.log(evt);
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
  }
  
})();
(function() {
  parent.postMessage({
    source: 2,
    type: "code page",
    target: 2
  });

  if (document.querySelector(".js-btn-close")) {
    document.querySelector(".js-btn-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 2,
        type: "close",
        target: 2
      });
    });
  }

})();
(function() {
  parent.postMessage({
    source: 10,
    type: "properties page",
    target: 10
  });
  if (document.querySelector(".js-btn-close")) {
    document.querySelector(".js-btn-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 10,
        type: "close",
        target: 10
      });
    });
  }

})();

"use strict";

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
"use strict";

// 
var controlsWrapper = document.querySelector(".block-control");
var controlItems = document.querySelectorAll(".block-control__btn");

if (controlsWrapper) {
  controlsWrapper.addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeItem = evt.target;
    if (activeItem.tagName != "SPAN") return;

    for (var i = 0; i < controlItems.length; i++) {
      controlItems[i].parentNode.classList.remove("active");
    }

    activeItem.parentNode.classList.add("active");
  });
}

(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var openIframes = document.querySelectorAll(".js-btn");

    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        var blockEdit = document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        if (blockEdit) {
          blockEdit.classList.add("active");
          blockEdit.parentElement.classList.add("active");
        }

        var blClose = document.querySelectorAll(".w-close");
        blClose.forEach(function(bl) {
          bl.classList.remove("active");
          bl.parentElement.classList.remove("active");
        });

        if (idBtn == 7) {
          document.querySelector(".wrapper").classList.add("wrapper-xs");
          document.querySelector(".wrapper").classList.remove("wrapper-sm");
        } else if (idBtn == 8) {
          document.querySelector(".wrapper").classList.add("wrapper-sm");
          document.querySelector(".wrapper").classList.remove("wrapper-xs");
        } else if (idBtn == 9) {
          document.querySelector(".wrapper").classList.remove("wrapper-xs");
          document.querySelector(".wrapper").classList.remove("wrapper-sm");
        }
      });
    });

    var closeButtons = document.querySelectorAll(".js-btn-close");
    closeButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        var parentModal = this.closest(".bl-modal");

        parentModal.classList.remove("active");
        parentModal.parentElement.classList.remove("active");
      });
    });

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


  console.log(event);

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
    }
    // else if (evt.data.target == 10) {
    //   parent.document
    //     .querySelector(".bl-modal[data-index='10']")
    //     .classList.add("active");
    //   parent.document
    //     .querySelector(".bl-modal[data-index='10']")
    //     .parentElement.classList.add("active");
    // }
    var openIframes = document.querySelectorAll(".js-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        var blockEditFrame = parent.document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        if (blockEditFrame) {
          blockEditFrame.classList.add("active");
          blockEditFrame.parentElement.classList.add("active");

          if (blockEditFrame.classList.contains("js-iframe")) {
            var closeBtnFrame = blockEditFrame.contentDocument.querySelector(
              ".js-btn-close"
            );

            if (closeBtnFrame) {
              closeBtnFrame.addEventListener("click", function(evt) {
                evt.preventDefault();
                blockEditFrame.classList.remove("active");
                blockEditFrame.parentElement.classList.remove("active");
                blockEditFrame.contentDocument
                  .querySelector(".bl-modal")
                  .classList.add("active");
              });
            }
          }
        }
      });
    });
  });
})();