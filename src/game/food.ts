import { Board } from './board';

export class Food {
    position = { x: 0, y: 0 };

    constructor(private board: Board) {}

    spawn() {
        const cols = this.board.width / this.board.cellSize;
        const rows = this.board.height / this.board.cellSize;
        this.position = {
        x: Math.floor(Math.random() * cols) * this.board.cellSize,
        y: Math.floor(Math.random() * rows) * this.board.cellSize,
        };
  }
}
