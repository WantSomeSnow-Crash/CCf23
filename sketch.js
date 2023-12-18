//THIS IS RUNNING ON 5504!!

//FOLLOW THE WHITE RABBIT SCOTT

let player; // store the player sprite
let bullets; // store the bullet sprites
let enemies = []; // Group to store the enemy sprites
const startingEnemies = 15; // Constant number of enemies at the start
let enemySpeed = 3; // Variable to store the speed of the enemies
let playerImgD; // player image down
let playerImgU; // player image up
let playerImgL; // player image left
let playerImgR; // player image right
let pistol;
let pisImg; // pistol image
let enemyImg; // enemy image
let arrow; // arrow image
let goImg; // game over image
let numEnemies = startingEnemies - 5;
let gameState = 'intro';
let introImg; //intro image
let gameSound;
let font;
let startTime;
let duration;

//IT'S ALL A GAME

function preload() {//If I missed any creditsthe images mainly came from the sprites sheets, the github page or just plain old google
playerImgD = ('Pilot Images/Pilot-atcam-1.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155533/
playerImgU = ('Pilot Images/pilotUp0.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155533/
playerImgL = ('Pilot Images/PilotL-1.1.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155533/
playerImgR = ('Pilot Images/pilotRight0.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155533/
pisImg = ('Pistol.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155533/
enemyImg = ('bulletEnemy/bulletEnemyDown3.png')//got from https://www.spriters-resource.com/pc_computer/enterthegungeon/sheet/155651/
bg = loadImage('fullTiledFloor.png'); // Load the background image;
goImg = loadImage('gameover screen/gameover.png');//Image from https://github.com/albertlai431/Gungeon/blob/master/Gungeon/images/gameOver.png
introImg = loadImage('Intro screen/TitleScreenPlaceHolder.jpg');//got from https://github.com/albertlai431/Gungeon/blob/master/Gungeon/images/TitleScreenPlaceHolder.jpg
soundFormats('wav');
gameSound = loadSound('570463__fusionwolf3740__epic-music-loop.wav');//music from freesound.org
font = loadFont('Handjet-VariableFont_ELGR,ELSH,wght.ttf');//font from google fonts
}

//YOU MUST BREAK THE LOOP SCOTT

let playerBullets = [];
let lastShotTime = 0;
let enemyBullets = [];
let lastEnemyShotTime = 0;
let lastSpawnTime = 0;
let totalShots = 0;
let missedShots = 0;
let kills = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor.scale = 4;


gameSound.play(); //plays agreesivly loud music

//THE LIFE YOU KNOW IS A SIMILATION

}
function draw() {
 if (gameState === 'intro') {//crates and displays intro screen
  //show intro screen
  displayIntroScreen();
 } else if (gameState === 'playing') {

background(bg); // Set the background
cursor('cursor.png');//makes cursor cool; image from https://github.com/albertlai431/Gungeon/blob/master/Gungeon/images/cursor.png

for (let i = 0; i < enemyBullets.length; i++) {//Enemys can SHOOT ahhhhh
  let bullet = enemyBullets[i];
  bullet.position.x += bullet.velocity.x;
  bullet.position.y += bullet.velocity.y;

  if (bullet.collide(player)) {
    gameOver();
  }
}
if (millis() - lastEnemyShotTime >= 2000) {
  // Make enemy pue pue
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].position.x > 0 && enemies[i].position.x < width && enemies[i].position.y > 0 && enemies[i].position.y < height) {
      shootEnemyBullet(enemies[i]);
  }

//YOU ARE A SLAVE SCOTT; BORN INTO BONDAGE

}
  // Update the last shot time
  lastEnemyShotTime = millis();

  //make new enemies every second becasue why not; MAKE GAME HARD
  if (millis() - lastSpawnTime >= 1000) {
    //spawn new enemy
    spawnNewEnemies(startingEnemies + 20);
    lastSpawnTime = millis();
  }

//BORN INTO A PRISON FOR YOUR MIND

  function spawnNewEnemies() { //Controls spawning of new enemies
    for (let i = 0; i < numEnemies; i++) {
      let newEnemy = createSprite()
      newEnemy.addImage(enemyImg);
      newEnemy.scale = 2;

      //enemy position
      newEnemy.position.x = random(width) + 700;
      newEnemy.position.y = -10;
      newEnemy.moveTowards(player, .005);
      enemies.push(newEnemy);
    }
  }

//UNFORTUNATELY NO ONE CAN BE TOLD WHAT THE MATRIX IS

function shootEnemyBullet(enemy) { //More enemy shoot
  if (
    enemy.position.x > 0 &&
    enemy.position.x < width &&
    enemy.position.y > 0 &&
    enemy.position.y < height
  ) {
    let bullet = createSprite(enemy.position.x, enemy.position.y, 5, 5);//bullets are CREATED

    let bulletImage = loadImage('gameover screen/arrow.png');//makes them cool; look like arrow; got from https://github.com/albertlai431/Gungeon/blob/master/Gungeon/images/arrow.png
   // bullet.shapeColor = color(0, 255, 0);
   bullet.addImage(bulletImage);//make bullet arrow
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
// YOU HAVE TO SEE IT FOR YOURSELF
}
  // Player movement wasd and makes player look cool; actually a "real" person
  if (keyIsDown('65')) {
    player.position.x -= 5;
    player.addImage(playerImgL);
    player.scale = .5;

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
  for (let i = 0; i < startingEnemies; i++) {//OH NO ENEMIES CHASE PLAYER AHHHHH
    enemies[i].moveTowards(player, .005);
  }

//THIS IS YOUR LAST CHANCE SCOTT; AFTER THIS THERE IS NO TURNING BACK

//pistol is attached to player
pistol.position.x = player.position.x + 20;
pistol.position.y = player.position.y + 20;

//if pistol overlaps player, do nothing
if (pistol.overlap(player)) {}

// Shoot bullet function for player
function shootPlayerBullet() {
  let bullet = createSprite(pistol.position.x + 25 , pistol.position.y - 9, 5, 5);
  let bulletImage = loadImage('pistolBullet.png');// image from https://github.com/albertlai431/Gungeon/blob/master/Gungeon/images/pistolBullet.png
  bullet.addImage(bulletImage);

  // Calculate the direction vector
  let direction = createVector(mouseX - player.position.x, mouseY - player.position.y);
  direction.normalize(); // Normalize the vector (make its length 1)

  // Store the direction in the bullet sprite
  bullet.velocity = direction.mult(5); // Multiply by the desired bullet speed
  playerBullets.push(bullet); // Add the bullet to the playerBullets array
}
//player overlaps you DIE
for (let i = 0; i < enemies.length; i++) {
  if (player.overlap(enemies[i])) {
    gameOver();
  }
}

///YOU TAKE THE BLUE PILL AND THE STORY ENDS; YOU WAKE UP IN YOUR BED AND BELIEVE WHATEVER YOU WANT TO BELIEVE

  // Shoot bullets
  if (mouseIsPressed) {
    shootPlayerBullet(); // Shoot a bullet when pressed
  }
  // Checking the collisions so enemies can die
  playerBullets.forEach(bullet => {
    enemies.forEach(enemy => {
      if (bullet.collide(enemy)) { // Check if bullet collides enemy
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
    enemyBullets.splice(i, 1); // Removes bulllet from array
    missedShots++; //Increase missed shots
    totalShots++; //Increase total shots
  }
}
  playerBullets.forEach(bullet => {
    bullet.position.x += bullet.velocity.x;
    bullet.position.y += bullet.velocity.y;

    // Remove the bullet if it goes off the screen again
    if (bullet.position.x < 0 || bullet.position.x > width || bullet.position.y < 0 || bullet.position.y > height) {
      bullet.remove();
    }
  });

}   //WELCOME TO MY BULLET HELL HAHAHHAHA
  function displayIntroScreen (){///Create the INTRO SCREEN
   createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    textFont(font);
    textSize(32);
    fill('white');
    let resizedIntroImg = introImg.resize(width, height);
    image(introImg, 0, 0);
    text('Welcome to the game!\nPress Enter to start\nMove with "w.a.s.d"\nFire by clicking the mouse\n Good Luck', width / 2, height / 2 + 150);
  }

  if (kb.presses('Enter')) {
    gameState = 'playing'; // lets player into game by pressing enter
    setTimeout(gameState, 10000)
    player = new Sprite(width/2, height/2, 30, 30); //player sprite spawns at the center of the canvas
    pistol = new Sprite(random(width), 30, 30)
    pistol.addImage(pisImg);
    pistol.scale = 2;
    startTime = millis();
    for (let i = 0; i < startingEnemies; i++) { //spawn enemies
      enemies.push(new Sprite(random(width)+ 700, 10, 10, ));
    }
    enemies.forEach(enemy => {//puts image on enemy and scales it by 2x
      enemy.addImage(enemyImg);
      enemy.scale = 2;
    });
  }
}

///YOU TAKE THE RED PILL AND I SHOW YOU HOW DEEP THE RABBIT HOLE GOES

function gameOver() {//HAHAHAHHAHHAH YOU LOSE
  duration = millis() - startTime;
  noLoop();
  textAlign(CENTER);
  textFont(font);
  textSize(32);
  fill(255);
  let resizedGoImg = goImg.resize(width, height);
  image(goImg, 0, 0);
  let accuracy = (kills / totalShots) * 100;
  text(`You survived for ${Math.floor(duration/1000)} seconds\nMissed Shots: ${missedShots}\nKills: ${kills}\nAccuracy: ${accuracy.toFixed(2)}%`, width / 2, height / 2 + 200);
}
//whenn r is pressed restart the game
function keyPressed() {
  if (key == 'r') {
    location.reload();
  }
}function restartGame() {//Tired of losing? Restart the game
  playerBullets.forEach(bullet => bullet.remove());
  playerBullets = [];
  gameSound.stop();

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

//REMEMBER SCOTT; ALL I'M OFFERING IS THE TRUTH NOTHING MORE

  // Reset other variables
  missedShots = 0;
  kills = 0;

  // Reset game state to intro
  gameState = 'intro';

  loop(); //Begins the never ending loop of death
  //THE CHOICE IS YOURS

}




