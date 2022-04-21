class Personne
{
    // les attributs de la classe
    prenom;
    nom;
    age;
    
    afficher()
    {
        console.log('prenom:'+this.prenom);
        console.log('nom:'+this.nom);
    }
    // constructeur
    constructor (pPrenom,pNom,pAge)
    {
        this.prenom = pPrenom;
        this.nom = pNom;
        this.age = pAge;
    }
}