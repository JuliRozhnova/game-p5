class Grid {
  preload = () => {
    this.bg = loadImage("assets/bg/ground_brown.png");
  };
  draw = () => {
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y <= WIDTH; y += SQUARE_SIDE) {
        image(this.bg, x, y, SQUARE_SIDE, SQUARE_SIDE);
      }
    }
  };
}
