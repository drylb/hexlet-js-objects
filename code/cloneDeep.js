// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';
// BEGIN (write your solution here)
const isThisObject = (obj) => {
  const type = typeof obj;
  return type === 'object';
};

const deepCloneObj = (obj) => {
  const copy = {};
  for (const prop in obj) {
    if (isThisObject(obj[prop])) {
      copy[prop] = deepCloneObj(obj[prop]);
    } else {
      copy[prop] = obj[prop];
    }
  }
  return copy;
};

export { deepCloneObj };
// END

// VERSION WITH LODASH.

// BEGIN (write your solution here)
const cloneObj = (obj) => {
  const copy = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    copy[key] = _.isObject(value) ? _.cloneDeep(value) : value;
  }
  return copy;
};

export default cloneObj;
// END

/* objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные
в другой объект. Если значением какого-то свойства является объект,
то нужно рекурсивно запустить функцию cloneDeep(value). */
