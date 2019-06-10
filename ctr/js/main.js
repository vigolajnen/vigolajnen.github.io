/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
  function a(a,b){if(b){var c=!a.getAttribute("viewBox")&&b.getAttribute("viewBox"),d=document.createDocumentFragment(),e=b.cloneNode(!0);for(c&&a.setAttribute("viewBox",c);e.childNodes.length;)d.appendChild(e.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=document.createElement("x");c.innerHTML=b.responseText,b.s.splice(0).map(function(b){a(b[0],c.querySelector("#"+b[1].replace(/(\W)/g,"\\$1")))})}},b.onreadystatechange()}function c(c){function d(){for(var c;c=e[0];){var j=c.parentNode;if(j&&/svg/i.test(j.nodeName)){var k=c.getAttribute("xlink:href");if(f&&(!g||g(k,j,c))){var l=k.split("#"),m=l[0],n=l[1];if(j.removeChild(c),m.length){var o=i[m]=i[m]||new XMLHttpRequest;o.s||(o.s=[],o.open("GET",m),o.send()),o.s.push([j,n]),b(o)}else a(j,document.getElementById(n))}}}h(d,17)}c=c||{};var e=document.getElementsByTagName("use"),f="shim"in c?c.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,g=c.validate,h=window.requestAnimationFrame||setTimeout,i={};f&&d()}return c});

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

  if (document.querySelector(".js-bl-modal-close")) {
    document.querySelector(".js-bl-modal-close").addEventListener("click", function(evt) {
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
  if (document.querySelector(".js-bl-modal-close")) {
    document.querySelector(".js-bl-modal-close").addEventListener("click", function(evt) {
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
// модальные окна
(function () {
  document.addEventListener("DOMContentLoaded", function() {
    
    var modalButtons = document.querySelectorAll(".js-bl-modal-btn"),
      overlay = document.querySelector(".js-overlay-bl-modal"),
      closeButtons = document.querySelectorAll(".js-bl-modal-close");

    modalButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();

        var modalId = this.getAttribute("data-index");
        if (modalId) {
          var modalElem = document.querySelector(
            '.bl-modal[data-index="' + modalId + '"]'
          );
        }
        
        if (modalElem) {
          modalElem.classList.add("active");
          overlay.classList.add("active");
        }
        
      });
    });

    closeButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        var parentModal = this.closest(".bl-modal");

        parentModal.classList.remove("active");
        if (overlay) {
          overlay.classList.remove("active");
        }
        
      });
    });

    document.body.addEventListener(
      "keyup",
      function(e) {
        var key = e.keyCode;

        if (key == 27) {
          document.querySelector(".bl-modal.active").classList.remove("active");
          document
            .querySelector(".bl-modal__overlay")
            .classList.remove("active");
        }
      },
      false
    );

    if (overlay) {
      overlay.addEventListener("click", function() {
        document.querySelector(".bl-modal.active").classList.remove("active");
        this.classList.remove("active");
      });
    }
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
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        // console.log(idBtn);
        if (idBtn == 7) {
          document.querySelector(".wrapper").classList.add("container-xs");
          document.querySelector(".wrapper").classList.remove("container-sm");
        } else if (idBtn == 8) {
          document.querySelector(".wrapper").classList.add("container-sm");
          document.querySelector(".wrapper").classList.remove("container-xs");
        } else if (idBtn == 9) {
          document.querySelector(".wrapper").classList.remove("container-xs");
          document.querySelector(".wrapper").classList.remove("container-sm");
        } else if (idBtn == 2) {
          parent.document.querySelector("iframe[name='code']").classList.toggle("active");
          document.querySelector("iframe[name='code']").contentWindow.document.querySelector(".bl-modal").classList.add("active");
        }  else if (idBtn == 10) {
          parent.document.querySelector("iframe[name='properties']").classList.toggle("active");
          parent.document.querySelector("iframe[name='properties']").contentWindow.document.querySelector(".bl-modal").classList.add("active");
        }

      });
    });
  });

  window.addEventListener("message", function (evt) {
    // console.log(evt);
    if (evt.data.target == 6 && evt.data.source == 0) {
      parent.document.querySelector(".bl-modal[data-index='6']").classList.add("active");
    } else if (evt.data.target == 1 && evt.data.source == 0) {
      parent.document.querySelector(".bl-modal[data-index='1']").classList.add("active");
    } else if (evt.data.type == "close" && evt.data.target == 2) {
      parent.document.querySelector("iframe[name='code']").classList.remove("active");
      document.querySelector("iframe[name='code']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
      
    } else if (evt.data.type == "close" && evt.data.target == 3) {
      parent.document.querySelector("iframe[name='settings']").classList.remove("active");
      document.querySelector("iframe[name='settings']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
    } else if (evt.data.type == "close" && evt.data.target == 10) {
      parent.document.querySelector("iframe[name='properties']").classList.remove("active");
      document.querySelector("iframe[name='properties']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
    }
  });
})();