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
      new Phrase("I see dead people"),
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
    if (letters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed > 4) {
      this.gameOver();
    }
  }

  gameOver() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "";


    if (this.checkForWin() === true) {
      document.getElementById("game-over-message").innerHTML =
        "Congrats! You guessed the phrase!";
      overlay.className = "win";
        this.resetGame();
      return true;
    } else {
      document.getElementById(
        "game-over-message"
      ).innerHTML = `Sorry that's not the right phrase. Try again!`;
      overlay.className = "lose";
        this.resetGame();
      return false;
    }
  }
  handleInteraction(button) {
      const pressButton = button.textContent;
      button.setAttribute('disabled', 'disabled')
      if(this.activePhrase.checkLetter(pressButton) === false) {
          button.classList.add('wrong');
          this.removeLife();
      } else {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(pressButton);
          const checkWin = this.checkForWin();
          if (checkWin === true) {
              this.gameOver();
          }
      }     
  }

  resetGame() {
      ul.innerHTML = '';
      keys.forEach(button => {
          button.classList.remove('wrong');
          button.classList.remove('chosen');
          button.removeAttribute('disabled')

      })
      lives.forEach(live =>{
        live.src = 'images/liveHeart.png';
    })
  }
}
