function onClickBouton()
{
    let note = document.getElementById("noteSaisie").value;
    console.log('note:'+note);
    let couleur;
    switch (note)
    {
        case "A":couleur="bleu";
            break;
        case "B": couleur = "orange";
            break;
        case "C":couleur = "rouge";
        break;
        default: couleur = "";
    }
    
    let paragraphe = document.getElementById("note");
    paragraphe.innerHTML="la note: "+note;
    paragraphe.setAttribute("class",couleur);
}
