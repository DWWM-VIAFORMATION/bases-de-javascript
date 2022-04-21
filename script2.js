let b1 = document.getElementById('b1');
b1.addEventListener('click', poserQuestion);


function poserQuestion()
{
    let reponseUtilisateur = window.confirm('Voulez-vous maitriser JavaScript?');
    let reponseHtml = document.getElementById('reponse');
    if (reponseUtilisateur == true)
    {
        reponseHtml.innerHTML = "J'ai confiance en toi";
    }
    else
    {
        reponseHtml.innerHTML = "Courage";
    }
    
}