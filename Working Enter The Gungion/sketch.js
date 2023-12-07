let player; // Variable to store the player sprite
let bullets; // Group to store the bullet sprites
let enemies; // Group to store the enemy sprites
let enemyCount = 0; // Counter to keep track of the number of enemies
let level = 1; // Variable to store the current level
const startingEnemies = 5; // Constant to define the number of enemies at the start
const maxEnemies = 15; // Constant to define the maximum number of enemies
let enemySpeed = 3; // Variable to store the speed of the enemies
let backgroundImage

function preload() {
	backgroundImage = loadImage('Background.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas with a width and height of 400 pixels

  player = createSprite(width/2, height/2, 30, 30); // Create the player sprite at the center of the canvas
  player.shapeColor = color(255); // Set the color of the player sprite to white

  bullets = new Group(); // Create a new group to store the bullet sprites
  enemies = new Group(); // Create a new group to store the enemy sprites

 //Commented this out cuz its not fucking working
  //setInterval(enemyShoot, 1000); // Start enemy  shooting

  for (let i = 0; i < startingEnemies; i++) {
    spawnEnemy(); // Spawn the starting number of enemies
    enemyCount++;
  }
}

function draw() {
  background(220); // Set the background color to light gray

  // Player movement
  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 5;
  }

  // Spawn enemies
  if (player.position.y < height/2 && enemyCount <= maxEnemies) {
    spawnEnemy(); // Spawn an enemy if the player's y position is above half of the canvas height and the enemies < max enemies
    enemyCount++;
  }

  // Shoot bullets
  if (keyIsDown(32)) {
    shootBullet(); // Shoot a bullet when pressed
  }

  // Check collisions
  bullets.forEach(bullet => {
    enemies.forEach(enemy => {
      if (bullet.collide(enemy)) { // Check if a bullet collides with an enemy
        bullet.remove();
        enemy.remove();
      }if (player.collide(enemy)) { // Check if the player collides with an enemy
		gameOver();
	  }
    });
  });

  // Update and draw bullets
  bullets.forEach(bullet => {
    bullet.position.y -= 5; // Move the bullet up by 5
    if (bullet.position.y < 0) {
      bullet.remove(); // Remove the bullet if it goes off the top
    }
  });

  // Update and draw enemies
  enemies.forEach(enemy => {
    enemy.position.y += enemySpeed; // Move the enemy down by the enemySpeed units
    if (enemy.position.y > height) {
      enemy.remove(); // Remove the enemy if it goes off the bottom
      enemyCount--;
    }
  });

  /// Check if all enemies are killed
  if (enemyCount === 0 && bullets.length === 0) {
    startNewRound();
  }
}


//why no work stuid hobbit
//wants to only work when there is no movement by user STUPID STUPID STUPID
function startNewRound() {
	level++; // Increase the level

	// Increase the number of enemies and enemy speed
	const newEnemies = startingEnemies + level;
	const newEnemySpeed = enemySpeed + level;

	// Spawn new enemies
	for (let i = 0; i < newEnemies; i++) {
	  spawnEnemy();
	  enemyCount++;
	}

	// Update enemy speed
	enemySpeed = newEnemySpeed;
	console.log("New Round"); // Add console log statement
  }

  function spawnEnemy() {
	let side = Math.floor(random(3)); // Generate a random number between 0 and 2 to determine the side of the screen

	let x, y;

	if (side === 0) { // Left side
	  x = 0;
	  y = random(height);
	} else if (side === 1) { // Right side
	  x = width;
	  y = random(height);
	} else { // Top side
	  x = random(width);
	  y = 0;
	}

	let enemy = createSprite(x, y, 20, 20); // Create the enemy sprite at the determined position
	enemy.shapeColor = color(0, 255, 0); // Set the color of the enemy sprite to green
	enemies.add(enemy); // Add the enemy sprite to the enemies group
  }

//commented out cuz its being annoying
//function enemyShoot() {
//  enemies.forEach(enemy => {
//    let bullet = createSprite(enemy.position.x, enemy.position.y, 5, 10); // Create a bullet sprite at the enemy's position
//    bullet.shapeColor = color(255, 0, 0); // Set the color of the bullet sprite to red
//    bullets.add(bullet); // Add the bullet sprite to the bullets group
//
//	//calc direction towards player
//	let direction = createVector(0,1);
//	direction.normalize();
//
//	//give the bullet a velocity of 3 in the direction towards the player
//	bullet.setVelocity(direction.mult(3));
//
//
//});
//}

//For some reason this is deciding not to work until firing a bullet
//BUT DOESN'T WANNA WORK IF SOMEONE IS KILLED HUH Stupid very stupid
function gameOver() {
	noLoop();
	background(0);
	textAlign(CENTER);
	textSize(32);
	fill(255);
	text("Game Over!", width/2, height/2);
}

function shootBullet() {
  let bullet = createSprite(player.position.x, player.position.y, 5, 10); // Create a bullet sprite at the player's position
  bullet.shapeColor = color(255, 0, 0); // Set the color of the bullet sprite to red
  bullets.add(bullet); // Add the bullet sprite to the bullets group
}

function spawnEnemy() {
  let enemy = createSprite(random(width), 0, 20, 20); // Create an enemy sprite at a random x position at the top of the canvas
  enemy.shapeColor = color(0, 255, 0); // Set the color of the enemy sprite to green
  enemies.add(enemy); // Add the enemy sprite to the enemies group
}
