export class Board {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;


  constructor(canvasId: string, width: number, height:number) 
  {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error(`Canvas width id "${canvasId}" not found`);
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Unable to get canvas context");
    }

    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }
}