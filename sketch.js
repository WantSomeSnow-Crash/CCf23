function setup() {
  createCanvas(400, 410);
  background(173, 216, 230);
  fill(241, 194, 125)
  ellipse(200, 200, 200, 250);

  // white part eyes
  fill(255)
  ellipse(157, 157, 39)
  ellipse(243, 157, 39);

  // blue circles for eyes
  fill('blue')
  ellipse(157, 157, 25)
  ellipse(243, 157, 25);

  //black dot for eyes left
  fill('black')
  strokeWeight(7)
  point(157, 157)

  //black dot for eyes right
  fill('black')
  strokeWeight(7)
  point(243, 157)


  // Ear left
  fill(241, 194, 125)
  strokeWeight(0)
  arc(115, 193, 87, 50, 21, PI + HALF_PI + PI, OPEN);

  // Ear right
  fill(241, 194, 125)
  strokeWeight(0)
  arc(285, 193, 87, 50, 21, PI + HALF_PI + PI, OPEN)

  // Nose
  strokeWeight(1)
  stroke('black')
  triangle(200, 193, 180, 218, 220, 218);

  // Mouth
  fill(250)
  stroke(255,200,217)
  strokeWeight(3)
  arc(200, 244, 70, 60, 0, PI , CHORD)

  // Hair
  fill(144,84,47)
  noStroke()
  ellipse(121, 108, 50)
  ellipse(113, 136, 42)
  ellipse(280, 109, 42)
  ellipse(270, 100, 36)
  ellipse(257, 90, 39)
  ellipse(142, 90, 40)
  ellipse(210, 80, 46)
  ellipse(255, 90, 22)
  ellipse(181, 79, 40)

  //tounge
  fill(255, 0, 0)
  stroke('black')
  strokeWeight(1)
  rect(195, 255, 10, 15, 37)

  //Neck
  fill('black')
  stroke('black')
  strokeWeight(1)
  rect(147, 310, 110, 150, 37)

  //left arm
  fill(241, 194, 125)
  stroke('black')
  strokeWeight(1)
  rect(90, 330, 90, 25, 35)

  //right arm
  fill(241, 194, 125)
  stroke('black')
  strokeWeight(1)
  rect(220, 330, 90, 25, 35)

  //left hand
  fill(241, 194, 125)
  stroke('black')
  strokeWeight(1)
  rect(70, 340, 30, 30, 35)

  //right hand
  fill(241, 194, 125)
  stroke('black')
  strokeWeight(1)
  rect(300, 340, 30, 30, 35)






}

function mousePressed(){
  console.log(mouseX + "," + mouseY)

}