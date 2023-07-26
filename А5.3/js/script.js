/*let guessNumber = Math.round(Math.random() * 30); // ❶
let tries = 10;

function guess(number) { // ❷
  if (tries === 0) { // ❹
    guessNumber = Math.round(Math.random() * 30); // ❹
    tries = 10; // ❹
    return "Попытки закончились - Вы проиграли. Загаданное число поменялось";
  }

  if (guessNumber === number) { // ❸
    guessNumber = Math.round(Math.random() * 30);
    tries = 10;
    return "Правильно! Загаданное число поменялось";
  }

  if (guessNumber > number) { // ❸
    tries--; // ❺
    return "Загаданное число больше. Попыток осталось: " + tries;
  }

  if (guessNumber < number) { // ❸
    tries--;
    return "Загаданное число меньше. Попыток осталось: " + tries;
  }

} */
/* 
для достижения наших поставленных целей нам нужно написать следующие функции:
init() - для запуска и перезапуска игры

win() - для объявления победы

lose() - для объявления поражения

gt() / lt() - для сообщения о том, что загаданное число больше / меньше.

Условия игры могут поменяться, поэтому давайте ознакомимся с новыми функциями, и вынесем в них условия из кода. Нам понадобятся такие функции:

init() - для запуска и перезапуска игры

islose() - если закончились попытки

isWin() - если победили

triesMore() - сколько попыток осталось

restartMessage() - загаданное число поменялось

makeTriesLess() - уменьшает количество попыток

isGt(number) / isLt(number) - если загаданное число больше / меньше.

function gt() - выводит что загаданное число больше и уменьшает количество попыток на 1 и выводит количество оставшихся попыток

function lt() - выводит что загаданное число меньше и уменьшает количество попыток на 1 и выводит количество оставшихся попыток
*/
let guessNumber = Math.round(Math.random() * 30);
let tries = 10;

function init() {
  guessNumber = Math.round(Math.random() * 30);
  tries = 10;
}

function isLose() {
  return tries === 0;
}

function triesMore() {
  return "Попыток осталось: " + tries;
}

function restartMessage() {
  return "Загаданное число поменялось";
}

function makeTriesLess() {
  tries--
}

function gt() {
  makeTriesLess();
  return `Загаданное число больше. ${triesMore()} `;
}

function lt() {
  makeTriesLess();
  return `Загаданное число меньше. ${triesMore()} `;
}

function lose() {
  init();
  return "Попытки закончились - Вы проиграли. Загаданное число поменялось";
}

function win() {
  init();
  return "Правильно! Загаданное число поменялось";
}

function guess(number) {

  if (isLose()) {
    return lose();
  }

  if (guessNumber === number) {
    return win();
  }

  if (guessNumber > number) {
    return gt();
  }

  if (guessNumber < number) {
    return lt();
  }
}