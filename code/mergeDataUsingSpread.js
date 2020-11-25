// @ts-check

// BEGIN (write your solution here)
const makeCompany = (name, props) => {
  const companyProps = props ?? {};
  const result = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  if (!Object.keys(companyProps).length) {
    return { name, ...result };
  }
  return { name, ...result, ...companyProps };
};

export default makeCompany;
// END

/* objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его.
Для создания компании обязательно только одно свойство – имя компании.
Остальные свойства добавляются только если они есть. Параметры:

Имя
Объект с дополнительными свойствами
Также у компаний есть два свойства со значениями по умолчанию:

state – moderating
createdAt – текущая дата
import make from '../objects.js';

const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
Используйте спред-оператор для слияния данных внутри и возврата нового объекта. */
