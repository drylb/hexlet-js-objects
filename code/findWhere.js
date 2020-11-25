// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const test = [
  { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
  { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
  { title: 'Still foooing', author: 'FooBar', year: 3333 },
  { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];
const where1 = { author: 'Shakespeare', year: 1611 }; // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
const where2 = { author: 'undefined', year: 1611 }; // null
const where3 = { year: 4444 }; // { title: 'Happy Foo', author: 'FooBar', year: 4444 }
const where4 = { author: 'Shakespeare', year: 1611, title: 'The Tempest' }; //  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },

const findWhere = (dataArr, where) => {
  const keys = Object.keys(where);
  for (const data of dataArr) {
    let flag = false;
    for (const key of keys) {
      if (where[key] === 'undefined') {
        return null;
      }
      flag = data[key] === where[key];
    }
    if (flag) {
      return data;
    }
  }
};

const findWhere1 = (dataArr, where) => {
  const entries = Object.entries(where);
  for (const data of dataArr) {
    let flag = true;
    for (const [key, value] of entries) {
      if (data[key] !== value) {
        flag = false;
      }
    }
    if (flag) {
      return data;
    }
  }
  return null;
};

export { findWhere, findWhere1 };

// END

/* arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив
(элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта),
а возвращает первый элемент исходного массива, значения которого соответствуют
переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть null.

Примеры
findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 }
); // { title: 'Cymbeline', 'author: 'Shakespeare', 'year: 1611 } */
