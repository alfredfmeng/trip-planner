//console.log('Hello from JavaScript')

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxmcmVkZm1lbmciLCJhIjoiY2tmd3A0YWFhMWlhcDJ6czN6Yzl3N2dheCJ9.ChwqYN2fB6bg1_ACOKWICw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});