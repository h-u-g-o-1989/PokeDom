class Game {
  constructor() {
    this.initialiseGame();
  }

  initialiseGame() {
    this.background = new Background(bkImage);
    this.player = new Player(CELL_SIZE * 3, CELL_SIZE * 5);
  }
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += CELL_SIZE) {
      line(i, 0, i, WIDTH); // x1 y1 x2 y2
      line(0, i, HEIGHT, i); // x1 y1 x2 y2
    }
  }
  draw() {
    this.background.draw();
    this.player.draw();
  }
}