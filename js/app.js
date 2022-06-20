//variables in the program
const startGame = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key')
const lives = document.querySelectorAll(".tries img");
const ul = document.getElementById("phrase").firstElementChild;

let game; 

//adds an event listener that creates a new game and calls the startGame function
startGame.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
})

//this adds an even listener for the displayed keys on the screen
//by adding it to each letter and calling the handleInteraction function
keys.forEach(button=> {
    button.addEventListener('click' , () =>{
        game.handleInteraction(button);
    })
})