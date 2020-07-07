let playerPaddle;
let aiPaddle;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
}



function draw() {
  background(0);
  playerPaddle.display();
  aiPaddle.display();


  // make that paddle fly!!!
  // make the player move according to the flag
  if (playerPaddle.isUp) {
    playerPaddle.up();
  } else if (playerPaddle.isDown) {
    playerPaddle.down();
  }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = true;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = true;
    }
}

function keyReleased() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}
