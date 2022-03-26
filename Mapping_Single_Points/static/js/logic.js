// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level to LA, Cali.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//--------------------------------------------------------------------------------------------------

// Add Marker to the Map for LA, Cali.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//--------------------------------------------------------------------------------------------------

// Add Circle to the Map for LA, Cali.
// L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);

//--------------------------------------------------------------------------------------------------

// Can also do this for circle marker:
// L.circleMarker([34.0522, -118.2437]).addTo(map);

//--------------------------------------------------------------------------------------------------

// Add yellow circle w/black line to the Map for LA, Cali with dark map and 300 meter radius.
// note: to get dark map replace "streets-v11" in tileLayer code with "dark-v10"

 L.circleMarker([34.0522, -118.2437], { // alternatively if you use "circle" instead of "circleMarker" the circle will be smaller.
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);