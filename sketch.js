//THIS IS RUNNING ON 5504!!

let player; // Variable to store the player sprite
let bullets; // Group to store the bullet sprites
let enemies = []; // Group to store the enemy sprites
const startingEnemies = 15; // Constant to define the number of enemies at the start
let enemySpeed = 3; // Variable to store the speed of the enemies
let playerImgD; // Variable to store the player image
let playerImgU; // Variable to store the player image
let playerImgL; // Variable to store the player image
let playerImgR; // Variable to store the player image
let pistol;
let pisImg; // pistol image
let enemyImg; // Variable to store the enemy image
let arrow; // Variable to store the arrow image
let goImg; // Variable to store the game over image
let numEnemies = startingEnemies - 5;
let gameState = 'intro';
let introImg; // Variable to store the intro image

function preload() {
playerImgD = ('Pilot Images/Pilot-atcam-1.png')
playerImgU = ('Pilot Images/pilotUp0.png')
playerImgL = ('Pilot Images/PilotL-1.1.png')
playerImgR = ('Pilot Images/pilotRight0.png')
pisImg = ('Pistol.png')
enemyImg = ('bulletEnemy/bulletEnemyDown3.png')
bg = loadImage('fullTiledFloor.png'); // Load the background image
goImg = loadImage('gameover screen/gameover.png');
introImg = loadImage('Intro screen/TitleScreenPlaceHolder.jpg');
}

let playerBullets = [];
let lastShotTime = 0;
let enemyBullets = [];
let lastEnemyShotTime = 0;
let lastSpawnTime = 0;
let totalShots = 0;
let missedShots = 0;
let kills = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas with a width and height of 400 pixels
  cursor.scale = 4;
  player = new Sprite(width/2, height/2, 30, 30); // Create the player sprite at the center of the canvas
  pistol = new Sprite(random(width), 30, 30)
  pistol.addImage(pisImg);
  pistol.scale = 2;
  for (let i = 0; i < startingEnemies; i++) {
    enemies.push(new Sprite(random(width)+ 700, 10, 10, ));
  }
  enemies.forEach(enemy => {
    enemy.addImage(enemyImg);
    enemy.scale = 2;
  });

}
function draw() {
 if (gameState === 'intro') {
  //show intro screen
  displayIntroScreen();
 } else if (gameState === 'playing') {

background(bg); // Set the background
cursor('cursor.png');

for (let i = 0; i < enemyBullets.length; i++) {
  let bullet = enemyBullets[i];
  bullet.position.x += bullet.velocity.x;
  bullet.position.y += bullet.velocity.y;

  if (bullet.collide(player)) {
    gameOver();
  }
}
if (millis() - lastEnemyShotTime >= 2000) {
  // Loop through each enemy and make them shoot a bullet
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].position.x > 0 && enemies[i].position.x < width && enemies[i].position.y > 0 && enemies[i].position.y < height) {
      shootEnemyBullet(enemies[i]);
  }
}
  // Update the last shot time
  lastEnemyShotTime = millis();

  //check time since last enemy spawn
  if (millis() - lastSpawnTime >= 1000) {
    let numEnemiesSpawn = 7;
    //spawn new enemy
    spawnNewEnemies(startingEnemies + 20);
    lastSpawnTime = millis();
  }

  function spawnNewEnemies() {
    for (let i = 0; i < numEnemies; i++) {
      // Adjust the parameters as needed
      let newEnemy = createSprite()
      newEnemy.addImage(enemyImg);
      newEnemy.scale = 2;

      //initial enemy position
      newEnemy.position.x = random(width) + 700;
      newEnemy.position.y = 10;
      newEnemy.moveTowards(player, .005);
      enemies.push(newEnemy);
    }
  }
function shootEnemyBullet(enemy) {
  if (
    enemy.position.x > 0 &&
    enemy.position.x < width &&
    enemy.position.y > 0 &&
    enemy.position.y < height
  ) {
    let bullet = createSprite(enemy.position.x, enemy.position.y, 5, 5);

    let bulletImage = loadImage('gameover screen/arrow.png');
   // bullet.shapeColor = color(0, 255, 0);

   bullet.addImage(bulletImage);

    // Calculate the direction vector from the enemy to the player
    let direction = createVector(player.position.x - enemy.position.x, player.position.y - enemy.position.y);
    direction.normalize();

    // Use the direction vector as the bullet's velocity
    bullet.velocity = direction.mult(5);

    // Adjust bullet's initial position to prevent immediate off-screen movement
    bullet.position.x += bullet.velocity.x;
    bullet.position.y += bullet.velocity.y;

    enemyBullets.push(bullet);
  }
}
}
  // Player movement wasd
  if (keyIsDown('65')) {
    player.position.x -= 5;
    player.addImage(playerImgL);
    player.scale = .5;

    //scale image to fit sprite
    //playerImgL.resize = 0.5;
  }
  if (keyIsDown('68')) {
    player.position.x += 7;
    player.addImage(playerImgR);
    player.scale = 1;
  }
  if (keyIsDown('87')) {
    player.position.y -= 7;
    player.addImage(playerImgU);
    player.scale = 1;

  }
  if (keyIsDown('83')) {
    player.position.y += 7;
    player.addImage(playerImgD);
    player.scale = .5;

  }

  for (let i = 0; i < startingEnemies; i++) {
    enemies[i].moveTowards(player, .005);
  }

