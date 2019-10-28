class Player {
  constructor() {}

  preload = () => {
    left = loadImage("assets/player/player_left.png");
    right = loadImage("assets/player/player_right.png");
    up = loadImage("assets/player/player_up.png");
    down = loadImage("assets/player/player_down.png");

    this.img = down;
  };

  setup = () => {
    this.x = this.setRandomPosition();
    this.y = this.setRandomPosition();
  };

  draw = () => {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  };

  setRandomPosition = () => {
    return (
      Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIDE)) * SQUARE_SIDE
    );
  };

  moveLeft() {
    if (this.x > 0) {
      let prX = this.x;
      this.x -= SQUARE_SIDE;
      this.img = left;

      if (this.isCollison()) {
        this.x = prX;
      }
    }
  }

  moveRight() {
    if (this.x < WIDTH - SQUARE_SIDE) {
      let prX = this.x;
      this.x += SQUARE_SIDE;
      this.img = right;

      if (this.isCollison()) {
        this.x = prX;
      }
    }
  }

  moveUp() {
    if (this.y > 0) {
      let prY = this.y;
      this.y -= SQUARE_SIDE;
      this.img = up;

      if (this.isCollison()) {
        this.y = prY;
      }
    }
  }

  moveDown() {
    if (this.y < WIDTH - SQUARE_SIDE) {
      let prY = this.y;
      this.y += SQUARE_SIDE;
      this.img = down;

      if (this.isCollison()) {
        this.y = prY;
      }
    }
  }

  isCollison = () => {
    let collision = false;
    game.obstacles.obstaclesData.forEach(obstacle => {
      if (this.x === obstacle[0] && this.y === obstacle[1]) {
        game.decreaseLife();
        collision = true;
      }
    });

    return collision;
  };
}
