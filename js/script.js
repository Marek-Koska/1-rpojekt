"use strict";

function initMap() {
  const myLatLng = {
    lat: 48.3287,
    lng: 19.6691
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: true
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!"
  });
}