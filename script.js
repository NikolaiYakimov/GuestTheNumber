'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// //const number = 2;
// // if (document.querySelector('.guess').textContent === number) {
// //   document.querySelector('.message').textContent = 'Correct number';
// // }

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   const guessNumber = Number(document.querySelector('.guess').value);
//   console.log(guessNumber, typeof guessNumber);

//   if (!guessNumber) {
//     document.querySelector('.message').textContent = 'No number entered';
//     return;
//   }
// });

//i want the number to be from 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//display the logic about the secret number to see is it correct

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number entered';
    return;
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct number!';
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ You loose the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ You loose the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
