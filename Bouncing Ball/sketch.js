
let xDir, yDir; // direction of the ball
let size; // size of the ball
let Ysize = 100 // Y size of the ball
let Xsize = 100 // X size of the ball
let speedX = 5; // speed of the ball
let speedY = 20; // speed of the ball
let sc
let g = 0.4; // gravity



function setup() {
  createCanvas(windowWidth, windowHeight);


  // random directions
  xDir = random(-5, 5);
  yDir = random(-5, 5);

  // random size
  size = random(50, 100);

  // starting point is somewhere in the
  // canvas not touching a border
  x = random(size, width - size);
  y = random(size, height - size);
  noStroke();
  fill(160, 20, 220);
}

function draw() {
  // motion blur
  background(137, 207, 240, 150);
  // ball
  stroke(255);
  ellipse(x, y, Xsize, Ysize );

  // if the ball touches the left or right side
  if (x >= width - Xsize / 1.4 || x <= Xsize / 1.4) {
    // change direction
    xDir = xDir * -1;
  }

  // if the ball touches the ceiling or floor change direction
  if (y >= height - Ysize / 1.5|| y <= Ysize / 1.5) {
    yDir = yDir * -1;

  }

  // ball touches the ceiling or floor change the height
  if (y >= height - Ysize / 1.5 || y <= Ysize / 1.5) {
    Ysize = Ysize - 100;}
    else {
        Ysize = 50;
    }


    // ball is not touching wall raise Ysize up 50 pixels
  if (x <= width - Xsize / 2 || x >= Xsize / 2 || y <= height - Ysize / 2 || y >= Ysize / 2) {
    Ysize = Ysize + 50;}

    //if ball touches bottom wall change frame rate to 30
    if (y >= height - Ysize / 1 || y <= Ysize / 1 ) {
      frameRate(15);}
      else {
          frameRate(24);
      }

// write the words boop randomly on the screen when ball hits the wall
if (x >= width - size / 1.3 || x <= size / 1.3) {
  text("BOOP", random(width), random(height));
}
if (y >= height - size / 1.3 || y <= size / 1.3) {
  text("BOOP", random(width), random(height));
}

 // //change color of ball when hits the wall
  if (x >= width - size / 1.3 || x <= size / 1.3) {
    fill(random(255), random(255), random(255));
  }
  if (y >= height - size / 1.3 || y <= size / 1.3) {
    fill(random(255), random(255), random(255));
  }

  // update the position of the ball for the next loop
  x = x + xDir * speedX;
  y = y + yDir * speedY;

  //make the ball faster when clicked
  if (mouseIsPressed) {
    speedX = speedX + random(0.1, 0.3);
    speedY = speedY + random(0.1, 0.3);
  } else {
      speedX = 2;
      speedY = 3;
    }

// add gravity to the ball
  yDir = yDir + g;

 //have the text increase in size when ball hits the bottom wall
  if (y >= height - size / 1 || y <= size / 1) {
    textSize(size);
  }else {
      textSize(50);
    }
    if (x >= width - size / 1 || x <= size / 1) {
      textSize(size);
      textSize(20);
    }

  //ball gets too big reset size
  if (size >= 300) {
    size = 50;
  }

}