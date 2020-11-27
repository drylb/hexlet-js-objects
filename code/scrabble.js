// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const scrabble = (letters, pattern) => {
  const lettersArr = letters.toLowerCase().split('');
  const patternArr = pattern.toLowerCase().split('');
  const result = [];
  for (const letter of patternArr) {
    if (lettersArr.includes(letter)) {
      const idx = lettersArr.indexOf(letter);
      result.push(letter);
      lettersArr.splice(idx, 1);
    }
  }
  return pattern.length === result.length;
};

export default scrabble;

// END

/* scrabble.js
Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра:
набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного
набора составить это слово. В результате вызова функция возвращает true или false.

При проверке учитывается количество символов, нужных для составления слова,
и не учитывается их регистр.

Примеры
scrabble('rkqodlw', 'world'); // true
scrabble('avj', 'java'); // false
scrabble('avjafff', 'java'); // true
scrabble('', 'hexlet'); // false
scrabble('scriptingjava', 'JavaScript'); // true */
