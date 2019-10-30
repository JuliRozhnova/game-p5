class Moving {
  constructor() {
    this.name = "Alien";
  }
  preload = () => {
    let alien1 = loadImage(`../../assets/obstacles/alien-0.png`);
    let alien2 = loadImage(`../../assets/obstacles/alien-1.png`);
    let alien3 = loadImage(`../../assets/obstacles/alien-2.png`);
    let alien4 = loadImage(`../../assets/obstacles/alien-3.png`);
    let alien5 = loadImage(`../../assets/obstacles/alien-4.png`);
    this.allAliens = [alien1, alien2, alien3, alien4, alien5];
  };

  setup = random => {
    this.setupMoving(random);
  };

  draw = () => {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);

    if (frameCount % 20 === 0 && !gameStopped) {
      this.move();
    }
  };

  move = () => {
    let gary = { x: game.player.x, y: game.player.y };
    let direction = "";

    const checkPosition = (newX, newY) => {
      const target =
        game.obstacles.obstaclesGridOnly[Math.floor(newX / SQUARE_SIDE)][
          Math.floor(newY / SQUARE_SIDE)
        ];
      if (!target) return true;
    };

    if (this.x === gary.x && this.y === gary.y) {
      game.decreaseLife();
    }

    if (this.x > gary.x && checkPosition(this.x - SQUARE_SIDE, this.y)) {
      direction = "left";
    } else if (this.x < gary.x && checkPosition(this.x + SQUARE_SIDE, this.y)) {
      direction = "right";
    }

    if (this.y > gary.y && checkPosition(this.x, this.y - SQUARE_SIDE)) {
      direction = "up";
    } else if (this.y < gary.y && checkPosition(this.x, this.y + SQUARE_SIDE)) {
      direction = "down";
    }

    switch (direction) {
      case "up":
        this.y -= SQUARE_SIDE;
        break;
      case "down":
        this.y += SQUARE_SIDE;
        break;
      case "left":
        this.x -= SQUARE_SIDE;
        break;
      case "right":
        this.x += SQUARE_SIDE;
        break;
    }
  };
  setupMoving = random => {
    let arr = [];
    game.insertInGrid(game.obstacles.obstaclesGrid, this.name, arr);
    this.x = arr[0][0];
    this.y = arr[0][1];
    this.img = this.allAliens[random];
  };
}
