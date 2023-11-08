let balls = [];
let numBalls = 10;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball(random(width), random(height), 30, color(random(255), random(255), random(255))));
  }
}

function draw() {


  for (let i = 0; i < balls.length; i++) {
    balls[i].move(speed);
    balls[i].bounce();
    balls[i].display();
  }
}

class Ball {
  constructor(x, y, size, color) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.velocity.setMag(speed);
    this.size = size;
    this.color = color;
  }

  move(speed) {
    this.position.add(this.velocity);
  }

  bounce() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
