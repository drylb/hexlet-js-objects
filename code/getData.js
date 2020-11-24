// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getData = (obj, keys) => {
  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

export default getData;
// END

/* objects.js
Реализуйте и экспортируйте функцию по умолчанию, которая формирует из
переданного объекта другой объект, включающий только указанные свойства. Параметры:

Исходный объект
Массив имен свойств
import pick from './objects.js';

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
pick(data, ['none', 'cores']); // { cores: 4 }
Такая функция есть в lodash, но вам необходимо её реализовать самостоятельно. */
