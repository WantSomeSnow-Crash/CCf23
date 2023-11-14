let ball, leftPaddle, rightPaddle;
let ballSpeed = 5;
let ballXSpeed = ballSpeed;
let ballYSpeed = ballSpeed;
let leftScore = 0;
let rightScore = 0;
let predictions = [];
//let voiceCommand = '';
let backgroundColor = 0;
let rightPaddleSpeed = 1;
let rightPaddleMoveDelay = 0;
let rightPaddleMoveCount = 0;



function setup() {
  createCanvas(500, 300);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  //hide video
  video.hide();

  //  an array every time new hand poses are detected
  handpose.on("predict", results => {
    predictions = results;
  });

  ball = createVector(width / 2, height / 2);
  leftPaddle = createVector(20, height / 2);
  rightPaddle = createVector(width - 20, height / 2);
}


//begin loading speech recognition (Doesn't work but breaks code when removed)
speechRec = new p5.speechRec();
speechRec.continuous = true;
speechRec.interimResults = false;
speechRec.onResult = gotSpeech;
function modelReady() {
  console.log("Model ready!");

  //Start speech recognition
  speechRec.start();

}

function draw() {
  background(backgroundColor);


  // Update the position of the ball
  ball.x += ballXSpeed;
  ball.y += ballYSpeed;

  // Check for collisions with the walls
  if (ball.y < 0 || ball.y > height) {
    ballYSpeed *= -1;
  }

  // Check for collisions with the left paddle
  if (
    ball.x < leftPaddle.x + 10 &&
    ball.y > leftPaddle.y - 50 &&
    ball.y < leftPaddle.y + 50
  ) {
    ballXSpeed *= -1;
  }

  // Check for collisions with the right paddle
  if (
    ball.x > rightPaddle.x - 10 &&
    ball.y > rightPaddle.y - 50 &&
    ball.y < rightPaddle.y + 50
  ) {
    ballXSpeed *= -1;
  }

  // ball
  fill ('red');
  ellipse(ball.x, ball.y, 20, 20);

  //  left paddle
  fill('blue')
  rect(leftPaddle.x, leftPaddle.y - 50, 10, 100);

  //  right paddle
  fill('green')
  rect(rightPaddle.x - 10, rightPaddle.y - 50, 10, 100);

  // Update the position of the left paddle based on the position of the hand
  if (predictions.length > 0) {
    let hand = predictions[0].landmarks[0];
    leftPaddle.y = hand[1];
  }

  //move the left paddle

  // Move the right paddle
  if (rightPaddleMoveCount >= rightPaddleMoveDelay) {
    if (rightPaddle.y < ball.y) {
      rightPaddle.y += rightPaddleSpeed;
    } else if (rightPaddle.y > ball.y) {
      rightPaddle.y -= rightPaddleSpeed;
    }
    rightPaddleMoveCount = 0; // Reset the frame count
  } else {
    rightPaddleMoveDelay--; // Increment the frame count
  }

 // Check for a score
 if (ball.x < 0) {
  rightScore++;
  backgroundColor = random(255);
  resetBall();
  console.log("Right player scores!");
} else if (ball.x > width) {
  leftScore++;
  resetBall();
  console.log("Left player scores!");
}

// Check if the ball hits the left or right border
if (ball.x < 0 || ball.x > width) {
  resetBall();
  console.log("Ball hit the border!");
}

// Draw the score
textSize(32);
textAlign(CENTER);
fill('violet'); // Set the color to white
text(leftScore + " - " + rightScore, width / 2, 50);
}

function resetBall() {
ball = createVector(width / 2, height / 2);
ballXSpeed = -ballXSpeed;
ballYSpeed = ballSpeed;
}

