import { Board } from './board';
import { Food } from './food';

export class Snake {
    body: { x: number; y: number }[] = [{ x: 200, y: 200 }];
    direction = { x: 1, y: 0 }; // Por defecto, se mueve hacia la derecha

    constructor(private board: Board) {}

    move(food: Food) {
        const head = { x: this.body[0].x + this.direction.x * this.board.cellSize, y: this.body[0].y + this.direction.y * this.board.cellSize };
        this.body.unshift(head);

        if (!this.board.isFood(head, food)) {
        // Si no hay comida, elimina la cola
        this.body.pop();
        } else {
        // Si hay comida, genera nueva comida
        food.spawn();
        }
    }

    checkCollision() {
        const head = this.body[0];
        // Colisión con bordes
        if (head.x < 0 || head.y < 0 || head.x >= this.board.width || head.y >= this.board.height) {
        return true;
        }
        // Colisión con el cuerpo
        return this.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }

    reset() {
        this.body = [{ x: 200, y: 200 }];
        this.direction = { x: 1, y: 0 };
    }
}
