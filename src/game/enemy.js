const easystar = new EasyStar.js();

class Enemy {
  constructor() {
    this.name = "Alien";
    this.speed = 25;
  }
  preload = () => {
    let enemy1 = loadImage(`../../assets/obstacles/alien-0.png`);
    let enemy2 = loadImage(`../../assets/obstacles/alien-1.png`);
    let enemy3 = loadImage(`../../assets/obstacles/alien-2.png`);
    let enemy4 = loadImage(`../../assets/obstacles/alien-3.png`);
    let enemy5 = loadImage(`../../assets/obstacles/alien-4.png`);
    this.allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
  };

  setup = random => {
    this.setupEnemy(random);
    this.setupGrid();
  };

  draw = () => {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    if (frameCount % this.speed === 0 && !gameStopped) {
      this.move();
    }
  };

  move = () => {
    curEnemyX = game.enemy.x / SQUARE_SIDE;
    curEnemyY = game.enemy.y / SQUARE_SIDE;
    curPlayerX = game.player.x / SQUARE_SIDE;
    curPlayerY = game.player.y / SQUARE_SIDE;

    easystar.findPath(curEnemyX, curEnemyY, curPlayerX, curPlayerY, function(
      path
    ) {
      path.length
        ? ((game.enemy.x = path[1].x * SQUARE_SIDE),
          (game.enemy.y = path[1].y * SQUARE_SIDE),
          curPlayerX === path[1].x &&
            curPlayerY === path[1].y &&
            game.decreaseLife())
        : game.decreaseLife();
    });

    easystar.calculate();
  };

  setupGrid = () => {
    /** Creating a map using a 2 dimensional array
     * Inside the array values of 0 will represent walkable paths,
     * while values of 1 will be our “walls”
     **/
    let level = game.obstacles.levelGrid;
    for (let row of level) {
      row.map((item, index, array) => {
        !item ? (array[index] = 0) : (array[index] = 1);
      });
    }
    let levelGrid = level[0].map((col, i) => level.map(row => row[i]));
    easystar.setGrid(levelGrid);
    easystar.setAcceptableTiles([0]); // we want the 0 tiles to be walkable
  };

  setupEnemy = random => {
    let arr = [];
    game.insertInGrid(game.obstacles.obstaclesGrid, this.name, arr);
    this.x = arr[0][0];
    this.y = arr[0][1];
    this.img = this.allEnemies[random];
  };
}
