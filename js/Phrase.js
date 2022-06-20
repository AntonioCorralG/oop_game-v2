
//Phrase class that sets the blueprint for the phrases
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
    phraseLetters.forEach((letter) => {
      if (letter === " ") {
        ul.innerHTML += `<li class="space"> </li>`;
      } else {
        ul.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
  }
//this check if the phrase includes a letter in the phrase and returns true if so
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }


//this is a for loop that that shows the letters that match the phrase 
  showMatchedLetter(letter) {
    let phraseLetters = ul.children;
    for (let i = 0; i < phraseLetters.length; i++) {
      if (letter === phraseLetters[i].textContent) {
        phraseLetters[i].classList.remove('hide');
        phraseLetters[i].classList.add('show');
      }
    }
  }
  
}
