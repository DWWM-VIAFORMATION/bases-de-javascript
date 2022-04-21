/**DECLARATION DES FONCTIONS */
function geo_success(position) {
    do_something(position.coords.latitude, position.coords.longitude);
  }
  
  function geo_error() {
    alert("Sorry, no position available.");
  }
  
  var geo_options = {
    enableHighAccuracy: true,
    maximumAge        : 30000,
    timeout           : 27000
  };
  function do_something(latitude, longitude)
  {
      alert('lat:'+latitude+'long'+longitude);
  }
/** Code qui s'exécute directement */
  var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
  document.getElementById('p1').innerHTML = "lancé!";
