
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
}
