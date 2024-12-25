import { Board } from "./game/board";
import { Snake } from "./game/snake";
import { Food } from "./game/food";

// Configuración inicial
const board = new Board("gameCanvas", 400, 400);
const snake = new Snake(20);
const food = new Food(20);

food.spawn(board.getCanvas().width, board.getCanvas().height);

function gameLoop() {
  board.clear();
  snake.move();
  snake.draw(board.getContext());
  food.draw(board.getContext());

  requestAnimationFrame(gameLoop);
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

gameLoop();