<!DOCTYPE HTML>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Noah's website </title>
        <meta charset="utf-8">
          <meta name="description" content="Coding, Movie making, For kids and more...">
          <meta name="keywords" content="HTML, CSS, JavaScript">
          <meta name="author" content="Dark Wolf">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" type="image/png" href="favicon.ico">
          <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet">

    let playerPaddle;

      function setup() {
        createCanvas(624, 351);
        playerPaddle = new Paddle(26);
      }

      function draw() {
        background(0);
        playerPaddle.display();
      }
