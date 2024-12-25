const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
import { Board } from './game/board';
import { Snake } from './game/snake';
import { Food } from './game/food';


canvas.width = 400;
canvas.height = 400;

const board = new Board(canvas, ctx);
const snake = new Snake(board);
const food = new Food(board);

function gameLoop() {
    if (snake.checkCollision()) {
        alert('Game Over!');
        snake.reset();
        food.spawn();
    } else {
        snake.move(food);
        board.clear();
        board.draw(food, snake);
    }
    setTimeout(gameLoop, 100); // Velocidad del juego
}

food.spawn();
gameLoop();
