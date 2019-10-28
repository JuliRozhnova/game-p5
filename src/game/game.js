class Game {
  constructor() {
    this.grid = new Grid();
    this.obstacles = new Obstacles();
    this.idiom = new Idiom();
    this.letters = new Letters();
    this.player = new Player();
  }

  preload = () => {
    this.grid.preload();
    this.player.preload();
    this.letters.preload();
    this.obstacles.preload();
  };

  setup = () => {
    this.player.setup();
    this.idiom.setup();
    this.letters.setup();
    this.obstacles.setup();
  };

  draw = () => {
    this.grid.draw();
    this.obstacles.draw();
    this.letters.draw();
    this.player.draw();
  };

  /** MAIN */
  startGame = () => {
    game.generateNewGameMap();
    game.generateLives();
    prevGames = [];
  };

  generateNewGameMap = () => {
    game.setup();
    word.innerText = "";
    word.innerText = templateWord.join(" ");
  };

  gameFinish = () => {
    setTimeout(() => {
      modalNewGame.setAttribute("data-modal", "visible");
      gameStopped = true;
    }, 1000);
  };

  gameOver = () => {
    this.resetScore();
    modalRestart.setAttribute("data-modal", "visible");
    gameStopped = true;
  };

  checkIfWin = () => {
    let win = true;
    for (let elem of templateWord) {
      if (elem === "_") {
        win = false;
        break;
      }
    }
    return win;
  };

  /** SCORE */
  resetScore = () => {
    scoreBox.innerText = "0";
    score = 0;
  };

  collectScore = () => {
    score += 1;
    scoreBox.innerText = score;
  };

  /** LIVES */
  generateLives = () => {
    let playerTemplate = document.getElementById("similar-live-template");
    livesBox.innerHTML = "";
    liveArr = [];

    let i = 0,
      element;

    do {
      i += 1;
      liveArr.push(i);
      element = playerTemplate.content.cloneNode(true);
      livesBox.appendChild(element);
    } while (i < totalLives);
  };

  decreaseLife = () => {
    livesBox
      .getElementsByTagName("img")
      [liveArr.length - 1].classList.add("hide");
    liveArr.length > 1 ? liveArr.pop() : game.gameOver();
  };

  /** LETTERS */
  collectLetter = () => {
    for (let i = 0; i < game.letters.letterData.length; i++) {
      let letter = game.letters.letterData[i];
      if (letter[0] === game.player.x && letter[1] === game.player.y) {
        game.letters.letterData.splice(i, 1);
        // collect score
        this.collectScore();
        // this happens on collectLetter
        this.showLetter(letter[2]);

        if (this.checkIfWin()) {
          prevGames.length < totalGames
            ? this.generateNewGameMap()
            : this.gameFinish();
        }
      }
    }
  };

  showLetter = letter => {
    let genWord = "";
    for (let i = 0; i < splitedWord.length; i++) {
      if (splitedWord[i] === letter && templateWord[i] !== letter) {
        templateWord[i] = letter;
        genWord = templateWord.join(" ");
        word.innerText = genWord;
        break;
      }
    }
  };
}
