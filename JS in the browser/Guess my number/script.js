// Activates 'strict' mode
'use strict';

// assigns to a variable the 'message' box

const again = document.querySelector('.again');

// assigns to a variable the number to be guessed
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// assigns to a variable a 'score' of 20
let score = 20;

let highScore = 0;

// assigns to a variable the result of a function that displays a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// adds an event listener to the 'check' button, which when clicked launches a function
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.width = '30rem';

    // checks to see if the current score is greater than the high score, and if so, then write the score to the 'highscore' field
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆ Too high!' : '⬇ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lose!');
    }
  }
});

// adds an event listener to the 'again' button, which in turn resets the score, background colour, number box size and message and creates a new random number
again.addEventListener('click', function () {
  score = '20';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.width = '25rem';
  document.querySelector('.number').textContent = '?';
});
