import {
  cons, car, cdr,
} from '@hexlet/pairs';
import runBrainGame from '../index';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const rule = 'What is the result of the expression?';

const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const getOperationWithAnswer = () => {
  const operator = getRandomOperator();
  const leftOperand = Math.round(Math.random() * 100);
  const rightOperand = Math.round(Math.random() * 100);
  return cons(`${leftOperand} ${car(operator)} ${rightOperand}`, cdr(operator)(leftOperand, rightOperand));
};

export default () => {
  runBrainGame(getOperationWithAnswer, rule);
};
