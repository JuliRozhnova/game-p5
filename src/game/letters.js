class Letters {
  preload = () => {
    this.spritesheet = loadImage("assets/letters/blue_spritesheet.png");
  };

  setup = () => {
    this.x = 0;
    this.y = 0;
    this.letterData = this.loadLetters();
  };

  draw = () => {
    this.displayLetters();
  };

  loadLetters = () => {
    splitedWord = idioms[game.idiom.dice].word.split("");
    templateWord = [];
    let arr = [];

    for (let letter of splitedWord) {
      game.insertInGrid(game.obstacles.obstaclesGrid, letter, arr);
    }

    for (let i = 0; i < splitedWord.length; i++) {
      templateWord.push("_");
    }

    return arr;
  };

  displayLetters = () => {
    for (let data of this.letterData) {
      image(
        this.spritesheet.get(
          letters[data[2]][0],
          letters[data[2]][1],
          256,
          256
        ),
        data[0],
        data[1],
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    }
  };
}
