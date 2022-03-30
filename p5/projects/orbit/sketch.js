let ball1 = new Ball(500,200,15,0,1000);
let ball2 = new Ball(300,500,0,-10,1000);
let ball3 = new Ball(700,500,0,12,1000);
let all_balls = [ball1,ball2,ball3];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  for (let i = 0; i < all_balls.length; i++) {
    all_balls[i].calc_all_forces(all_balls);
  }
  for (let i = 0; i < all_balls.length; i++) {
    all_balls[i].update();
  }
}
