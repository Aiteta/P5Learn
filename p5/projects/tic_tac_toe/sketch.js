let board;
let player = 0;
let finished = false;
let winner = 0;

function setup() {
  createCanvas(600, 600);
  create_board();
}

function draw() {
  background(0);
  draw_board();
  if (mouseX > Math.floor(4*width/5) && mouseY > Math.floor(4*height/5) && mouseX < width && mouseY < height) {
        fill(255,0,0);
  }
  rect(Math.floor(4*width/5),Math.floor(4*height/5),width,height);
  if (!finished && check_win()) {
    winner = check_win();
    finished = true;
  }
}

function create_board() {
  background(0);
  board = [];
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push(0);
    }
  }
}

function draw_board() {
  stroke(255);
  fill(0);
  line(Math.floor(2*width/5), Math.floor(height/5), Math.floor(2*width/5), Math.floor(4*height/5));
  line(Math.floor(3*width/5), Math.floor(height/5), Math.floor(3*width/5), Math.floor(4*height/5));
  line(Math.floor(width/5), Math.floor(2*height/5), Math.floor(4*width/5), Math.floor(2*height/5));
  line(Math.floor(width/5), Math.floor(3*height/5), Math.floor(4*width/5), Math.floor(3*height/5));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 1) {
        line(Math.floor((i+1.25)*width/5),Math.floor((j+1.25)*height/5),Math.floor((i+1.75)*width/5),Math.floor((j+1.75)*height/5));
        line(Math.floor((i+1.25)*width/5),Math.floor((j+1.75)*height/5),Math.floor((i+1.75)*width/5),Math.floor((j+1.25)*height/5));
      }
      else if (board[i][j] == 2) {
        ellipse(Math.floor((i+1.5)*width/5),Math.floor((j+1.5)*height/5),Math.floor(width/10),Math.floor(height/10));
      }
    }
  }
}

function mousePressed() {
  let i = Math.floor(mouseX/(width/5));
  let j = Math.floor(mouseY/(height/5));
  if (i == 4 && j == 4) {
    create_board();
    player = 0;
    finished = false;
    winner = 0;
  }
  if (finished) {
    return;
  }
  if (i == 0 || i == 4 || j == 0 || j == 4) {
    return;
  }
  i--;
  j--;
  if (board[i][j] != 0) {
    return;
  }
  board[i][j] = player+1;
  player = !player;
}

function check_win() {
  if (board[0][0] && board[0][0] == board[0][1] && board[0][0] == board[0][2]) {
    return board[0][0];
  }
  if (board[1][0] && board[1][0] == board[1][1] && board[1][0] == board[1][2]) {
    return board[1][0];
  }
  if (board[2][0] && board[2][0] == board[2][1] && board[2][0] == board[2][2]) {
    return board[2][0];
  }
  if (board[0][0] && board[0][0] == board[1][0] && board[0][0] == board[2][0]) {
    return board[0][0];
  }
  if (board[0][1] && board[0][1] == board[1][1] && board[0][1] == board[2][1]) {
    return board[0][1];
  }
  if (board[0][2] && board[0][2] == board[1][2] && board[0][2] == board[2][2]) {
    return board[0][2];
  }
  if (board[0][0] && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
    return board[0][0];
  }
  if (board[2][0] && board[2][0] == board[1][1] && board[2][0] == board[0][2]) {
    return board[2][0];
  }
  return 0;
}
