let x=2;
let exposantPow = 2;
let puissanceDeux = Math.pow(x,exposantPow) //2^2 ou 2²
console.log(x+'^'+exposantPow+"="+puissanceDeux);
let racineCarre = Math.sqrt(x);
console.log("racine carree de "+x+"="+racineCarre);
// on n'instancie pas (= non usage de "new" = pas d'appel au constructeur)
// pow est une méthode STATIC de la classe Math
// Math avec M majuscule, car une CLASSE

let resultat = document.getElementById('resultat');
let exposant= document.getElementById('exposant');
let btnCalculer = document.getElementById('btnCalculer');
btnCalculer.addEventListener('click',(touche)=>
{
    console.log(touche);
    // touche permet de récupérer des informations envoyées par l'evenement "click"
    for (i=0;i<=parseInt(exposant.value);i++)
    {
        let calcul=Math.pow(2,i);
        resultat.innerHTML+=`<li>${calcul}</li>`; 
    }
    
})