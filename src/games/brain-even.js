import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => num % 2 === 0;

const makeQuestionWithAnswer = () => {
  const num = getRandomNum(1, 100);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
