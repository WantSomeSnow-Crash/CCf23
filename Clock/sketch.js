let player;
let enemies = [];
let bullets = [];
let gameOver = false;


function preload() {
  myFont = loadFont('PixelifySans-VariableFont_wght.ttf')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  // Create enemy ships
  for (let i = 0; i < 15; i++) {
    enemies.push(new Enemy(i * 80 + 80, 60));
  }
  // Listens for space to be pressed
  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      player.shoot();
    }
  });
}

function draw() {
  background('black');
  player.show();
  player.move();
  // Show and move all enemies array
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].move();
    // Check for collisions with each bullet
    for (let j = 0; j < bullets.length; j++) {
      if (bullets[j].collidesWith(enemies[i])) {
        // Remove the bullet and enemy from arrays
        bullets.splice(j, 1);
        enemies.splice(i, 1);
        // decrease the index for the removed enemy
        i--;
        // Exit inner loop since the bullet can only hit one enemy
        break;
      }
    }
  }



  // Show and move all bullets
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
  }
  // Check if enemies are destroyed
  if (enemies.length === 0) {
    gameOver = true;
    textAlign(CENTER);
    textSize(32);
    fill ('white');
    textFont(myFont);
    text("You Win!", width / 2, height / 2);
    // Change the current time to Morse code
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let morseHours = convertToMorse(hours);
    let morseMinutes = convertToMorse(minutes);
    let morseSeconds = convertToMorse(seconds);
    textSize(30);
    fill ('white');
    textFont(myFont);
    text("The Time is " + morseHours + ":" + morseMinutes + ":" + morseSeconds, width / 2, height / 2 + 30);
  }

  function convertToMorse(num) {
    let morseCode = '';
    const morseNumerals = {
      0: '-----',
      1: '.----',
      2: '..---',
      3: '...--',
      4: '....-',
      5: '.....',
      6: '-....',
      7: '--...',
      8: '---..',
      9: '----.'
    };
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
      let digit = numString.charAt(i);
      morseCode += morseNumerals[digit] + ' ';
    }
    return morseCode.trim();
  }
  // Check if the game is over
  if (gameOver) {
    noLoop();
  }
}

class Player {
  constructor() {
    this.width = 40;
    this.height = 40;
    this.x = width / 2;
    this.y = height - 50;
    this.speed = 10; // How fast the player's spaceship moves
  }
  shoot() {
    // Create a new bullet just above the player's spaceship
    bullets.push(new Bullet(this.x + this.width / 2, this.y - this.height / 2));
  }
  show() {
    // Draw a triangle to represent the player's spaceship
    fill(0,255,0)
    triangle(this.x + this.width / 2, this.y - this.height / 2,
             this.x, this.y + this.height / 2,
             this.x + this.width, this.y + this.height / 2);
  }
  move() {
    // Move the player's spaceship left or right
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    // Constrain the player's spaceship to the screen
    this.x = constrain(this.x, 0, width - this.width);
  }
}

class Bullet {
  constructor(x, y) {
    this.width = 4;
    this.height = 10;
    this.x = x - this.width / 2;
    this.y = y - this.height;
    this.speed = 9; // How fast the bullet moves
  }
  show() {
    // Draw a rectangle to represent the bullet
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
  move() {
    // Move the bullet up the screen
    this.y -= this.speed;
  }
  collidesWith(enemy) {
    // Check if the bullet collides with the given enemy
    if (this.x + this.width > enemy.x && this.x < enemy.x + enemy.width &&
        this.y + this.height > enemy.y && this.y < enemy.y + enemy.height) {
      return true;
    } else {
      return false;
    }
  }
}

class Enemy {
  constructor(x, y) {
    this.width = 40;
    this.height = 40;
    this.x = x;
    this.y = y;
    this.xspeed = 7; // how fast the enemy ship moves side to side
    this.yspeed = .7; // how fast the enemy ship moves down the screen
  }
  show() {
    // Draw a circle to represent the enemy ship
    fill('gray')
    ellipse(this.x + this.width / 2, this.y + this.height / 2,
            this.width, this.height);
  }
  move() {
    // Move the enemy ship back and forth
    this.y += this.yspeed;
    this.x += this.xspeed;
    if (this.y >= height - this.height) {
      background(255, 0, 0);
      textAlign(CENTER);
      textSize(32);
      textFont(myFont);
      text("Game Over. You Don't Deserve The Time", width / 2, height / 2); // Display the "Game Over" message)
      noLoop();
    }
    // Constrain the enemy ship to the screen
    this.y = constrain(this.y, 0, height - this.height);
    this.x = constrain(this.x, 0, width - this.width);
    // Reverse the enemy ship's direction if it hits the edge of the screen
    if (this.x === 0 || this.x === width - this.width) {
      this.xspeed = -this.xspeed;
      this.yspeed += 1;
    }
  }
}