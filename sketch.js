let s;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(10);
  s = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    s.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    s.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    s.setDir(0, -1);
  } else if (key == ' ') {
    s.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (s.eat(food)) {
    foodLocation();
  }
  s.update();
  s.show();


  if (s.endGame()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}