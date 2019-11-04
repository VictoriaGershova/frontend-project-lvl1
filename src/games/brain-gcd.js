import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import runBrainGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const makeQuestionWithAnswer = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = getGcd(firstOperand, secondOperand);
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
