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

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create multiple ball objects with different colors and speeds
  balls.push(new Ball(windowWidth / 2, windowHeight / 2, 100, 5, 20, 0.4, 'red'));
  balls.push(new Ball(windowWidth / 3, windowHeight / 3, 50, -10, 15, 0.2, 'green'));
  balls.push(new Ball(windowWidth / 4, windowHeight / 4, 80, 8, -25, 0.3, 'blue'));
}

function draw() {
  background(220);

  // move and draw all the balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
  }
}