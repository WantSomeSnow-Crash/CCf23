let sounds = [];
let center;
let currentSound;
let audio;
let bgColor = 0;


function preload() { // loads sounds
  sounds.push(loadSound('ES_Dissolving STEMS MELODY - Hanna Lindgren.mp3'));
  sounds.push(loadSound('ES_New Frontier - Ben Elson.mp3'));
  sounds.push(loadSound('ES_PREL Laser 3 - SFX Producer.mp3'));
  sounds.push(loadSound('ES_Sin City - Sven Karlsson.mp3'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  center = createVector(width / 2, height / 2);
  background(137, 207, 240);
}

function mousePressed() { //plays sounds when mouse is pressed in certin area
    let soundIndex = -1;
    let soundNames = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];
    for (let i = 0; i < 4; i++) {
      let x = (i % 2 == 0) ? 0 : width/2;
      let y = (i < 2) ? 0 : height/2;
      if (mouseX >= x && mouseX < x + width/2 && mouseY >= y && mouseY < y + height/2) {
        soundIndex = i;
        break;
      }
    }
    if (soundIndex >= 0) { //sees if soundIndes is >0 if yes then plays song ; if new song clicked stops previous one
      let sound = sounds[soundIndex];
      if (currentSound) {
        currentSound.stop();
      }
      sound.play(); //plays sound
      currentSound = sound;

      function mousePressed() { //tried to have random sound play when center of scrren in clicked but unable
        if (dist(mouseX, mouseY, center.x, center.y) < 50) {
          let soundIndex = floor(random(sounds.length));
          let sound = sounds[soundIndex];
          if (currentSound) {
            currentSound.stop();
          }
          sound.play(); // same as above
          currentSound = sound;
        }
      }
    }
  }
