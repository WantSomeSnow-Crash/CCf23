let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(255);

  //*Draw random shapes with random size and color that follow the mouse

  // Draw shapes
  shapes.forEach(shape => {
    fill(shape.hue, shape.saturation, shape.brightness, shape.alpha);
    if (shape.type === 'circle') {
      ellipse(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'square') {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else {
      line(shape.x1, shape.y1, shape.x2, shape.y2);
    }
  });
}

function mouseDragged() {
  // Generate random colors
  let hue = random(360);
  let saturation = random(50, 100);
  let brightness = random(50, 100);
  let alpha = random(0.1, 0.5);

  // Generate random positions
  let x = mouseX;
  let y = mouseY;

  // Generate random shape
  let shapeType = random(['circle', 'square', 'line']);
  let shapeSize = shapeType === 'circle' ? random(50, 200) : shapeType === 'square' ? random(10, 100) : random(10, 50);

  // Add shape to array
  if (shapeType === 'line') {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    shapes.push({
      type: shapeType,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      hue: hue,
      saturation: saturation,
      brightness: brightness,
      alpha: alpha
    });
  } else {
    shapes.push({
      type: shapeType,
      x: x,
      y: y,
      size: shapeSize,
      hue: hue,
      saturation: saturation,
      brightness: brightness,
      alpha: alpha
    });
  }
}

//*Reset the canvas when spacebar is pressed and draw random shapes when up arrow is pressed

function keyPressed() {
  if (key === ' ') {
    shapes = [];
  } else if (keyCode === UP_ARROW) {
    drawRandomShapes();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawRandomShapes() {
  let numShapes = random(10, 50);
  for (let i = 0; i < numShapes; i++) {
    // Generate random colors
    let hue = random(360);
    let saturation = random(50, 100);
    let brightness = random(50, 100);
    let alpha = random(0.1, 0.5);

    // Generate random positions
    let x = random(width);
    let y = random(height);

    // Generate random shape
    let shapeType = random(['circle', 'square', 'line']);
    let shapeSize = shapeType === 'circle' ? random(50, 200) : shapeType === 'square' ? random(10, 100) : random(10, 50);

    // Add shape to array
    if (shapeType === 'line') {
      let x1 = random(width);
      let y1 = random(height);
      let x2 = random(width);
      let y2 = random(height);
      shapes.push({
        type: shapeType,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        hue: hue,
        saturation: saturation,
        brightness: brightness,
        alpha: alpha
      });
    } else {
      shapes.push({
        type: shapeType,
        x: x,
        y: y,
        size: shapeSize,
        hue: hue,
        saturation: saturation,
        brightness: brightness,
        alpha: alpha
      });
    }
  }
}