'use strict';

const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const source = document.getElementById('source');
const info = document.getElementById('info');
const btn = document.getElementById('btn');

let gameOver = false;
let speed = 10;

class Snake {
  constructor(x, y, size) {
    this.size = size;
    this.body = [{ x: x, y: y }];
    this.rotateX = 0;
    this.rotateY = 0;
  }
  move() {
    let newRect = undefined;
    if (this.rotateX == 1) {
      newRect = {
        x: this.body[0].x + this.size,
        y: this.body[0].y,
      };
    } else if (this.rotateX == -1) {
      newRect = {
        x: this.body[0].x - this.size,
        y: this.body[0].y,
      };
    } else if (this.rotateY == 1) {
      newRect = {
        x: this.body[0].x,
        y: this.body[0].y + this.size,
      };
    } else if (this.rotateY == -1) {
      newRect = {
        x: this.body[0].x,
        y: this.body[0].y - this.size,
      };
    }

    this.body.pop();
    let hitBody = this.body.some((value) => {
      return value.x === newRect.x && value.y === newRect.y;
    });

    if (
      newRect.x >= 0 &&
      newRect.x <= canvas.width - this.size &&
      newRect.y >= 0 &&
      newRect.y <= canvas.height - this.size &&
      hitBody === false
    ) {
      this.body.unshift(newRect);
    } else {
      gameOver = true;
      info.style = 'display: inline;';
    }
  }
  add() {
    let newBody = undefined;
    if (this.rotateX == 1) {
      newBody = {
        x: this.body[this.body.length - 1].x - this.size,
        y: this.body[this.body.length - 1].y,
      };
    } else if (this.rotateX == -1) {
      newBody = {
        x: this.body[this.body.length - 1].x + this.size,
        y: this.body[this.body.length - 1].y,
      };
    } else if (this.rotateY == 1) {
      newBody = {
        x: this.body[this.body.length - 1].x,
        y: this.body[this.body.length - 1].y - this.size,
      };
    } else if (this.rotateY == -1) {
      newBody = {
        x: this.body[this.body.length - 1].x,
        y: this.body[this.body.length - 1].y + this.size,
      };
    }
    if (newBody.x < 0 && newBody.x >= canvas.width && newBody.y < 0 && newBody.x >= canvas.height) {
    }
    this.body.push(newBody);
  }
}

class Apple {
  constructor() {
    this.x = Math.floor((Math.random() * canvas.width) / snake.size) * snake.size;
    this.y = Math.floor((Math.random() * canvas.height) / snake.size) * snake.size;
  }
}

let snake = new Snake(200, 200, 20);
let apple = new Apple();

window.onload = () => {
  loop();
};

btn.addEventListener('click', () => {
  gameOver = false;
  snake = new Snake(200, 200, 20);
  apple = new Apple();
  speed = 2;
  source.textContent = 0;
  info.style = 'display: none;';
});

function loop() {
  main();
  setInterval(main, 1000 / speed);
}

function main() {
  if (gameOver !== true) {
    if (snake.rotateX != 0 || snake.rotateY != 0) {
      snake.move();
    }
    eat();
    draw();
  }
}

function eat() {
  if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
    source.textContent = Number(source.textContent) + 1;
    apple = new Apple();
    snake.add();
    if (speed < 10) {
      speed += 0.1;
    }
  }
}

document.addEventListener('keydown', (event) => {
  let key = event.key;
  if (key === 'ArrowUp' && snake.rotateY != 1) {
    snake.rotateX = 0;
    snake.rotateY = -1;
  } else if (key === 'ArrowDown' && snake.rotateY != -1) {
    snake.rotateX = 0;
    snake.rotateY = 1;
  } else if (key === 'ArrowLeft' && snake.rotateX != 1) {
    snake.rotateX = -1;
    snake.rotateY = 0;
  } else if (key === 'ArrowRight' && snake.rotateX != -1) {
    snake.rotateX = 1;
    snake.rotateY = 0;
  }
});

function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  createRect(0, 0, canvas.width, canvas.height, '#000');
  for (let i = 0; i < snake.body.length; i++) {
    createRect(snake.body[i].x + 2.5, snake.body[i].y + 2.5, snake.size - 5, snake.size - 5, '#fff');
  }
  createRect(apple.x + 2.5, apple.y + 2.5, snake.size - 5, snake.size - 5, '#0f0');
}

function createRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}
