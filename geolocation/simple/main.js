/*function coordonnees(pos) {
    let crd = pos.coords;
  
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' +
     latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' +
     longitude.toFixed(2);
}

navigator.geolocation.getCurrentPosition(coordonnees);*/
navigator.geolocation.getCurrentPosition(
    function (pos)
    {
        let crd = pos.coords;
        let latitude = crd.latitude;
        let longitude = crd.longitude;
        
        document.getElementById('p1').innerHTML= 'Latitude : ' +
         latitude.toFixed(2);
        document.getElementById('p2').innerHTML= 'Longitude : ' +
         longitude.toFixed(2);
    }

);
let p3 = document.getElementById('p3');

p3.innerHTML ='Dimensions totales de l\'écran : ' + screen.width + ' x ' 
    + screen.height +
    '<br>Surface disponible : ' + screen.availWidth + ' x ' 
    + screen.availHeight +
    '<br>Palette de couleur : ' + screen.colorDepth +
    '<br>Résolution : ' + screen.pixelDepth;
/*
let p3 = $('#p3').html(
    'Dimensions totales de l\'écran : ' + screen.width + ' x ' 
    + screen.height +
    '<br>Surface disponible : ' + screen.availWidth + ' x ' 
    + screen.availHeight +
    '<br>Palette de couleur : ' + screen.colorDepth +
    '<br>Résolution : ' + screen.pixelDepth
)*/