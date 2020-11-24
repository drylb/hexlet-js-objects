// @ts-check

// BEGIN (write your solution here)
const getDomainInfo = (url) => {
  const info = {};
  if (url.startsWith('https://') || url.startsWith('http://')) {
    const temp = url.split('://');
    const [scheme, name] = temp;
    info.scheme = scheme;
    info.name = name;
  } else {
    info.scheme = 'http';
    info.name = url;
  }
  return info;
};

export default getDomainInfo;
// END

/* objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта
и возвращает информацию о нем:

import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// } */
