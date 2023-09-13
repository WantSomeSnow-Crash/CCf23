

function setup() {
  createCanvas(1000, 700);
  background(38, 31, 26);



  // Draw a rectangle
  colorMode(RGB);
  fill(54, 37, 28)
  rect(0, 500, 1000, 170);

  // Draw a second rectangle
  fill(83, 65, 51);
  rect(0, 300, 1000, 300);


 //very top of melon
  fill('white');
  stroke(225,225,225);
  rect(290, 210, 400, 20);

  //Dark green of melon
  fill(38, 41,31);
noStroke();
  arc(500, 200, 450, 450, TWO_PI, PI);

  // draw a green melon cut in half
  fill(130, 136, 84);
  arc(500, 200, 400, 400, TWO_PI, PI);

  //white of melon
  fill(215, 178, 155);
  noStroke;
  arc(500, 200, 380, 380, TWO_PI, PI);

  //red of melon
  fill(200, 66, 53);
  noStroke;
  arc(500, 200, 300, 330, TWO_PI, PI);

  //shadow of second melon 22, 21, 20
  fill(68, 41, 19);
  noStroke();
  angleMode(DEGREES);
  arc(350, 435, 250, 240, 0, 360, CHORD);




  //arced bottom of second melon
  fill(96, 76, 54);
  noStroke();
  arc(334, 430, 235, 250, TWO_PI - 3, PI - 1/9);


 //second melon
  fill(96, 76, 54);
  noStroke();
  //ellipse(319, 412, 210, 223);

  //middle of second melon
  fill(153, 173, 69);
  noStroke();
  ellipse(333, 430, 220, 230);


  //hole in melon
  colorMode(RGB);
  fill(153, 173, 69);
  noStroke;
  ellipse(332, 430, 200, 210);

//shadow of middle of second melon
colorMode(RGB);
fill(207, 226, 125)
noStroke;
ellipse(329, 425, 140, 170);

//hole in middle of second melon
  colorMode(RGB);
  fill(204, 255, 102);
  noStroke;
  ellipse(329, 425, 120, 150);

  //seeds of second melon
  fill(168, 127, 39);
  noStroke();
  ellipse(300, 450, 10, 5);
  ellipse(350, 480, 10, 5);
  ellipse(350, 474, 10, 5);
  ellipse(350, 455, 10, 5);
  ellipse(350, 445, 10, 5);
  ellipse(355, 440, 10, 5);
  ellipse(390, 465, 10, 5);
  ellipse(390, 450, 10, 5);
  ellipse(430, 480, 10, 5);
  ellipse(435, 485, 10, 5);
  ellipse(360, 380, 10, 5);
  ellipse(355, 375, 10, 5);
  ellipse(360, 370, 10, 5);
  ellipse(300, 365, 10, 5);
  ellipse(305, 360, 10, 5);
  ellipse(305, 370, 10, 5);
  ellipse(305, 380, 10, 5);
  ellipse(310, 385, 10, 5);
  ellipse(320, 400, 10, 5);
  ellipse(350, 597, 5, 10);
  ellipse(350, 588, 10, 5);
  ellipse(340, 595, 10, 5);




  //Fallen piece of red melon 526,467
  fill(200, 66, 53);
  noStroke();
  triangle(526,467, 565,464,550,445)


 //seeds
  fill(0, 0, 0);
  stroke(0, 0, 0);
  ellipse(450, 310, 4, 10);
  ellipse(550, 310, 4, 10);
  ellipse(410, 250, 4, 10);
  ellipse(590, 250, 4, 10);
  ellipse(450, 215, 4, 10);
  ellipse(550, 210, 4, 10);
  ellipse(500, 250, 10, 4);
  ellipse(500, 310, 10, 4);
  ellipse(500, 450, 10, 4);
  ellipse(500, 460, 10, 4);
  ellipse(520, 455, 10, 4);
  ellipse(560, 460, 10, 4);
  ellipse(540, 455, 10, 4);
  ellipse(530, 465, 10, 4);
  ellipse(539, 464, 10, 4);
  ellipse(549, 451, 10, 4);
  ellipse(575, 380, 10, 4);






//line cutting second melon
strokeWeight(3);
stroke(229, 196, 151);
colorMode(RGB);
line(328, 380, 330, 498);


  //draws multiple leaves connected to the highest grape //800, 384, 100, 100, PI * 1/4, HALF_PI
  fill(0, 100, 0);
  stroke(0, 100, 0);

  //stem of orange
 fill(0, 100, 0);
 stroke(0, 100, 0);
 rect(760, 250, 5, 50);

//Shadow of orange
angleMode(DEGREES);
fill(130, 71, 55);
noStroke();
arc(905, 320, 100, 100, 100, 75, CHORD);

 //Shadow of orange
 angleMode(DEGREES);
 fill(130, 71, 55);
 noStroke();
 arc(770, 320, 100, 100, 100, 75, CHORD);

 //Peach
  fill(191, 104 , 81);
  noStroke();
  ellipse(760, 320, 100, 100);


//stem of orange
fill(0, 100, 0);
stroke(0, 100, 0);
rect(900, 230, 5, 50);

//Second Peach
fill(191, 104 , 81);
noStroke();
ellipse(900, 320, 100, 100);


   //stick of left grapes
   fill(53, 58, 32);
   noStroke();
   rect(365, 150, 5, 100);



  //grape stem
  fill(53, 58, 32);
  noStroke();
  rect(185, 150, 5, 100);

   //grapes on the left   //grape fill color (219,228,101)

  fill(49, 55, 53);
  stroke(255,220,220);
  strokeWeight(.5)
  ellipse(325,340, 30, 30);
  ellipse(345,345, 30, 30);
  //bottom grape //
  ellipse(325,366, 30, 30);
  //bottom grape //
  ellipse(338,327, 25, 25);
  ellipse(320,310, 30, 30);
  ellipse(345,305, 30, 30);
  ellipse(330,285, 30, 30);
  ellipse(355,285, 30, 30);
  ellipse(370,305, 30, 30);
  ellipse(360,330, 30, 30);
  ellipse(348,265, 30, 30);
  ellipse(377,280, 30, 30);
  ellipse(390,300, 30, 30);
  ellipse(383,320, 30, 30);
  ellipse(370,265, 30, 30);
  ellipse(380,245, 30, 30);
  ellipse(355,245, 30, 30);
  ellipse(355,245, 30, 30);
  ellipse(355,245, 30, 30);
  ellipse(355,245, 30, 30);
  ellipse(355,245, 30, 30);



  //far left grapes
  ellipse(215,327, 25, 25);
  ellipse(230,310, 30, 30);
  ellipse(220,305, 30, 30);
  ellipse(220,280, 30, 30);
  ellipse(175,275, 30, 30);
  ellipse(175,305, 30, 30);
  ellipse(175,330, 30, 30);
  ellipse(220,265, 30, 30);
  ellipse(197,285, 30, 30);
  ellipse(195,310, 30, 30);
  ellipse(200,335, 30, 30);
  ellipse(177,350, 30, 30);
  ellipse(196,265, 30, 30);
  ellipse(190,245, 30, 30);
  ellipse(215,245, 30, 30);
  ellipse(170,247, 30, 30);
  ellipse(170,220, 30, 30);
  ellipse(200,220, 30, 30);
  ellipse(185,200, 30, 30);


 //Grape stem
 fill(62, 63, 37);
 noStroke();
 rect(700, 320, 5, 100);

 //Draw a colletion of smallgrapes
  //grape fill color (219,228,101)

  fill(110, 109, 51);
  stroke(255,220,220);
  ellipse(600,670, 50, 50);
  ellipse(605,620, 50, 50);
  ellipse(650,620, 50, 50);
  ellipse(605,630, 50, 50);
  ellipse(595,530, 50, 50);
  ellipse(620,540, 50, 50);
  ellipse(640,550, 50, 50);
  ellipse(660,560, 50, 50);
  ellipse(680,570, 50, 50);
  ellipse(600,500, 50, 50);
  ellipse(620,490, 50, 50);
  ellipse(590,550, 50, 50);
  ellipse(590,570, 50, 50);
  ellipse(670,590, 50, 50);
  ellipse(650,600, 50, 50);
  ellipse(630,610, 50, 50);
  ellipse(600,600, 50, 50);
  ellipse(640,655,50,50);
  ellipse(650,460,50,50);
  ellipse(670,460,50,50);
  ellipse(680,440,50,50);
  ellipse(705,407,50,50);
  ellipse(712,452,50,50);
  ellipse(720,490,50,50);
  ellipse(730,520,50,50);
  ellipse(740,550,50,50);
  ellipse(715,580,50,50);
  ellipse(700,600,50,50);
  ellipse(680,610,50,50);
  ellipse(660,620,50,50);
  ellipse(626,567,50,50);
  ellipse(693,478,50,50);
  ellipse(680,500,50,50);
  ellipse(660,510,50,50);
  ellipse(640,520,50,50);
  ellipse(620,530,50,50);
  ellipse(699,510,50,50);
  ellipse(650,490,40,40);
  ellipse(706,540,40,40);
  ellipse(720,570,40,40);
  ellipse(650,550,40,40);
  ellipse(677,540,40,40);

  //the words eat the fruit
  fill(225, 225, 225);
  textSize(20);
  textFont('optima');
  text('Sarah M Peale 1822', 75, 640);

  // Stem above red watermelon
  fill(53, 58, 32);
  noStroke();
  rect(190, 150, 400, 10);


  fill(109, 54, 13);
  rect(550, 150, 70, 10);

  //leaf connected to left blue grapes
  fill(44, 70, 29);
  stroke(44, 70, 29);44, 70, 29
  triangle(186, 157, 184, 121, 155,148)
  triangle(186, 157, 214,126, 217,148)
  triangle(186,173, 160,183, 176,190)
  triangle(186,169, 158,167, 186,163)
  triangle(190,187, 200,205, 213,160)
  triangle(200,163, 200,178,  186,177)

  //leaf connected to right blue grapes
  fill(44, 70, 29);
  stroke(44, 70, 29);
  triangle(365, 157, 363, 121, 334,148)
  triangle(365, 157, 393,126, 396,148)
  triangle(365,173, 339,183, 356,190)
  triangle(365,169, 337,167, 365,163)
  triangle(369,187, 379,205, 392,160)
  triangle(379,163, 379,178,  365,177)
  triangle(369,220,390,256, 394,219 )
  triangle(365,209, 348,243, 365,251)

  //leaf connected to green grapes
  fill(44, 70, 29);
  stroke(44, 70, 29);
  triangle(700,353, 684,393, 702,392)
  triangle(704,341, 725,336, 704,359 )
  triangle(703,332, 669,351, 699,354 )


}




function draw() {












}


function mousePressed(){
  console.log(mouseX + "," + mouseY);

}


