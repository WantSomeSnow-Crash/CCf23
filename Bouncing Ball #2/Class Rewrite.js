class Ball {
  constructor(x, y, size, speedX, speedY, g, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.g = g;
    this.color = color;
  }

  move() {
    // check if the ball hits the left or right wall
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.speedX *= -1;
    }

    // check if the ball hits the top or bottom wall
    if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
      this.speedY *= -1;
    }

    // update the position and speed of the ball
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.g;
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}



let ballSizeSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a slider for the ball size
  ballSizeSlider = createSlider(10, 200, 100);
  ballSizeSlider.position(20, 20);

  // set the background color of the slider to red
  ballSizeSlider.style('background-color', 'red');
}

function draw() {
  background(220);

  // update the size of the balls based on the slider value
  for (let i = 0; i < balls.length; i++) {
    balls[i].size = ballSizeSlider.value();
  }

  // move and draw all the balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
  }
}

