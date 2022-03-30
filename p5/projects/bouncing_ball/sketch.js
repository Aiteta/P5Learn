let x_width = 301;
let y_width = 301;
let radius  = 12;
let circ_x  = Math.floor(x_width/2);
let circ_y  = Math.floor(y_width/2);
let v_x;
let v_y;
let x_dir = 1;
let y_dir = 1;

function setup() {
  createCanvas(x_width, y_width);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  ellipse(circ_x,circ_y,radius);
  circ_x += Math.floor(mouseX*x_dir/10);
  circ_y += Math.floor(mouseY*y_dir/10);
  if (circ_x > x_width) {
    x_dir = -1;
    circ_x = 2*x_width-circ_x;
  }
  else if (circ_x < 0) {
    x_dir = 1;
    circ_x = -circ_x;
  }
  if (circ_y > y_width) {
    y_dir = -1;
    circ_y = 2*y_width-circ_y;
  }
  else if (circ_y < 0) {
    y_dir = 1;
    circ_y = -circ_y;
  }
}
