
let xDir, yDir , Ysize, Xsize // Size and direction of the ball

function setup () {
  createCanvas(windowWidth, windowHeight);

//random direction
xDir = random(-5, 5);
yDir = random(-5, 5);

//random size
Ysize = random(10, 100);
Xsize = random(10, 100);

x = random(size, width - size);
y = random(size, height - size);
noStroke();
}

function draw () {
  //motion blur
  background (0, 10);

  //ball
  fill(255);
  ellipse(x, y, Ysize, Xsize);
}



