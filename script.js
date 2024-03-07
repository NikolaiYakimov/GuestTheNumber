'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number';

//const number = 2;
// if (document.querySelector('.guess').textContent === number) {
//   document.querySelector('.message').textContent = 'Correct number';
// }

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
