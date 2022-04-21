class Personne
{
    prenom;
    age;
    ville;
    constructor(pPrenom,pAge,pVille)
    {
        this.prenom = pPrenom;
        this.age = pAge;
        this.ville = pVille;
    }
    afficher()
    {
        return 'la personne s appelle '+this.prenom
        +' et habite '+this.ville;
    }
}



let  prenom = 'Thierry';
let age = 43;
let ville = 'Châteauroux'

let p1 = document.getElementById("p1");
p1.innerHTML = prenom+' a '+ age+' ans et habite '+ville;

let formateur = new Personne('Thierry',43,'Chateauroux');
let stagiaire = new Personne('Antoine',25,'Olivet')
stagiaire.ville= 'Paris' ;
let p2 = document.getElementById("p2");
p2.innerHTML = formateur.afficher()
let p3 = document.getElementById("p3");
p3.innerHTML = stagiaire.afficher();