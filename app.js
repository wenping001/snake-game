const COLS = 25;
const ROWS = 18;
const PIXEL = 30;

const MIN = 0;
const COL_MAX = 25 * 30;
const ROW_MAX = 18 * 30;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function init() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      ctx.strokeStyle = 'blue';
      ctx.strokeRect(j * PIXEL, i * PIXEL, PIXEL, PIXEL);
    }
  }
}

function createRandomDot() {
  const randomX = (Math.random() * 24).toFixed(0);
  const randomY = (Math.random() * 17).toFixed(0);
  console.log(randomX, randomY);
  ctx.fillStyle = 'red';
  ctx.fillRect(randomX * PIXEL, randomY * PIXEL, PIXEL, PIXEL);
}

function controllSnake() {}

init();

createRandomDot();
