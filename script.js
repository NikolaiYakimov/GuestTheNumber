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

//i want the number to be from 1 to 20,and to restore it in again button ,it needs to be let not const
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

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
    document.querySelector('.message').textContent = '✅ Correct number!';
    page.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //when the guessing number is higher than secret number
  else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ You loose the game!';
      document.querySelector('.score').textContent = 0;
      ourBody.style.background = 'red';
    }
  }
  //When the guessing number is lower then secret number
  else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ You loose the game!';
      document.querySelector('.score').textContent = 0;
      page.style.backgroundColor = 'dark red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
