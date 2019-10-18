import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
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

const makeQuestionWithAnswer = () => {
  const num = getRandomNum(1, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
