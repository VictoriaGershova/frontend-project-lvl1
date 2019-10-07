import { cons } from '@hexlet/pairs';
import runBrainGame from '../index';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getNumbersWithGCD = () => {
  const firstNum = Math.round(Math.random() * 100);
  const secondNum = Math.round(Math.random() * 100);
  return cons(`${firstNum} ${secondNum}`, getGCD(firstNum, secondNum));
};

export default () => {
  runBrainGame(getNumbersWithGCD, rule);
};
