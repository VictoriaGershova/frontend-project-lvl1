import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
let question = '';
let answer = '';

const randomArithmeticProgression = (length) => {
  const diff = getRandomNum(1, 10);
  const firstNum = getRandomNum(0, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + diff * i);
  }
  return progression;
};

const makeQuestionWithAnswer = () => {
  const progression = randomArithmeticProgression(progressionLength);
  const randTermInd = getRandomNum(0, progressionLength - 1);
  question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === randTermInd) {
      question = `${question} ..`;
    } else {
      question = `${question} ${progression[i]}`;
    }
  }
  answer = progression[randTermInd];
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
