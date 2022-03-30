let x_width = 15000;
let y_width = 15000;
iter = 110;
finished = false;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let k = 0;
let inside = 0;
let a_ = 0;
let color = [255,0,0, 255,0,127, 255,0,255, 127,0,255, 0,0,255, 0,127,255, 0,255,255, 0,255,127, 0,255,0, 127,255,0, 255,255,0, 255,127,0];

function setup() {
  createCanvas(x_width, y_width);
  pixelDensity(1);
}

function draw() {
  if (!finished){
  loadPixels();
  for (let i = 0; i < x_width; i++) {
    if (i%100  == 0) {
      console.log(i);
    }
    for (let j = 0; j < y_width; j++) {
      k = is_set(4/(x_width-1)*i-2,-4/(y_width-1)*j+2);
      if (k == iter) {
        pixels[4*(i+x_width*j) + 0] = 0;
        pixels[4*(i+x_width*j) + 1] = 0;
        pixels[4*(i+x_width*j) + 2] = 0;
        pixels[4*(i+x_width*j) + 3] = 255;
      }
      else {
        k = k%12;
        pixels[4*(i+x_width*j) + 0] = color[k*3+0];
        pixels[4*(i+x_width*j) + 1] = color[k*3+1];
        pixels[4*(i+x_width*j) + 2] = color[k*3+2];
        pixels[4*(i+x_width*j) + 3] = 255;
      }
    }
  }}
  finished = true;
  updatePixels();
}


function is_set(c,d) {
  a = 0;
  b = 0;
  k = 0;
  while (k < iter) {
    a_ = a;
    a = Math.pow(a,2)-Math.pow(b,2)+c;
    b = 2*a_*b+d;
    if (Math.pow(a,2)+Math.pow(b,2) > 4) {
      break;
    }
    k++;
  }
  return k;
}
