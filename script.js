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

const number = Math.floor(Math.random() * 21);
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(number);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number entered';
    return;
  } else if (guessNumber === number) {
    document.querySelector('.message').textContent = 'Corect number';
  } else if (guessNumber > number) {
    document.querySelector('.message').textContent = ' Too high';
  } else if (guessNumber < number) {
    document.querySelector('.message').textContent = 'Too low';
  }
});
