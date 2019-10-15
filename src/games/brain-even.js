import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";
let question = '';
let answer = '';

const isEven = (num) => num % 2 === 0;

const makeQuestionWithAnswer = () => {
  const num = getRandomNum(1, 100);
  question = num;
  answer = isEven(num) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
