import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => num % 2 === 0;

const getNumIsEven = () => {
  const num = getRandomNum(1, 100);
  return cons(num, (isEven(num) ? 'yes' : 'no'));
};

export default () => {
  runBrainGame(getNumIsEven, gameDescription);
};
