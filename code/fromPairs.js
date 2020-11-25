// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const fromPairs = (pairs) => {
  const result = {};
  for (const pair of pairs) {
    const [key, value] = pair;
    result[key] = value;
  }
  return result;
};

export default fromPairs;

/* fromPairs.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
состоящий из массивов-пар и возвращает объект, полученный из этих пар.

Примечания
Если при конструировании объекта попадаются совпадающие ключи,
то берётся значение из последнего массива-пары:

fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// { 'cat': 11, 'dog': 6 }
Примеры
fromPairs([['fred', 30], ['barney', 40]]);
// { 'fred': 30, 'barney': 40 } */
