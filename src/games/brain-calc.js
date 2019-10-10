import {
  cons, car, cdr,
} from '@hexlet/pairs';
import runBrainGame from '..';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const gameDescription = 'What is the result of the expression?';

const getOperationWithAnswer = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const leftOperand = Math.round(Math.random() * 100);
  const rightOperand = Math.round(Math.random() * 100);
  return cons(`${leftOperand} ${car(operator)} ${rightOperand}`, cdr(operator)(leftOperand, rightOperand));
};

export default () => {
  runBrainGame(getOperationWithAnswer, gameDescription);
};
