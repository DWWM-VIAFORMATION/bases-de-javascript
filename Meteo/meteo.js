class Meteo
{
    ville;
    temperature;
    pression;
    txHumidite;
    temperatureMin;
    temperatureMax;
    constructor(meteoParsed)
    {
       // let meteoParsed = JSON.parse(meteoJSON);
        this.temperature = meteoParsed.main.temp;
        this.pression = meteoParsed.main.pressure;
        this.txHumidite = meteoParsed.main.humidity;
        this.temperatureMin = meteoParsed.main.temp_min;
        this.temperatureMax = meteoParsed.main.temp_max;
        this.ville = meteoParsed.name;
    }
    afficherMeteo()
    {
        return `${this.ville} il fait en ce moment ${this.temperature}.<br>`+
        `le taux d'humidité est de ${this.txHumidite}% et la pression de ${this.pression}hpa.<br>`
        +`il fera entre ${this.temperatureMin} et ${this.temperatureMax}°C.`
    }
}
/*function rechercheMeteoVille()
{
    console.log('rechercheMeteoVille: recherche en cours de lancement...')
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='
    +inputVille.value+'&appid=acdfe34a25e03482ba64564fc28d5691'+"&units=metric"
    );
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4)
        {
            jsonResult.innerHTML = xhr.responseText;
            let meteo = new Meteo(JSON.parse(xhr.responseText));
            console.log('resultat:'+meteo.afficherMeteo());
            resultatMeteo.innerHTML = meteo.afficherMeteo();
        }
    
	}
    xhr.send();
}*/
function rechercheMeteoVilleJQuery()
{
    console.log("appel:rechercheMeteoVilleJQuery");
    let data = {
                    'q':$('#inputVille').val(),
                    'appid':'acdfe34a25e03482ba64564fc28d5691',
                    'units':'metric'
                };
    //let data = "q=vierzon&appid=acdfe34a25e03482ba64564fc28d5691&units=metric";
    console.log(data);
    $.getJSON('https://api.openweathermap.org/data/2.5/weather',data,
    function( data , statusText, resultatRequete )
        {
            console.log('debug debut');
            console.log(data);
            console.log(statusText);
            console.log(resultatRequete);
            console.log(resultatRequete.responseJSON);
            console.log('debug fin');
            jsonResult.innerHTML = resultatRequete.responseJSON;
            let meteo = new Meteo(resultatRequete.responseJSON);
            console.log('resultat:'+meteo.afficherMeteo());
            console.log('temp:'+meteo.temperatureMax);
            resultatMeteo.html(meteo.afficherMeteo());
        });
}
// récupération du bouton et abonnement au click
// let submitForm = document.getElementById('button');
let submitForm =$('#button');

//submitForm.addEventListener('click',rechercheMeteoVille);
submitForm.click(rechercheMeteoVilleJQuery)

// récupération des informations
// récupération de la ville
let inputVille = $('#inputVille');
//ciblage = $ du div JSON
let jsonResult =$('#json');
// ciblage du div Résultat Meteo
let resultatMeteo = $('#resultat');
