(function() {
  var counts = document.querySelectorAll("#cont");
  counts.forEach(function(item) {
    var circle = item.querySelector(".t-advantages-12__svg .bar");
    var procent = item.getAttribute("data-pct");
    console.log(item);
    console.log(circle);
    console.log(procent);
    if (isNaN(procent)) {
      procent = 100;
    } else {
      var r = circle.getAttribute("r");
      var c = Math.PI * (r * 2);

      if (procent < 0) {
        procent = 0;
      }
      if (procent > 100) {
        procent = 100;
      }
      var pct = ((100 - procent) / 100) * c;
      circle.setAttribute("style", "stroke-dashoffset:" + pct);
    }
  });
})();