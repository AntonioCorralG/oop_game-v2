/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      {
        phrase: "May the force be with you",
      },
      {
        phrase: "There is no place like home",
      },
      {
        phrase: "You are going to need a bigger boat",
      },
      {
        phrase: "I will be back",
      },
      {
        phrase: "I see dead people",
      },
    ];
    this.activePhrase = null;
  }
  getRandomPhrase () {
      let random = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[random]
  }
}
