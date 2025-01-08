import { Board } from "./game/board";
import { Snake } from "./game/snake";
import { Food } from "./game/food";

// Configuración inicial
const board = new Board("gameCanvas", 400, 400);
const snake = new Snake(20);
const food = new Food(10);

let lastUpdateTime = 0;
const snakeSpeed = 150;

food.spawn(board.getCanvas().width, board.getCanvas().height);


function gameLoop(currentTime: number) {
  const deltaTime = currentTime - lastUpdateTime;

  if (deltaTime > snakeSpeed) {
    board.clear();
    snake.move();
    snake.draw(board.getContext());
    food.draw(board.getContext());
  }
  
  lastUpdateTime = currentTime;

  if (checkCollision()) {
    alert("Game Over");
    resetGame();
  }

  requestAnimationFrame(gameLoop);
}

function resetGame() {
  // Reiniciar el juego
  snake.reset();
  food.spawn(board.getCanvas().width, board.getCanvas().height);
}

function checkCollision(): boolean {
  // Detecta si la serpiente colisiona consigo misma o con los bordes
  return false; // Agrega la lógica aquí
}

// Listeners para cambiar la dirección
document.addEventListener("keydown", (event) => {
  switch(event.key) 
  {
    case "ArrowUp":
      snake.setDirection(0, -1);
      break;
    case "ArrowDown":
      snake.setDirection(0, 1);
      break;
    case "ArrowLeft":
      snake.setDirection(-1, 0);
      break;
    case "ArrowRight":
      snake.setDirection(1, 0);
      break;
  }
});

gameLoop(1);