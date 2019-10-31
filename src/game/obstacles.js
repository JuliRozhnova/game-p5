class Obstacles {
  preload = () => {
    this.spritesheet = loadImage(
      "../../assets/obstacles/crates_spritesheet.png"
    );
  };

  setup = () => {
    this.x = 0;
    this.y = 0;
    this.obstaclesData = this.generateObstacles();
  };

  draw = () => {
    this.displayObstacles();
  };

  setRandomPosition = () => {
    return (
      Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIDE)) * SQUARE_SIDE
    );
  };

  setRandomKey = object => {
    var keys = Object.keys(object);
    return object[keys[(keys.length * Math.random()) << 0]];
  };

  generateObstacles = () => {
    let randomObstacleMap = this.setRandomKey(obstacleMaps);
    let randomColor = 0;

    for (let obstacle of randomObstacleMap) {
      randomColor = this.setRandomKey(blocks);
      obstacle.push(randomColor);
    }

    this.obstaclesGrid = this.generateObstaclesGrid(randomObstacleMap);
    // Grid only with obstacles for alien movement
    this.levelGrid = JSON.parse(JSON.stringify(this.obstaclesGrid));

    return randomObstacleMap;
  };

  displayObstacles = () => {
    for (let obstacle of this.obstaclesData) {
      image(
        this.spritesheet.get(obstacle[2][0], 0, 256, 256),
        obstacle[0],
        obstacle[1],
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    }
  };

  /** GENERATE GAME MAP WITH OBSTACLES */
  generateObstaclesGrid = array => {
    let gameGrid = Array.from({ length: 10 }, _ => {
      return Array.from({ length: 10 });
    });

    for (let i = 0; i < array.length; i++) {
      let obstacle = array[i];
      const x = obstacle[0] / SQUARE_SIDE;
      const y = obstacle[1] / SQUARE_SIDE;
      gameGrid[x][y] = obstacle;
    }

    return gameGrid;
  };
}
