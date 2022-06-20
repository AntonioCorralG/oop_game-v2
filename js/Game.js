
//game class that sets the blueprint for the phrases
//sets the constructor to t
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

//this gets a random phrase by first creating a random number to the length of this.phrases
// then returns this.phrases with value held in the random index number
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  //start game function that sets the overlay to none
  //sets the active phrase to the return of the getRandomPhrase
  //then adds that activephrase to the addPhraseDisplay
  startGame() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

//this checks for the win of the game by looking at the .hide classes
//if there are 0 hidden that means that all of the letters have been shown and this return true else it returns false
  checkForWin() {
    const letters = document.querySelectorAll(".hide");
    if (letters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

//this removes the hearts on the display and adds them to missed
//after 4 hearts that mens the game is over and the gameOver method is called
  removeLife() {
    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed > 4) {
      this.gameOver();
    }
  }

  //the gameOver method checks to see if the checkForWin function is true
  //if it is then it adds a congragulatory game over message and the classname 'Win' as well as calling the resetGame method
  //on the other hand the else if the check for win is false then the losing equivalent is displayed
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

  //this is a lot of what makes the game work
  //first if the pressed button by the user, the text content of the button, is === to false, meaning it's not found in the phrase
  //the class wrong is added to the button attribute and a life is removed by calling the removeLife function
  //else if it is true then the class chosen is added to the button and the letter is shown
  // a nested if is used in the else to then see if the user won if so, then the gamOver function is called
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

  //this reset the game by removing the added wrong, chosen, and disabled classes and attribute
  //then for each image it adds the tries back
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
