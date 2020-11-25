// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
// const test = { per: 10, page: 1 };

// const test1 = {
//   a: 10,
//   s: 'Wow',
//   d: 3.2,
//   z: '89',
// };

const buildQueryString = (obj) => {
  const objKeys = Object.keys(obj).sort();
  const result = [];

  for (const key of objKeys) {
    result.push(`${key}=`);
    result.push(obj[key]);
    result.push('&');
  }

  return result.slice(0, result.length - 1).concat().join('');
};

// VERSION 2##############

const buildQueryString1 = (obj) => {
  const objKeys = Object.keys(obj).sort();
  const result = [];

  for (const key of objKeys) {
    result.push(`${key}=${obj[key]}`);
  }

  return result.join('&');
};

export { buildQueryString, buildQueryString1 };
// END

/* Query String (строка запроса) - часть адреса страницы в интернете, содержащая константы
и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5
Если параметров несколько, то они отделяются амперсандом &:

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5
buildQueryString.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список
параметров и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param: 'all', param1: true });
// param=all&param1=true
Имена параметров в выходной строке должны располагаться в
алфавитном порядке (то есть их нужно отсортировать). */
