class Association
{
    id;
    raisonSociale;
    objet;
    ville;
    constructor(pJsonObject)
    {
        this.id = pJsonObject.id_association;
        if ((pJsonObject.titre_court!=null)
            &&(pJsonObject.titre_court.length>0))
             {this.raisonSociale = pJsonObject.titre_court;}
             else
             {this.raisonSociale = pJsonObject.titre;}
        this.objet = pJsonObject.objet;
        this.ville = pJsonObject.adresse_gestion_acheminement;
    }
}