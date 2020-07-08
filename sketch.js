let playerPaddle;
let aiPaddle;
let ball; // define the ball
let playerScore;
let aiScore;

function setup() {
  createCanvas(624, 351);
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 48);
    ball = new Ball(); // create the ball object
    playerScore = new Score(width / 2 - 40);
    aiScore = new Score(width / 2 + 40);
}


function draw() {
  background(0);

  playerPaddle.display();
  aiPaddle.display();

  playerPaddle.update(); // add this
  aiPaddle.update();     // and this

  processAI();   // andddd thiss

  ball.update();
  ball.display();

  ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    stroke(255); // gives a white stroke
    line(width/2, 0, width/2, height); // draws a line between two points line(x,y,x1,y1)
}

function processAI() {
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;

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
