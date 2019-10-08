import { cons } from '@hexlet/pairs';
import runBrainGame from '../index';

const rule = 'What number is missing in the progression?';

const randomArithmeticProgression = () => {
  const dif = Math.floor(Math.random() * 11);
  const firstNum = Math.floor(Math.random() * 11);
  const progression = [];
  for (let i = 1; i <= 10; i += 1) {
    progression.push(firstNum + dif * i);
  }
  return progression;
};

const getPrograssionQuestion = () => {
  const progression = randomArithmeticProgression();
  const randTermInd = Math.floor(Math.random() * 10);
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === randTermInd) {
      question = `${question} ..`;
    } else {
      question = `${question} ${progression[i]}`;
    }
  }
  return cons(question, progression[randTermInd]);
};

export default () => {
  runBrainGame(getPrograssionQuestion, rule);
};
