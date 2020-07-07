

class Paddle {


   constructor(x) {
       this.x = x;
       this.y = height / 2;
       this.height = 80;
       this.width = 20;
   }


   display() {
       fill(255);
       rect(this.x, this.y, 20, 80);
   }

   // add these little buggers
   up() {
       this.y -= 2;
   }

   down() {
       this.y += 2;
   }

}
