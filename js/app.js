/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGame = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key')
const lives = document.querySelectorAll(".tries img");
const ul = document.getElementById("phrase").firstElementChild;

let game; 

startGame.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
})

keys.forEach(button=> {
    button.addEventListener('click' , () =>{
        game.handleInteraction(button);
    })
})