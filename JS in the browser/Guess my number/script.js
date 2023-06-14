// Activates 'strict' mode
'use strict';

// assigns to a variable the 'message' box
const message = document.querySelector('.message');

const again = document.querySelector('.again');

// assigns to a variable the number to be guessed
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// assigns to a variable a 'score' of 20
let score = 20;

// adds an event listener to the 'check' button, which when clicked launches a function
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    message.textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🏆 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '⬆ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message = '💥 You lose!';
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    message.textContent = '⬇ Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// adds an event listener to the 'again' button, which in turn resets the score, background colour, number box size and message and creates a new random number
again.addEventListener('click', function () {
  score = '20';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.width = '25rem';
});
