function coordonnees(pos) {
    let crd = pos.coords;
  
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}

//navigator.geolocation.getCurrentPosition(coordonnees(pos));

navigator.geolocation.getCurrentPosition(
    function(position) // en cas de succès
        {
            console.log(position);
            coordonnees(position);
            
        },
        function(errorCallBack) // en cas d'échec
        {
            console.log(errorCallBack);
        })
document.getElementById('p1').innerHTML =" en attente..";
