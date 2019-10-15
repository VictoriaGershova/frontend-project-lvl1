import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getNumbersWithGcd = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);
  return cons(`${firstOperand} ${secondOperand}`, getGcd(firstOperand, secondOperand));
};

export default () => {
  runBrainGame(getNumbersWithGcd, gameDescription);
};
