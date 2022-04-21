let aboutDocument = document.getElementById('aboutDocument');
// ajouter dans about documents les propriétés de Document
aboutDocument.innerHTML =  document.location 
+ "et le titre est:"+document.title;
document.title = "Trop COOOOL!";


/*let b1 = document.getElementById('b1');
b1.addEventListener('click',ajouterElement('p'));

let b2 = document.getElementById('b2');
b2.addEventListener('click',ajouterH1('h1'));*/

function ajouterParagraphe()
{
    // viser l'endroit ou on veut le mettre
    let sectionNewParagraphe = document.querySelector('section');
    // creer un element P
    let newParagraphe = document.createElement('p');
    // ajouter un texte loremipsum dans l'element
    newParagraphe.textContent = 'lorem ipsum tralalum poure die.'
    // ajouter dans l'arbre
    sectionNewParagraphe.appendChild(newParagraphe);
    afficherNombre();
}


function ajouterH1()
{
    // viser l'endroit ou on veut le mettre
    let sectionNewH1 = document.querySelector('section');
    // creer un element P
    let newTitreH1 = document.createElement('h1');
    // ajouter un texte loremipsum dans l'element
    newTitreH1.textContent = 'Un titre qui est intéressant'
    // ajouter dans l'arbre
    sectionNewH1.appendChild(newTitreH1);
    afficherNombre();
}
function ajouterElement(pElement,contenuTexte)
{
    // on vise
    let section = document.querySelector('section');
    // on crée l'element de type pElement
    let newElement = document.createElement(pElement);
    newElement.textContent = contenuTexte;
    newElement.style.color = "green";
    // ajouter dans l'arbre
    section.appendChild(newElement);
    afficherNombre()
}
function afficherNombre()
{
    let nombreParagraphe = document.querySelectorAll('p').length;
    let documentInfo = document.getElementById('aboutDocument');
    documentInfo.innerHTML +='<br> Il y a '
    +nombreParagraphe+' paragraphes';
    
}
function afficherProprieteElements()
{
    let documentInfo = document.getElementById('aboutDocument');
    let listeParagraphes = document.querySelectorAll('p');
    for( paragraphe of listeParagraphes)
    {
        documentInfo.innerHTML +='le paragraphe est en..'
        +paragraphe.style.color+'.';
    }
}
