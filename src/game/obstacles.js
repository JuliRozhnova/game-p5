class Obstacles {
  constructor() {
    this.obstaclesNumer = 20;
  }
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

  setRandomColor = object => {
    var keys = Object.keys(object);
    return object[keys[(keys.length * Math.random()) << 0]];
  };

  generateObstacles = () => {
    let obstacle_x = 0;
    let obstacle_y = 0;
    let obstaclesArr = [];
    let randomColor = 0;
    for (let i = 0; i < this.obstaclesNumer; i++) {
      obstacle_x = this.setRandomPosition();
      obstacle_y = this.setRandomPosition();
      randomColor = this.setRandomColor(blocks);

      while (this.checkIfRepeat(obstaclesArr, obstacle_x, obstacle_y)) {
        obstacle_x = this.setRandomPosition();
        obstacle_y = this.setRandomPosition();
      }

      obstaclesArr.push([obstacle_x, obstacle_y, randomColor]);
    }
    // console.log(JSON.stringify(obstaclesArr));
    return obstaclesArr;
  };

  checkIfRepeat = (array, rX, rY) => {
    for (let cords of array) {
      if (
        (cords[0] === rX && cords[1] === rY) ||
        (game.player.x === rX && game.player.y === rY) ||
        (game.letters.letterData[0][0] === rX &&
          game.letters.letterData[0][1] === rY) ||
        (game.letters.letterData[1][0] === rX &&
          game.letters.letterData[1][1] === rY) ||
        (game.letters.letterData[2][0] === rX &&
          game.letters.letterData[2][1] === rY) ||
        (game.letters.letterData[3][0] === rX &&
          game.letters.letterData[3][1] === rY)
      ) {
        return true;
      }
    }
    return false;
  };

  displayObstacles = () => {
    for (let data of this.obstaclesData) {
      image(
        this.spritesheet.get(data[2][0], 0, 256, 256),
        data[0],
        data[1],
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    }
  };
}
