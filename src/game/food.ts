export class Food {
  private position: { x: number; y: number } | null = null;
  private size: number;

  constructor(size: number) 
  {
    this.size = size;
  }

  spawn(boardWidth: number, boardHeight: number): void {
    const maxX = Math.floor(boardWidth / this.size);
    const maxY = Math.floor(boardHeight / this.size);
    this.position = {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.position) return;
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x * this.size, this.position.y * this.size, this.size, this.size);
  }

  getPosition(): { x: number; y: number } | null {
    return this.position;
  }
}