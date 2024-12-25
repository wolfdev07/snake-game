import { Snake } from './snake';
import { Food } from './food';

export class Board {
    cellSize = 20;

    constructor(public canvas: HTMLCanvasElement, public ctx: CanvasRenderingContext2D) {}

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    isFood(position: { x: number; y: number }, food: Food): boolean {
        return position.x === food.position.x && position.y === food.position.y;
    }

    clearFood() {
        // Lógica para limpiar comida después de comer
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    draw(food: Food, snake: Snake) {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(food.position.x, food.position.y, this.cellSize, this.cellSize);

        this.ctx.fillStyle = 'lime';
        snake.body.forEach(segment => {
        this.ctx.fillRect(segment.x, segment.y, this.cellSize, this.cellSize);
        });
    }
}
