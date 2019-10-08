import { cons } from '@hexlet/pairs';
import runBrainGame from '../index';

const ansYes = 'yes';
const ansNo = 'no';
const rule = `Answer ${ansYes} if given number is prime. Otherwise answer ${ansNo}`;

const isPrimeNumber = (num) => {
  for (let factor = 2; factor < num; factor += 1) {
    if (num % factor === 0) {
      return false;
    }
  }
  return true;
};

const getNumIsPrime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const isPrime = isPrimeNumber(num);
  return cons(num, isPrime ? ansYes : ansNo);
};

export default () => {
  runBrainGame(getNumIsPrime, rule);
};
