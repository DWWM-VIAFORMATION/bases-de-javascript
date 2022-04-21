$(document).ready(function(){

    let pseudo = $('#pseudo');
    let  mdp = $('#mdp');
    let confirmation = $('#confirmation');
    let envoi = $('#envoi');
    let reset = $('#rafraichir');
    let erreur = $('#erreur');
    let champs = $('.champ');
    function verifierLongueur(){
        console.log('verification formulaire:'+$(this));
        if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
            $(this).css({ // on rend le champ rouge
                borderColor : 'red',
                'background-color':'red',
	        color : 'white'
            });
         }
         else{
             $(this).css({ // si tout est bon, on le rend vert
	         borderColor : 'green',
	         color : 'white',
             'background-color':'green'
	     });
         }
    }
    champs.keyup(verifierLongueur);

    confirmation.keyup(function(){
        // attention ceci est une fonction anonyme
        if($(this).val() != mdp.val()){ // si la confirmation est différente du mot de passe
            $(this).css({ // on rend le champ rouge
     	        borderColor : 'red',
        	color : 'red'
            });
        }
        else{
	    $(this).css({ // si tout est bon, on le rend vert
	        borderColor : 'green',
	        color : 'green'
	    });
        }
    });

    /*envoi.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
        erreur.css('display', 'none');
        // puis on lance la fonction de vérification sur tous les champs :
        verifier(pseudo);
        verifier(mdp);
        verifier(confirmation);
        verifier(mail);
    });*/

    reset.click(function(){
        champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor : '#ccc',
    	    color : '#555'
        });
        erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
    });

    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
    	    erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
    	        borderColor : 'red',
    	        color : 'red'
    	    });
        }
    }

});
