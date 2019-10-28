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

  setRandomPosition = () => {
    return (
      Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIDE)) * SQUARE_SIDE
    );
  };

  loadLetters = () => {
    splitedWord = idioms[game.idiom.dice].word.split("");
    templateWord = [];
    let arr = [];
    let letter_x = 0;
    let letter_y = 0;

    for (let letter of splitedWord) {
      letter_x = this.setRandomPosition();
      letter_y = this.setRandomPosition();

      while (this.checkIfRepeat(arr, letter_x, letter_y)) {
        letter_x = this.setRandomPosition();
        letter_y = this.setRandomPosition();
      }

      arr.push([letter_x, letter_y, letter]);
    }

    for (let i = 0; i < splitedWord.length; i++) {
      templateWord.push("_");
    }

    return arr;
  };

  checkIfRepeat = (array, rX, rY) => {
    for (let cords of array) {
      if (
        (cords[0] === rX && cords[1] === rY) ||
        (game.player.x === rX && game.player.y === rY)
      ) {
        return true;
      }
    }
    return false;
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
