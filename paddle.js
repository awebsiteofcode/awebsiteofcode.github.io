
      }
class Paddle {

    constructor(x) {
        this.x = x;
        this.y = height / 2; // height is height of display window
        this.height = 80;
        this.width = 20;
    }


    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

}
