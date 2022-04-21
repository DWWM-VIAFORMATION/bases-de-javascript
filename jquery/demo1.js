//$(document).ready(function(){alert("hello")})
//function direBonjour(){alert("hello")}
//$(document).ready(direBonjour);
/*$(document).ready(function(){
    $('p').trigger('click');
})
let i =0;
$('p').each(function()
{
    $(this).html('hello world '+i);
    i++;
})
$(document).keyup(function(touche){
    // on écoute l'évènement keyup()
       var appui = touche.which || touche.keyCode; 
   // le code est compatible tous navigateurs grâce à ces deux propriétés
      
   alert(appui);
   if(appui == 84)
   { 
           alert('Vous venez d\'appuyer sur la touche Entrée !');    
   }
   });
   */
  $('p').click(function(){alert('click click')});
  $('a').click(function(lien){lien.preventDefault()})