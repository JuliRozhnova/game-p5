const game = new Game();

preload = () => {
  game.preload();
};

setup = () => {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-canvas");
  game.startGame();
};

draw = () => {
  clear();
  game.draw();
};

keyPressed = () => {
  if (!gameStopped) {
    switch (keyCode) {
      case LEFT_ARROW:
        game.player.moveLeft();
        break;
      case RIGHT_ARROW:
        game.player.moveRight();
        break;
      case UP_ARROW:
        game.player.moveUp();
        break;
      case DOWN_ARROW:
        game.player.moveDown();
        break;
      case ENTER:
        game.collectLetter();
        break;
      default:
        return false;
    }
  }
};

document.getElementById("game-start").onclick = function() {
  modalStart.setAttribute("data-modal", "hidden");
  game.startGame();
};

document.getElementById("game-restart").onclick = function() {
  modalRestart.setAttribute("data-modal", "hidden");
  game.startGame();
};

document.getElementById("game-new").onclick = function() {
  modalNewGame.setAttribute("data-modal", "hidden");
  game.startGame();
};
