'use strict';

let score = 20; // We defined a variable score which keeps decreasing each time we enter a wrong guess.

let secretNum = Math.trunc(Math.random() * 20) + 1; // This gives a random number between 1 and 20
// document.querySelector('.number').textContent = secretNum;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Value entered in the input box GUESS is stored in the variable guess.
  console.log(guess, typeof guess);

  // The case when the check button is clicked without entering any value
  if (!guess) {
    displayMessage('Enter a Number !');

    // The case when the secret number is equal to the entered number
  } else if (guess === secretNum) {
    displayMessage('👏👏 Correct Number!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    let hs = document.querySelector('.highscore').textContent;
    if (hs == 0) {
      document.querySelector('.highscore').textContent = score;
    } else {
      if (hs >= score) {
        document.querySelector('.highscore').textContent = hs;
      } else {
        document.querySelector('.highscore').textContent = score;
      }
    }

    // When the guess is a bit high
  } else if (guess - secretNum > 0 && guess - secretNum < 3) {
    if (score > 1) {
      displayMessage('High !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost! Click on Again button to restart the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }

    // When the guess is a bit low
  } else if (secretNum - guess > 0 && secretNum - guess < 3) {
    if (score > 1) {
      displayMessage('low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost! Click on Again button to restart the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }

    // When the guess is too high or too loW
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too High !' : '📉 Too Low !'); // using ternary operator
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost! Click on Again button to restart the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
