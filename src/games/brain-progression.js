import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const randomArithmeticProgression = (length) => {
  const diff = getRandomNum(1, 10);
  const firstNum = getRandomNum(0, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + diff * i);
  }
  return progression;
};

const getPrograssionQuestion = () => {
  const progression = randomArithmeticProgression(progressionLength);
  const randTermInd = getRandomNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === randTermInd) {
      question = `${question} ..`;
    } else {
      question = `${question} ${progression[i]}`;
    }
  }
  return cons(question, progression[randTermInd]);
};

export default () => {
  runBrainGame(getPrograssionQuestion, gameDescription);
};
