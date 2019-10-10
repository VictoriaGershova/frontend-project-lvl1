import { cons } from '@hexlet/pairs';
import runBrainGame from '..';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'yes'.";

const getNumIsEven = () => {
  const num = Math.round(Math.random() * 100);
  const isEven = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, isEven);
};

export default () => {
  runBrainGame(getNumIsEven, gameDescription);
};
