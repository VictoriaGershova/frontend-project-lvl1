import { cons } from '@hexlet/pairs';
import runBrainGame from '..';

const ansYes = 'yes';
const ansNo = 'no';
const gameDescription = `Answer ${ansYes} if given number is prime. Otherwise answer ${ansNo}`;

const isPrime = (num) => {
  for (let factor = 2; factor <= num / 2; factor += 1) {
    if (num % factor === 0) {
      return false;
    }
  }
  return true;
};

const getNumIsPrime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  return cons(num, isPrime(num) ? ansYes : ansNo);
};

export default () => {
  runBrainGame(getNumIsPrime, gameDescription);
};
