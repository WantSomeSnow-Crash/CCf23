let isShooting = false;
let balls = [];
let numBalls = 3;
let roundNumber = 1; // Track the current round number
let paddleX;
let paddleY;
let paddleSpeed = 0.9;
let ballSpeedIncrement = 0; // Controls the increment for ball speed
let horizontalSpeedIncrement = 0.02; // Controls the increment for horizontal movement
let verticalSpeedIncrement = 0.2; // Controls the increment for vertical movement
let gameStartTime;
let gameDuration = 15000; // Time limit in milliseconds (15 seconds)
let countdownTime; // Remaining time in milliseconds

//initialize speech recognition
let mySpeechRec = new p5.SpeechRec('en-US', parseResult);
mySpeechRec.continuous = true;
mySpeechRec.interimResults = true;
mySpeechRec.onResult = parseResult;
mySpeechRec.start();


function setup() {
  createCanvas(600, 400);
  paddleX = width / 2;
  paddleY = height - 20;
  targetPaddleX = paddleX;
  targetPaddleY = paddleY;
  gameStartTime = millis(); // Record the start time of the game
  countdownTime = gameDuration; // Start the countdown time
  let ballSpacing = 30;
  let ballYOffset = 5;
  createBalls(numBalls, ballSpacing, ballSpeedIncrement, ballYOffset); // Create initial balls
}

function createBalls(numBalls, ballSpacing, _ballSpeedIncrement, ballYOffset) {
  for (let i = 0; i < numBalls; i++) {
    balls.push({
      x: ballSpacing * i + 90,
      y: ballYOffset,
      radius: 15,
      xspeed: 2,
      yspeed: 2
    });
  }
}

function draw() {
  background(0);
  rectMode(CENTER);
  fill(255);
  rect(paddleX, paddleY, 70, 10);
  paddleX = lerp(paddleX, targetPaddleX, paddleSpeed);
  paddleY = lerp(paddleY, targetPaddleY, paddleSpeed);
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ellipseMode(CENTER);
    fill(255);
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
    ball.x += ball.xspeed;
    ball.y += ball.yspeed;
    if (isShooting && dist(pelletX, pelletY, ball.x, ball.y) < ball.radius) {
      balls.splice(i, 1);
      i--;
      isShooting = false;
    }
    if (ball.x > width - ball.radius || ball.x < ball.radius) {
      ball.xspeed *= -1;
    }
    if (ball.y > height - ball.radius || ball.y < ball.radius) {
      ball.yspeed *= -1;
    }
    // Move the balls down and to the right
    ball.xspeed += horizontalSpeedIncrement;
    ball.yspeed += verticalSpeedIncrement;
  }
  if (isShooting) {
    fill(255, 0, 0);
    ellipse(pelletX, pelletY, 10, 10);
    pelletY -= 5;
    if (pelletY < 0) {
      isShooting = false;
    }
  }
  if (balls.length === 0) {
    newRound();
  }
  // Check if the game time has exceeded the time limit
  if (millis() - gameStartTime >= gameDuration) {
    endGame();
  } else {
    // Update the countdown time
    countdownTime = gameDuration - (millis() - gameStartTime);
    displayCountdown();
  }
}

function displayCountdown() {
  let seconds = Math.ceil(countdownTime / 1000);
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Time: " + seconds + "s", width / 2, 30);
}

function endGame() {
  // Game over screen
  background('red');
  textAlign(CENTER);
  textSize(32);
  text("Game over!", width / 2, height / 2);
  console.log("Game over!");
}

function newRound() {
  let newBallsPerRound = 5;

  //Incerease number of balls
  numBalls += newBallsPerRound;
  // Increase the game duration by the remaining time from before
  gameDuration += countdownTime;

  // Reset the game start time and countdown time
  gameStartTime = millis();
  countdownTime = gameDuration;

  // Increases the difficulty,
  console.log("Round " + roundNumber);
  createBalls(numBalls + 5  + roundNumber, 30, ballSpeedIncrement, 5);
}

function keyPressed() { // Allows arrow keys
  if (keyCode === LEFT_ARROW) {
    targetPaddleX -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    targetPaddleX += 20;
  } else if (keyCode === UP_ARROW) {
    targetPaddleY -= 20;
  } else if (keyCode === DOWN_ARROW) {
    targetPaddleY += 20;
  } else if (keyCode === 32) {
    isShooting = true;
    pelletX = paddleX;
    pelletY = paddleY;
  }
}

function parseResult() {
  let lowerStr = mySpeechRec.resultString.toLowerCase(); // all lowercase
  let mostRecentWord = lowerStr.split(" ").pop();
  console.log(mostRecentWord);

  if (mostRecentWord === "left") {
    targetPaddleX -= 50;
  } else if (mostRecentWord === "right") {
    targetPaddleX += 50;
  } else if (mostRecentWord === "up") {
    targetPaddleY -= 25;
  } else if (mostRecentWord === "down") {
    targetPaddleY += 25;
  } else if (mostRecentWord === "shoot") {
    isShooting = true;
    pelletX = paddleX;
    pelletY = paddleY;
  } else if (mostRecentWord === "reset") {
    location.reload();
  }
}

function restartRec() {
  mySpeechRec.start();
}