//update pistol position
pistol.position.x = player.position.x + 20;
pistol.position.y = player.position.y + 20;

//if pistol overlaps player, do nothing
if (pistol.overlap(player)) {}

// Shoot bullet function for player
function shootPlayerBullet() {
  let bullet = createSprite(pistol.position.x + 25 , pistol.position.y - 9, 5, 5);
  bullet.shapeColor = color(255, 0, 0); // Set the color of the bullet sprite to red

  let bulletImage = loadImage('pistolBullet.png');
  bullet.addImage(bulletImage);

  // Calculate the direction vector
  let direction = createVector(mouseX - player.position.x, mouseY - player.position.y);
  direction.normalize(); // Normalize the vector (make its length 1)

  // Store the direction in the bullet sprite
  bullet.velocity = direction.mult(5); // Multiply by the desired bullet speed
  playerBullets.push(bullet); // Add the bullet to the playerBullets array
}
//if player overlaps enemy game over
for (let i = 0; i < enemies.length; i++) {
  if (player.overlap(enemies[i])) {
    gameOver();
  }
}
  // Shoot bullets
  if (mouseIsPressed) {
    shootPlayerBullet(); // Shoot a bullet when pressed
  }
  // Check collisions
  playerBullets.forEach(bullet => {
    enemies.forEach(enemy => {
      if (bullet.collide(enemy)) { // Check if a bullet collides with an enemy
        bullet.remove();
        enemy.remove();
        kills++;//increase kill count
      }
    });
  });

// Update and draw bullets
for (let i = enemyBullets.length - 1; i >= 0; i--) {
  let bullet = enemyBullets[i];
  bullet.position.x += bullet.velocity.x;
  bullet.position.y += bullet.velocity.y;

  // Remove the bullet if it goes off the screen
  if (bullet.position.x < 0 || bullet.position.x > width || bullet.position.y < 0 || bullet.position.y > height) {
    bullet.remove();
    enemyBullets.splice(i, 1); // Remove from the array
    missedShots++; //Increase missed shots
    totalShots++; //Increase total shots
  }
}
  playerBullets.forEach(bullet => {
    bullet.position.x += bullet.velocity.x;
    bullet.position.y += bullet.velocity.y;

    // Remove the bullet if it goes off the screen
    if (bullet.position.x < 0 || bullet.position.x > width || bullet.position.y < 0 || bullet.position.y > height) {
      bullet.remove();
    }
  });

}
  function displayIntroScreen (){
    clear();
    textAlign(CENTER);
    stroke("black");
    textSize(32);
    fill(255);
    let resizedIntroImg = introImg.resize(width, height);
    image(introImg, 0, 0);
    text('Welcome to the game!\nPress Enter to start\nMove with "w.a.s.d"\nFire by clicking the mouse\n Good Luck', width / 2, height / 2 + 150);
  }

  if (kb.presses('Enter')) {
    gameState = 'playing'; // Transition to playing state on mouse click
  }
}
function gameOver() {
  clear();
  noLoop();
  textAlign(CENTER);
  textSize(32);
  fill(255);
  let resizedGoImg = goImg.resize(width, height);
  image(goImg, 0, 0);
  let accuracy = (kills / totalShots) * 100;
  text(`Missed Shots: ${missedShots}\nKills: ${kills}\nAccuracy: ${accuracy.toFixed(2)}%`, width / 2, height / 2 + 200);
}
//whenn r is pressed restart the game
function keyPressed() {
  if (key == 'r') {
    location.reload();
  }
}function restartGame() {
  // Clear player bullets
  playerBullets.forEach(bullet => bullet.remove());
  playerBullets = [];

  // Clear enemy bullets
  enemyBullets.forEach(bullet => bullet.remove());
  enemyBullets = [];

  // Clear enemies
  enemies.forEach(enemy => enemy.remove());
  enemies = [];

  // Reset player position
  player.position.set(width / 2, height / 2);

  // Spawn new enemies
  for (let i = 0; i < startingEnemies; i++) {
    enemies.push(new Sprite(random(width) + 700, 10, 10));
    enemies[i].addImage(enemyImg);
    enemies[i].scale = 2;
  }

  // Reset other variables
  missedShots = 0;
  kills = 0;

  // Reset game state to intro
  gameState = 'intro';

  loop(); // Resume the game loop
}




