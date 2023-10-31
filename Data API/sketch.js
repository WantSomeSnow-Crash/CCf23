let data;
let baseurl = 'https://corsproxy.io/?https://data.nasdaq.com/api/v3/datatables/NDAQ/RTAT10?date=2023-10-27%2C2023-10-26%2C2023-10-25&ticker=TSLA&api_key=skDSzmx31g-JNRmpyx6_'; // Base URL

function preload() {
  let combo = baseurl;
  data = loadJSON(combo)
}

let angle = 500;
let radius = 150;
let speed = .01;
let tooltip;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tooltip = createDiv('');
  tooltip.position(0, 0);
  tooltip.style('background-color', 'yellow');
  tooltip.style('padding', '5px');
  tooltip.style('border', '1px solid black');
  tooltip.hide();
  background('orange');
}


function draw() {

    if (data) {
      let rows = data.datatable.data;
      let rowHeight = 20;
      let colWidth = 450;
      textAlign(CENTER, CENTER);
      let x = width / 1.7 - (colWidth * rows[0].length) / 2; // Set x to the center of the screen
      let y = height / 2;
      let time = millis() / 1200;
      if (selectedRow >= 0 && selectedRow < rows.length) {
        let row = rows[selectedRow];
        for (let j = 0; j < row.length; j++) {
          let value = row[j];
          let shapeSize = 30;
          let xPos = x + j * colWidth + radius * cos(angle + selectedRow * 0. + 3* time);
          let yPos = y + selectedRow * rowHeight + radius * sin(angle + selectedRow * 0.2 + time + j);
          let d = dist(mouseX, mouseY, xPos, yPos);
          if (j == 0) {
            fill('black');
            stroke('white');
            rect(xPos, yPos, shapeSize, shapeSize);
          } else if (j == 1) {
            fill('green');
            stroke('black');
            triangle(xPos, yPos - shapeSize / 2, xPos - shapeSize / 2, yPos + shapeSize / 2, xPos + shapeSize / 2, yPos + shapeSize / 2);
          } else if (j == 2) {
            fill('purple');
            ellipse(xPos, yPos, shapeSize, shapeSize);
          } else if (j == 3) {
            fill('red');
            rect(xPos - shapeSize / 2, yPos - shapeSize / 3, shapeSize, shapeSize);
          }
          if (d < shapeSize / 2) {
            fill('white');
            tooltip.html(value);
            tooltip.show();
            tooltip.position(mouseX + 40, mouseY + 40);
          }
        }
      }
    }
}
let selectedRow = -1;
let rowSelector = document.getElementById('row-selector');
rowSelector.addEventListener('change', function() {
    selectedRow = rowSelector.value;
  });

let rows = data.datatable.data;
if (selectedRow >= 0 && selectedRow < rows.length) {
  let row = rows[selectedRow];
  // Update the visualization to display only the selected row
}

function mouseMoved() {
  let rows = data.datatable.data;
  let rowHeight = 50;
  let colWidth = 300;
  let x = width / 6.5;
  let y = height / 3;
  let time = millis() / 1000;
  let isOverData = false;
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    for (let j = 0; j < row.length; j++) {
      let value = row[j];
      let shapeSize = 30;
      let xPos = x + j * colWidth + radius * cos(angle + i * 0.5 + 2* time);
      let yPos = y + i * rowHeight + radius * sin(angle + i * 0.5 + time + j);
      let d = dist(mouseX, mouseY, xPos, yPos);
      if (d < shapeSize / 2) {
        isOverData = true;
      }
    }
  }
  if (!isOverData) {
    tooltip.hide(); // hide the tooltip if the mouse is not over a shape
  }
}