export class Snake {
  private body: {x: number; y: number}[];
  private direction: { x: number; y: number };
  private size: number;

  constructor(size: number) 
  {
    this.size = size;
    this.body = [{ x: 10, y: 10 }];
    this.direction = {x:1 , y:0};
  }

  move(): void {
    const head = this.body[0];
    const newHead = {
      x: head.x + this.direction.x,
      y: head.y + this.direction.y
    }

    this.body.unshift(newHead);
    this.body.pop();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "lime";
    
    this.body.forEach((segment) => {
      ctx.fillRect(segment.x * this.size, segment.y * this.size, this.size, this.size);
    });
  }

  setDirection(x: number, y: number): void {
    this.direction = { x, y };
  }
}