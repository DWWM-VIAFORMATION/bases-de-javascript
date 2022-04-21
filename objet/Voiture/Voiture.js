class Voiture
 {
     x;
     y;
     vitesse;
     direction;
     constructor (pX,pY,pVitesse,pDirection)
     {
         this.x = pX;
         this.y = pY;
         this.direction = pDirection;
         this.vitesse = pVitesse;
     }
     avancer()
     {

     }
     reculer()
     {

     }
     gauche()
     {

     }
     droite()
     {

     }
     afficher()
     {
         console.log(`x:${this.x},y:${this.y},
         v:${this.vitesse},d:${this.direction}`);
     }
 }