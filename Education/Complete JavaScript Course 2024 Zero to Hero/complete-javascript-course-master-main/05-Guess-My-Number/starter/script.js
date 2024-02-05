'use strict';

// Defining the random secret seceretNumber 
let seceretNumber = Math.trunc(Math.random() * 20) + 1;

// Initializing the score at 20 and highscore at 0
let score = 20;
let highScore = 0;

// reset function 
const resetGame = function () {
    document.querySelector('.again').addEventListener('click', function () {
        document.querySelector('.score').textContent = score = 20;
        document.querySelector('body').style = '#222';
        document.querySelector('.number').style.width = '15rem';
        displayMessage("Start Guessing...");
        document.querySelector('.number').textContent = "?";
        seceretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.guess').value = "";
    });
}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Getting the user guess input 
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // Handling no seceretNumber guessed and correct guess
    if (!guess) {
        displayMessage('No number guessed...')
    } else if (guess === seceretNumber) {
        displayMessage('Correct!')
        document.querySelector('.number').textContent = seceretNumber;
        document.querySelector('body').style.backgroundColor = '#60b437';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
        resetGame();

        // Handling if guess was too high or low
    } else if (guess !== seceretNumber) {
        if (score > 1) {
            displayMessage(guess > seceretNumber ? `${guess} is too High..` : `${guess} is too Low..`);
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.number').textContent = seceretNumber;
            displayMessage('Game Over. You lost :(');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';
            resetGame();
        }
    }
});





