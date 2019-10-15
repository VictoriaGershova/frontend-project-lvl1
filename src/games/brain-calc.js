import {
  cons, car, cdr,
} from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = 'What is the result of the expression?';
let question = '';
let answer = '';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const makeQuestionWithAnswer = () => {
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const leftOperand = getRandomNum(0, 100);
  const rightOperand = getRandomNum(0, 100);
  question = `${leftOperand} ${car(operator)} ${rightOperand}`;
  answer = cdr(operator)(leftOperand, rightOperand);
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
