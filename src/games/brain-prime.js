import { cons } from '@hexlet/pairs';
import runBrainGame from '..';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'";

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
  return cons(num, isPrime(num) ? 'yes' : 'no');
};

export default () => {
  runBrainGame(getNumIsPrime, gameDescription);
};
