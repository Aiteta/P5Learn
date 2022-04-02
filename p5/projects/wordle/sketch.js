let word     = 'audio';
let length   = 5;
let guesses  = 6;
let round    = 1;
let board;
let word_written = '';
let finished = false;

function setup() {
  createCanvas(x_width, y_width);
}

function draw() {
  background(0);
}

function keyTyped() {
  if (key == 'Enter') {
    submitWord();
  }
  if (key == 'Backspace') {
    word_written = word_written.slice(0,-1);
  }
  if (isAlpha(key)) {
    addKey(key.toLowerCase());
  }
}

function submitWord() {
  if (word_written.length() != 5) {
    return;
  }
  if (round < guesses) {
    round += 1;
    word_written = '';
  }
  if (round == guesses) {
    finished = true;
  }
  if (word_written == word) {
    finished = true;
  }
}

function addKey(cur_key) {
  if (round == guesses || word_written == 5) {
    return;
  }
  word_written += cur_key;
}

function isAlpha(letter) {
  if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' || letter <= 'Z')) {
    return true;
  }
  return false;
}

function create_board() {
  board = [];
  for (let i = 0; i < length; i++) {
    board.push([]);
    for (let j = 0; j < guesses; j++) {
      board[i].push(0);
    }
  }
}
