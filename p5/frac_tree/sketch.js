let iter  = 12;
let scale = 0.6;

function setup() {
  createCanvas(1000,601);
}

function draw() {
  background(0);
  stroke(255);
  draw_line(Math.floor(width/2),height,200,3*Math.PI/2,0);
}


function draw_line(startX,startY,len,angle,i) {
  let endX = len*Math.cos(angle)+startX;
  let endY = len*Math.sin(angle)+startY;
  line(startX,startY,endX,endY);
  if (i > iter) {
    return;
  }
  draw_line(endX,endY,len*scale,angle+Math.PI/4,i+1);
  draw_line(endX,endY,len*scale,angle-Math.PI/4,i+1);
}
