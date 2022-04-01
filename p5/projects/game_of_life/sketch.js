let board;
let new_board;
let m = 20;
let n = 20;


function setup() {
  createCanvas(600, 600);
  board = create_board(m, n);
}

function draw() {
  background(0);
  stroke(255);
  fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j]) {
        fill(255);
      }
      rect(Math.floor(i*(width/m)),Math.floor(j*(height/n)),Math.floor(width/m),Math.floor(height/n));
      fill(0);
    }
  }
}

function mousePressed() {
  i = Math.floor(mouseX/(width/m));
  j = Math.floor(mouseY/(height/n));
  board[i][j] = !board[i][j];
}


function keyPressed() {
  board = step(board);
}

function step(o_board) {
  new_board = create_board(m,n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      new_board[i][j] = o_board[i][j];
      let num = num_neighbors(o_board,i,j,m,n);
      if (o_board[i][j] == 1 && (num < 2 || num > 3)) {
        new_board[i][j] = 0;
      }
      if (o_board[i][j] == 0 && num == 3) {
        new_board[i][j] = 1;
      }
    }
  }
  return new_board;
}

function num_neighbors(board,i,j,m,n) {
  let out = 0;
  if (i != 0) {
    out += board[i-1][j]
  }
  if (j != 0) {
    out += board[i][j-1];
  }
  if (i != m-1) {
    out += board[i+1][j];
  }
  if (j != n-1) {
    out += board[i][j+1];
  }
  if (i != 0 && j != 0) {
    out += board[i-1][j-1];
  }
  if (i != 0 && j != n-1) {
    out += board[i-1][j+1];
  }
  if (i != m-1 && j != 0) {
    out += board[i+1][j-1];
  }
  if (i != m-1 && j != n-1) {
    out += board[i+1][j+1];
  }
  return out;
}

function create_board(w,h) {
  let out = [];
  for (let i = 0; i < w; i++) {
    out.push([]);
    for (let j = 0; j < h; j++) {
      out[i].push(0);
    }
  }
  return out;
}
