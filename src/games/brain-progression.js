import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils/math-utils';
import runBrainGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const randomArithmeticProgression = (firstTerm, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstTerm + diff * i);
  }
  return progression;
};

const makeQuestionWithAnswer = () => {
  const diff = getRandomNum(1, 10);
  const firstTerm = getRandomNum(0, 10);
  const progression = randomArithmeticProgression(firstTerm, diff, progressionLength);
  const skipTermInd = getRandomNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === skipTermInd) {
      question = `${question} ..`;
    } else {
      question = `${question} ${progression[i]}`;
    }
  }
  const answer = progression[skipTermInd];
  return cons(question, answer);
};

export default () => {
  runBrainGame(makeQuestionWithAnswer, gameDescription);
};
