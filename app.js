const COLS = 15;
const ROWS = 15;

const board = document.getElementById('board');

for (let i = 0; i < COLS; i++) {
  for (let j = 0; j < ROWS; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}
