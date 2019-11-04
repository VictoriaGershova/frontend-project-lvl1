import {
  cons, car, cdr,
} from '@hexlet/pairs';
import getRandomNum from '../utils';
import runBrainGame from '..';

const gameDescription = 'What is the result of the expression?';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const makeQuestionWithAnswer = () => {
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const leftOperand = getRandomNum(0, 100);
  const rightOperand = getRandomNum(0, 100);
  const question = `${leftOperand} ${car(operator)} ${rightOperand}`;
  const answer = cdr(operator)(leftOperand, rightOperand);
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
