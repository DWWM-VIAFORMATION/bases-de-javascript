let duree = 6700;
let heure = Math.floor(duree / 3600);
let minute = Math.floor((duree%3600)/60);
let seconde = duree%60;
console.log(`${duree} = ${heure}h:${minute}m:${seconde}s:`);