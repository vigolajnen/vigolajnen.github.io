"use strict";

// Импортируем другие js-файлы

// map


function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 59.9464941, lng: 30.3254092 }
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
  ["Метро Проспект Просвещения, Санкт-Петербург", 60.0524808, 30.333307, 4],
  ["Улица Шостаковича, дом 5, корпус 1", 60.0576247, 30.3308753, 5],
  ["Метро Московская, Санкт-Петербург", 59.8520263, 30.3192447, 3],
  ["Садовая, Санкт-Петербург", 59.9272397, 30.3173643, 2],
  ["Ленинский проспект, Санкт-Петербург", 59.8551837, 30.2326273, 1]
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'img/marker.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(63, 73),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 73)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 60, 58, 60, 58, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}