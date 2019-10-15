import {
  cons, car, cdr,
} from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const gameDescription = 'What is the result of the expression?';

const getOperationWithAnswer = () => {
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const leftOperand = getRandomNum(0, 100);
  const rightOperand = getRandomNum(0, 100);
  return cons(`${leftOperand} ${car(operator)} ${rightOperand}`, cdr(operator)(leftOperand, rightOperand));
};

export default () => {
  runBrainGame(getOperationWithAnswer, gameDescription);
};
