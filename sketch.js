let font;
let points = [];
let r = 5; //r =15; //r =25;
let angle = 0;
function preload() {

  font = loadFont('Jacquard_12_Charted/Jacquard12Charted-Regular.ttf');
}

function setup() {
  createCanvas(600, 600);
  //points = font.textToPoints('Hi', 100, 300, 300); //, x, y, x2, y2)

  points = font.textToPoints('ML', 50, 300, 300,{
    sampleFactor:0.2,
    simplifyThreshold:0
  }); //, x, y, x2, y2)
  print(points);

  angleMode(DEGREES);

}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    // ellipse(points[i].x, points[i].y, 10, 10);
    ellipse(points[i].x + r*sin(angle + i*25), points[i].y, 10, 10);
    // line(points[i].x, points[i].y, 10, 10);
  } 
  angle += 10;
}

