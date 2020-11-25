// @ts-check
// USING LODASH

import _ from 'lodash';

// BEGIN (write your solution here)
const mergeData = (obj, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(obj, filteredData);
};

export { mergeData };
// END

// WITHOUT LODASH

// @ts-check

// BEGIN (write your solution here)
const mergeData1 = (obj, keys, data) => {
  const tempObj = obj;
  for (let key = 0; key < keys.length; key += 1) {
    if (Object.prototype.hasOwnProperty.call(data, keys[key])) {
      tempObj[keys[key]] = data[keys[key]];
    }
  }
  if (!keys.length) {
    Object.assign(tempObj, data);
  }
  return tempObj;
};

export default mergeData1;
// END

/* objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта
по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.

import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
Попробуйте решить эту задачу с помощью слияния. */
