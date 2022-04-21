let divListeOperation = document.getElementById("affichageOperations");

let virementLoyer= new VirementBancaire(400,
                                        '10/04/2022',
                                        'mme Pompadour',
                                        'FR58505444',
                                        'SU5685555');
virementLoyer.afficherConsole();
virementLoyer.executer();
virementLoyer.montant = 500;
virementLoyer.afficherConsole();
divListeOperation.innerHTML = virementLoyer.afficher();
let listeVirements = new Array();
listeVirements.push(virementLoyer);
listeVirements.push(virementLoyer);
listeVirements.push(virementLoyer);
console.log(listeVirements);


