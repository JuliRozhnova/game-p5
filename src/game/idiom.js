class Idiom {
  setup = () => {
    this.dice = Math.floor(Math.random() * idioms.length);

    while (prevGames.indexOf(this.dice) !== -1) {
      this.dice = Math.floor(Math.random() * idioms.length);
    }
    prevGames.push(this.dice);
    this.randomIdiom = idioms[this.dice];

    this.generateIdiom(this.randomIdiom);
  };

  placeText = (array, index, reverse) => {
    let part = reverse
      ? Array.from(array).splice(0, index)
      : Array.from(array).splice(index + 1);
    let text = reverse ? textLeft : textRight;
    return part ? (text.innerText = part.join(" ")) : null;
  };

  generateIdiom = idiom => {
    let array = idiom.string.split(" ");
    let index = array.indexOf(idiom.word);

    this.placeText(array, index, true);
    this.placeText(array, index, false);
  };
}
