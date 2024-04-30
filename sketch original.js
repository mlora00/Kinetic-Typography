let myColors = [];
let myRed;
let myPink;
let myPurple;
let myOrange;
let myLavendar;


function setup() {
  createCanvas(400, 400);
  
  myRed = color(232, 0, 50);
  myPink = color(0, 4, 232);
  myPurple = color(119, 61, 255);
  myOrange = color(255, 81, 0);
  myLavendar = color(218, 201, 255);
    
  myColors = [myRed, myPink, myPurple, myOrange];
}

function draw() {
  frameRate(3);
  background(myLavendar);  
  
  stroke(random(myColors));
  strokeWeight(random(50));
  //M shape
  line(100, 100, 100, 200);
  line(100, 100, 150, 150);
  line(150, 150, 200, 100);
  line(200, 100, 200, 200);
  
  
  //L shape
  line(200, 200, 200, 300);
  line(200, 300, 300, 300);
  

  
  
}
