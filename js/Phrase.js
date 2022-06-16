/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseDiv = document.getElementById('phrase');
const ul = phraseDiv.querySelector('ul');

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();

    }

    //this method selects the phrase element and sets it to an empty string
    //the this.phrase is then split into letter
    //finally if the phrase has a space an empty li is added to the Ul 
    // else if there's a letter then a letter is added
    
    addPhraseToDisplay() {
        ul.innerHTML= '';
        let phraseLetters = this.phrase.split('');

        phraseLetters.forEach((letter) => {
            if(letter === ' ') {
                ul.innerHTML += `<li class='space'> </li>`;

            } else {
                ul.innerHTML += `<li class='hide letter ${letter}'> ${letter}</li>`
            }
        });

    }
};