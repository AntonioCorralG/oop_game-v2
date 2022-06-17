/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("May the force be with you"),
      new Phrase("There is no place like home"),
      new Phrase("You are going to need a bigger boat"),
      new Phrase("I will be back"),
      new Phrase("I see dead people")
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  startGame() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  checkForWin() {
    const letters = document.querySelectorAll(".hide");
    if (letters === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    const missedLife = document.querySelectorAll('.tries img');
        missedLife[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if(this.missed > 4) {
            this.gameOver()
        }

  }

  gameOver() {}
}
