// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const dnaToRna = (str) => {
  const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  const splitStr = str.split('');
  let result = '';
  for (const s of splitStr) {
    if (Object.prototype.hasOwnProperty.call(map, s)) {
      result += map[s];
    } else {
      return null;
    }
  }
  return result;
};

export default dnaToRna;

/* ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию,которая принимает на вход цепь ДНК
и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
то функция должна вернуть пустую строку. Если в переданной цепи ДНКвстретится "незнакомый" нуклеотид
(не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null */
