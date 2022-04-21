class Personne
{
    prenom;
    age;
    ville;
    constructor(pPrenom, pAge, pVille)
    {
        this.prenom = pPrenom;
        this.age = pAge;
        this.ville = pVille;
    }
}
let formateur = new Personne('thierry',44,'Châteauroux');
let formateurEnJson = JSON.stringify(formateur);
console.log(formateurEnJson)
let formateurParsed = JSON.parse(formateurEnJson);
console.log(formateurParsed.prenom);
let meteoParsed = JSON.parse('{"coord":{"lon":2.3488,"lat":48.8534},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":292.51,"feels_like":292.04,"temp_min":291.92,"temp_max":293.47,"pressure":1022,"humidity":59},"visibility":10000,"wind":{"speed":2.06,"deg":350},"clouds":{"all":20},"dt":1649936574,"sys":{"type":2,"id":2012208,"country":"FR","sunrise":1649912511,"sunset":1649961573},"timezone":7200,"id":2988507,"name":"Paris","cod":200}');
console.log(meteoParsed);
console.log(meteoParsed.coord.lat);
console.log(meteoParsed.main.temp);