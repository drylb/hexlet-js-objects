// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const countWords = (str) => {
  if (str === '') {
    return {};
  }
  const words = str.split(' ');
  const obj = {};
  for (const word of words) {
    const wordToLower = word.toLowerCase();
    obj[wordToLower] = (obj[wordToLower] ?? 0) + 1;
  }
  return obj;
};

export default countWords;
// END

/* words.js
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении
и возвращает объект в котором свойства это слова (приведенные к нижнему регистру),
а значения — это то сколько раз слово встретилось в предложении. Слова в предложении
могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр,
чтобы не пропускались дубли.

import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект
countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// } */
