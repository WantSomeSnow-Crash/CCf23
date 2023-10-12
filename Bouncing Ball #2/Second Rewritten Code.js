let balls = [];
let bgColorSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a slider for the background color
  bgColorSlider = createSlider(0, 255, 0);
  bgColorSlider.position(20, 20);

  // create 5 balls with random positions, speeds, colors, and sizes
  for (let i = 0; i < 10; i++) {
    let ball = new Ball(random(width), random(height), random(-5, 5), random(-5, 5), random(10, 50), color(random(255), random(255), random(255)));
    balls.push(ball);
  }
}

function draw() {
  // set the background color based on the slider value
  let bgColor = color(bgColorSlider.value(), 200 ,150, 255 + bgColorSlider.value());
  background(bgColor);

  // move and draw all the balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
  }
}

class Ball {
  constructor(x, y, speedX, speedY, size, color) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.color = color;
    this.g = 0.2;
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
    // set the fill color of the ball
    fill(this.color);

    // draw the ball
    ellipse(this.x, this.y, this.size, this.size);
  }
}