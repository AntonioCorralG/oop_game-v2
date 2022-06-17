/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const ul = document.getElementById("phrase").firstElementChild;

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //this method selects the phrase element and sets it to an empty string
  //the this.phrase is then split into letter
  //finally if the phrase has a space an empty li is added to the Ul
  // else if there's a letter then a letter is added

  addPhraseToDisplay() {
    let phraseLetters = this.phrase.split("");
    console.log(phraseLetters);
    phraseLetters.forEach((letter) => {
      if (letter === " ") {
        ul.innerHTML += `<li class="space"> </li>`;
      } else {
        ul.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
  }

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    let phraseLetters = ul.children;
    for (let i = 0; i < phraseLetters.length; i++) {
      if (letter === phraseLetters[i].textContent) {
        phraseLetters[i].classList.remove('hide');
        phraseLetters[i].classList.add('show');
      }
    }
  }

  //here we need to check the letter selected by the user and determine if it matches the phrase
  //if it does then display on screen
}
