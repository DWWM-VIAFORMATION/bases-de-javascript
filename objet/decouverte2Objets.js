class VirementBancaire
{
    montant;
    date;
    nomBeneficiaire;
    ibanSource;
    ibanDestination;

    constructor (pMontant,pDate,pNomBeneficiaire,pIbanSource,pIbanDestination)
    {
        // affiche avant d'avoir rempli
        this.afficherConsole();
        this.montant = pMontant;
        this.date =pDate;
        this.nomBeneficiaire = pNomBeneficiaire;
        this.ibanSource = pIbanSource;
        this.ibanDestination = pIbanDestination;
        //affiche apres avoir rempli
        this.afficherConsole();
    }
    afficherConsole()
    {
        console.log(`virement:${this.montant} - le ${this.date} à ${this.nomBeneficiaire}`);
    }
    afficher()
    {
        return `virement:${this.montant} - le ${this.date} à ${this.nomBeneficiaire}`;
    }
    executer()
    {
        console.log('le virement a été exécuté');
    }

}