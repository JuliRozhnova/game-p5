class Player {
  constructor() {
    this.name = "Garry";
  }

  preload = () => {
    // this.bump = loadSound("assets/sounds/damage3.wav");
    left = loadImage("assets/player/player_left.png");
    right = loadImage("assets/player/player_right.png");
    up = loadImage("assets/player/player_up.png");
    down = loadImage("assets/player/player_down.png");

    this.img = down;
  };

  setup = () => {
    this.setupPlayer();
  };

  draw = () => {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  };

  setupPlayer = () => {
    let arr = [];
    game.insertInGrid(game.obstacles.obstaclesGrid, this.name, arr);
    // Hardcode x & y pos for only one player
    this.x = arr[0][0];
    this.y = arr[0][1];
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
