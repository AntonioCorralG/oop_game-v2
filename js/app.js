/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGame = document.getElementById('btn__reset');
let game; 

startGame.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
})

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);