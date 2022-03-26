// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//--------------------------------------------------------------------------------------------------

//                  POINT TO LAYER FUNCTION
//
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, { // use data from sanFranAirport.
    // We turn each feature into a marker on the map.
//    pointToLayer: function(feature, latlng) { // callback function.
//        console.log(feature); // pass each GeoJSON feature as feature.
//        return L.marker(latlng) // and its latitude and longitude. Use return to add marker.
//        .bindPopup("<h2>" + feature.properties.city + "</h2>"); // add popup marker
//    }

// }).addTo(map);

//--------------------------------------------------------------------------------------------------

//                  ON EACH FEATURE FUNCTION
//
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, { // use data from sanFranAirport.
    onEachFeature: function(feature, layer) {  // callback function.
        console.log(layer); // pass each GeoJSON feature as feature and layer property to second argument.
        layer.bindPopup("<h2>" + feature.properties.city + "</h2>"); // add popup marker
        }
}).addTo(map);

//--------------------------------------------------------------------------------------------------
//
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);