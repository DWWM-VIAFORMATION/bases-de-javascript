
function afficherAssociation(pAssociation) {
    console.log('maj tableau');
    let tableau = $('#tabResultats');
    let ligne = document.createElement('div');
    let raisonSociale = document.createElement('div');
    let ville = document.createElement('div');
    let objet = document.createElement('div');
    ligne.setAttribute('class', 'ligne');
    raisonSociale.setAttribute('class', 'case');
    ville.setAttribute('class', 'case');
    objet.setAttribute('class', 'case');
    ville.innerHTML = pAssociation.ville;
    objet.innerHTML = pAssociation.objet;
    raisonSociale = pAssociation.raisonSociale;
    ligne.append(raisonSociale);
    ligne.append(ville);
    tableau.append(ligne);
    tableau.append(objet);
}
function cleanAssociations() {
    let tableau = $('#tabResultats');
    tableau.empty();
}
function afficherPagination(pPagination) {
    var pagination = pPagination;
    var recherche = $('#txtRequete').val();
    console.log(pPagination);
    console.log("la recherche"+recherche);
/*$('#first').click(null);
    $('#prec').click(null);
    $('#next').click(null);
    $('#last').click(null);  */

    $('#first').click(
        function () {
            console.log(pagination);
            console.log(recherche);
            chargerDonnee(recherche, pagination.parPage, pagination.premierePage);
        });
    $('#prec').click(
        function () {
            console.log(pagination);
            chargerDonnee(recherche, pagination.parPage, pagination.getPagePrecedente());
        });
    $('#next').click(
        function () {
            console.log(pagination);
            chargerDonnee(recherche, pagination.parPage, pagination.getPageSuivante());
        });
    $('#last').click(
       function (e) {
        e.preventDefault();
            console.log(pagination);
            console.log(recherche);
           chargerDonnee(recherche, pagination.parPage, pagination.dernierePage);
        });      
}

$(function () {
    chargerDonnee('France', 20, 1);
});
$('#btnRechercher').click(
    function () {
        chargerDonnee($('#txtRequete').val(), 20, 1);

    }
)

