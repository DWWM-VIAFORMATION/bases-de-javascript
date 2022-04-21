$('#main').on('click', 'p', function(){
    alert('Les paragraphes créés peuvent être cliqués !');
});/*
$('button').on({
    click : function(){
        alert('Vous avez cliqué !');
    },
    mouseup : function(){
        alert('Vous avez relâché le clic !');
    }
});*/

$(document).keydown(function(e){
    switch (e.which){
    case 37:    // flèche gauche
        $(".myDiv").finish().animate({
            left: "-=10"
        });
        break;
    case 38:    // flèche haut
        $(".myDiv").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    // flèche droite
        $(".myDiv").finish().animate({
            left: "+=10"
        });
        break;
    case 40:    // flèche du bas
        $(".myDiv").finish().animate({
            top: "+=10"
        });
        break;
    }
});