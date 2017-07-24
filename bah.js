function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {
      lat: 37.775592,
      lng: -122.410823
    }
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = ["Tea Zone", "Pekoe", "Gongcha", "T-pumps"];

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
var locations = [{
    lat: 37.261578,
    lng: -121.875538
  }, //Tea Zone
  {
    lat: 37.314634,
    lng: -121.790131
  }, //Pekoe
  {
    lat: 37.488570,
    lng: -121.929026
  }, //Gongcha
  {
    lat: 37.763651,
    lng: -122.478593
  }, //T-pumps
]
