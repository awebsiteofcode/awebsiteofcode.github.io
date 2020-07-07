
   
    let playerPaddle;

      function setup() {
        createCanvas(624, 351);
        playerPaddle = new Paddle(26);
      }

      function draw() {
        background(0);
        playerPaddle.display();
      }
