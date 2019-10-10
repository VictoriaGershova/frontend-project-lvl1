import { cons } from '@hexlet/pairs';
import runBrainGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getNumbersWithGcd = () => {
  const firstNum = Math.round(Math.random() * 100);
  const secondNum = Math.round(Math.random() * 100);
  return cons(`${firstNum} ${secondNum}`, getGcd(firstNum, secondNum));
};

export default () => {
  runBrainGame(getNumbersWithGcd, gameDescription);
};
