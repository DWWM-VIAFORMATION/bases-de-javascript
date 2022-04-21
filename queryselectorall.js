function setDarkMode()
{
    let listeParagraphes = document.querySelectorAll('p');
    document.title ='Bienvenue dans le coté obscur';
    for(paragraphe of listeParagraphes)
    {
        paragraphe.style.color='yellow';
        paragraphe.style.backgroundColor='black';
    }
}
function setLightMode()
{
    let listeParagraphes = document.querySelectorAll('p');
    
    document.title ='Bienvenue dans le coté lumineux';
    for(paragraphe of listeParagraphes)
    {
        paragraphe.style.color='black';
        paragraphe.style.backgroundColor='white';
    }
}
function addParagraphe()
{
    /** // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv); */
  //let monDiv = document.getElementById('monDiv');
  // creer le paragraphe
  //let newParagraphe = document.createElement('p');
  // creer le contenu du paragraphe (lorem ipsum)
  //let newContenuParagraphe = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue est.');
  // lier le contenu au paragraphe
  //newParagraphe.appendChild(newContenuParagraphe);
  // lier le paragraphe à monDiv
  //monDiv.appendChild(newParagraphe);
  addElement('monDiv','p','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue est.')
}

function addTitle()
{
    /*let monDiv = document.getElementById('monDiv');
    let newTitle = document.createElement('h1');
    let newContenuTitle = document.createTextNode('un titre au pif');
    newTitle.appendChild(newContenuTitle);
    monDiv.appendChild(newTitle);*/
    addElement('monDiv','h1','un titre au pif, comme le h de hawaï');
}

function addElement(targetParent,typeElement,contentText)
{
    let monDiv = document.getElementById(targetParent);
    console.log('il y a actuellement '+monDiv.getElementsByTagName('p').length+' paragraphes');
    let newElement = document.createElement(typeElement);
    let newContent = document.createTextNode(contentText);
    newElement.appendChild(newContent);
    monDiv.appendChild(newElement);
    console.log('après ajout, il y a actuellement '+monDiv.getElementsByTagName('p').length+' paragraphes');
}
function showOrHide()
{
    // parcourir tous les paragraphes
    let listeParagraphes = document.querySelectorAll('p');
    for(paragraphe of listeParagraphes)
    {
        /*if (paragraphe.style.display == 'none')
        { 
            paragraphe.style.display = 'block'
        }
        else
        {
            paragraphe.style.display = 'none';
        }*/
        paragraphe.style.display = (paragraphe.style.display == 'none')?'block':'none';
        
    }
    //mettre display none pour cacher

}