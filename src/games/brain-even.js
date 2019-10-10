import { cons } from '@hexlet/pairs';
import runBrainGame from '..';

const ansYes = 'yes';
const ansNo = 'no';
const rule = `Answer ${ansYes} if the number is even, otherwise answer ${ansNo}.`;

const getNumIsEven = () => {
  const num = Math.round(Math.random() * 100);
  const isEven = num % 2 === 0 ? ansYes : ansNo;
  return cons(num, isEven);
};

export default () => {
  runBrainGame(getNumIsEven, rule);
};
