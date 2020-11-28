// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const genDiff = (data1, data2) => {
  const data1Keys = Object.keys(data1);
  const data2Keys = Object.keys(data2);
  const keys = data1Keys.concat(data2Keys);
  const result = {};
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      result[key] = 'deleted';
    } else if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      result[key] = 'added';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchaged';
    }
  }
  return result;
};

export default genDiff;
// END

/* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает
результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи
из двух входящих объектов, а значением строка с описанием отличий:
added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
import genDiff from './diffGenerator.js';

genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// } */
