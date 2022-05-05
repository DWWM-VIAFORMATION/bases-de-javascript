class Pagination
{
     pageCourante;
    premierePage;
    dernierePage;
    parPage;
    getPagePrecedente()
    {
        if (this.pageCourante>2)
        return this.pageCourante-1
        else
        return null;
    }
    getPageSuivante()
    {
        if (this.pageCourante>this.dernierePage-2)
        return this.pageCourante+1
        else
        return null;
    }
   
    constructor(pPageCourante,pPremierePage,pDernierePage,pParPage)
{
    this.pageCourante = pPageCourante;
    this.premierePage = pPremierePage;
    this.dernierePage = pDernierePage;
    this.parPage = pParPage;
}
}