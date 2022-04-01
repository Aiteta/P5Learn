let iter   = 12;
let scale  = 0.8;
let del_an = Math.PI-0.5;

function setup() {
  createCanvas(1000,750);
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
  draw_line(endX,endY,len*scale,angle+del_an,i+1);
  draw_line(endX,endY,len*scale,angle-del_an,i+1);
}
