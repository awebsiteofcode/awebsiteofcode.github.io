class Paddle {

    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 20;
    }


    display() {
  noStroke();
        fill(100,200,300);
        rect(this.x, this.y, 20, 80);
    }

    // add these little buggers
    up() {
        if (this.y > 0) {
            this.y -= 2;
        }
    }

    down() {
        if (this.y < height - this.height) {
            this.y += 2;
        }
    }
   update() {
        if (this.isUp) {
            this.up();
        }
        else if (this.isDown) {
            this.down();
        }
    }//end of update



}
