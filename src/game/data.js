/** Define images for player */
let up;
let down;
let left;
let right;
let downAnimation;

let idioms = [
  {
    string: "To be afraid of one’s own shadow",
    word: "shadow"
  },
  {
    string: "To make one’s blood run cold",
    word: "blood"
  },
  {
    string: "To risk life and limb",
    word: "limb"
  },
  {
    string: "To play with fire",
    word: "fire"
  },
  {
    string: "To shake like a leaf",
    word: "leaf"
  },
  {
    string: "To scare someone out of their wits",
    word: "wits"
  }
];

/** Sprite size */
let size = 256;

let letters = {
  a: [size * 3, size * 4],
  b: [size * 3, size * 3],
  c: [size * 3, size * 2],
  d: [size * 3, size],
  e: [size * 3, 0],
  f: [size * 2, size * 6],
  g: [size * 2, size * 5],
  h: [size * 2, size * 4],
  i: [size * 2, size * 3],
  j: [size * 2, size * 2],
  k: [size * 2, size],
  l: [size * 2, 0],
  m: [size * 3, size * 5],
  n: [size, size * 5],
  o: [size, size * 4],
  p: [size, size * 3],
  q: [size, size * 2],
  r: [size, size],
  s: [size, 0],
  t: [0, size * 6],
  u: [0, size * 5],
  v: [0, size * 4],
  w: [0, size * 3],
  x: [0, size * 2],
  y: [0, size],
  z: [0, 0]
};

let blocks = {
  blue: [0, 0],
  brown: [size, 0],
  red: [size * 2, 0],
  green: [size * 3, 0],
  navy: [size * 4, 0]
};

/** Array from word */
let splitedWord = null;
let templateWord = [];

/** Collect score */
let score = 0;

/** Game setups */
let gameStopped = true;
let prevGames = [];
let liveArr = [];
let totalGames = 5; // TODO: Don't try 6
let totalLives = 5;
let enemySpeed;

/** Sounds */
let bump;
let collect;
let song;
let hit;

/** Game time counter */
let countdown;
let counter;
