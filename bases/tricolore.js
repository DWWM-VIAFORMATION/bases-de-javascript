/**
 * FONCTIONS
 */

function reset(elementAVider)
{
    //
    while(elementAVider.hasChildNodes())
    {
        elementAVider.removeChild(elementAVider.firstChild)
    }
    return elementAVider;
}
function onClickGenerate()
{
    let divParent = document.getElementById("divParent");
    listeCouleur=['bleu','blanc','rouge'];
    divParent=reset(divParent);
    let nombreInteration = document.getElementById("nb").value;
    let idCouleur = 0;
    for(let i=0;i<nombreInteration;i++)
    {
        let nouvelElement = document.createElement('div');
        nouvelElement.innerHTML= i;
        nouvelElement.setAttribute('class',listeCouleur[idCouleur]);
        idCouleur++;
        if (idCouleur>2)
            idCouleur=0;
      //  (i%2==0)?nouvelElement.setAttribute('class','bleu'):nouvelElement.setAttribute('class','rouge');
      divParent.appendChild(nouvelElement);
    }
}
/**
 * CODE PRINCIPAL
 */
let btnGenerer = document.getElementById('btnGenerer');
btnGenerer.addEventListener('click',onClickGenerate);


