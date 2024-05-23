'use strict';

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (msg) {
  message.textContent = msg;
};

let secretGuess = randomNumber();
// document.querySelector('.number').textContent = secretGuess;
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessEl.value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretGuess) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretGuess;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretGuess) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretGuess ? '📈 Too high!' : '📉 Too low!');
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  score = 20;
  secretGuess = randomNumber();
  displayMessage('Start guessing...');
  number.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
});
