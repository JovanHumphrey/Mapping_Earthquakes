// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//--------------------------------------------------------------------------------------------------

//                  GET DATA:  FROM ARRAY
//
// Create an array containing each city's location, state, and population.
// let cities = [{
//    location: [40.7128, -74.0059],
//    city: "New York City",
//    state: "NY",
//    population: 8398748
//  },
//  {
//    location: [41.8781, -87.6298],
//    city: "Chicago",
//    state: "IL",
//    population: 2705994
//  },
//  {
//    location: [29.7604, -95.3698],
//    city: "Houston",
//    state: "TX",
//    population: 2325502
//  },
//  {
//    location: [34.0522, -118.2437],
//    city: "Los Angeles",
//    state: "CA",
//    population: 3990456
//  },
//  {
//    location: [33.4484, -112.0740],
//    city: "Phoenix",
//    state: "AZ",
//    population: 1660272
//  }
//  ];

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//  console.log(city)
//  L.marker(city.location).addTo(map); // This will loop through array on lines 9-40.
// });

//--------------------------------------------------------------------------------------------------

//                  GET DATA: FROM JS FILE
//
// Note: when doing this you'll need to add this line of code to the indes file before the path to the logic.js file.
// See line 29 in index.html.

// Get data from cities.js
let cityData = cities;

//--------------------------------------------------------------------------------------------------

//                  MARKER TAG: PLAIN
//
// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//  console.log(city)
//  L.marker(city.location).addTo(map); // This will loop through array in cities.js
// });

//--------------------------------------------------------------------------------------------------

//                  MARKER TAG: POPUP
//
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, { // This will add a circle marker to each city.
    radius: city.population/100000, // This will define the radius of each city to match it's population. Note: if you don't divide by 100000 the radii will be too large.
    color: "orange",
    lineweight: 4
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});

//--------------------------------------------------------------------------------------------------


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);