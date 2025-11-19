let angle, aSpeed, r, g, b, d;
let waveBall1, waveBall2;
let posX, posY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  angle = 0;
  aSpeed = 5;

  posX = random(width);
  posY = random(height);

  // create objects
  waveBall1 = new doubleBall(posX, posY);
  waveBall2 = new doubleBall(width / 2, height / 2);
}

function draw() {
  background(90, 105, 157, 10);

  // First object color mapping
  r = sinMap(30, 40);
  g = sinMap(20, 255);
  b = sinMap(100, 150);
  d = sinMap(50, 50);

  waveBall1.display(r, g, b, d);
  waveBall1.update(4);
  waveBall1.keepInCanvas();

  // Second object color mapping
  r = sinMap(10, 80);
  g = sinMap(200, 255);
  b = sinMap(120, 150);
  d = sinMap(80, 50);

  waveBall2.display(r, g, b, d);
  waveBall2.update(3);
  waveBall2.keepInCanvas();

  angle += aSpeed;
}

// Sine mapping helper function
function sinMap(minV, maxV) {
  return map(sin(angle), -1, 1, minV, maxV);
}

