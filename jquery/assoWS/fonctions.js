function chargerDonnee(pTexteCherche,pNbRepPerPage,pNbPageCourante)
{
    let url = `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${pTexteCherche}?page=${pNbPageCourante}&per_page=${pNbRepPerPage}`;
    let data='';
    $.getJSON(url,data,
        function (reponse,result,xHr)
        {
            console.log(reponse);
            afficherPagination(new Pagination(reponse.page,1,reponse.total_pages,reponse.per_page))
            cleanAssociations();
            reponse.association.forEach(
                function (assoCourant)
                {
                    console.log(assoCourant.id_association);
                    console.log(assoCourant.adresse_libelle_commune);
                    console.log(assoCourant.titre);
                    console.log(assoCourant.titre_court);
                    afficherAssociation(new Association(assoCourant));
                   
                }
            );
    
        }

    );
}