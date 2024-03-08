'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

const classScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const colorOfBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
//display the logic about the secret number to see is it correct
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number entered';
    return;
  }
  //when the players win the game
  else if (guessNumber === secretNumber) {
    message('✅ Correct number!');
    colorOfBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //if the number is not correct
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      guessNumber > secretNumber
        ? message('📈 Too high')
        : message('📉 Too low');
      score--;
      classScore(score);
    } else {
      message('⛔ You loose the game!');
      colorOfBackground('red');
      classScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  colorOfBackground('#222');
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  classScore(score);
});
