//ajouter des paragraphes avec du texte (<p>) avec un bouton
//ajouter des titres (<H1>) avec un bouton
//Dans un paragraphe dédié:
//afficher les propriétés du document
//compter le nombre de paragraphe et afficher ce nombre
//afficher les propriétés d’un des éléments
//sélectionné via l’identifiant
//afficher les propriétés de tous les éléments de type “p”
//afficher les propriétés de tous les éléments du document

let boutonAddPara = document.getElementById('boutonAddPara');
let paragrapheText = document.getElementById('paragraphe');
boutonAddPara.addEventListener('click',addElement('monDiv','p',textArea));
