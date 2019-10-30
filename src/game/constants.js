/** Define text blocks */
const body = document.querySelector("body");
const textLeft = document.querySelector(".game-text-first");
const textRight = document.querySelector(".game-text-second");
const word = document.getElementById("game-text-guessed");
const scoreBox = document.getElementById("game-score");
const totalScoreBox = document.getElementById("total-score");
const livesBox = document.querySelector(".similar-live-container");
const countBox = document.getElementById("game-time");
const totalCountBox = document.getElementById("total-time");
const modalRestart = document.getElementById("modal-restart");
const modalStart = document.getElementById("modal-start");
const modalNewGame = document.getElementById("modal-finish");

/** Define props for game board */
const WIDTH = 500;
const HEIGHT = WIDTH;
const SQUARE_SIDE = WIDTH / 10;

const LETTER_SIDE = SQUARE_SIDE / 2;

/** Define keyPress buttons */
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;
const ENTER = 13;
