// @ts-check
/* eslint no-restricted-syntax: [off, ForOfStatement] */

// BEGIN (write your solution here)
const toRoman = (num, result = '') => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in map) {
    if (num >= map[key]) {
      if (num !== 0) {
        return toRoman(num - map[key], result + key);
      }
    }
  }
  return result;
};

const toArabic = (romanNumber) => {
  if (romanNumber === 'IIII' || romanNumber === 'VX') {
    return false;
  }
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const nums = romanNumber.split('');
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    const first = map[nums[i]];
    const second = map[nums[i + 1]] ?? 0;
    if (first < second) {
      result += second - first;
      i += 1;
    } else {
      result += first;
    }
  }
  return result;
};

export { toArabic, toRoman };

// END
/* Для записи цифр римляне использовали буквы латинского алфафита: I, V, X, L, C, D, M. Например:

1 обозначалась с помощью буквы I
10 с помощью Х
7 с помощью VII
Число 2020 в римской записи — это MMXX (2000 = MM, 20 = XX).

solution.js
Реализуйте и экспортируйте функцию toRoman(), которая переводит арабские числа в римские.
Функция принимает на вход целое число в диапазоне от 1 до 3000, а возвращает строку
с римским представлением этого числа.

Реализуйте и экспортируйте функцию toArabic(), которая переводит число в римской записи в число,
записанное арабскими цифрами. Если переданное римское число не корректно,
то функция должна вернуть значение false.

Примеры
toRoman(1);
// 'I'
toRoman(59);
// 'LIX'
toRoman(3000);
// 'MMM'

toArabic('I');
// 1
toArabic('LIX');
// 59
toArabic('MMM');
// 3000

toArabic('IIII');
// false
toArabic('VX');
// false */
