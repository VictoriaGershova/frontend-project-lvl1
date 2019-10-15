import readlineSync from 'readline-sync';
import { car, cdr, isPair } from '@hexlet/pairs';

const gameSteps = 3;
let gamerName = '';
let pairQuestionAnswer = null;
let question = '';
let correctAnswer = '';
let gamerAnswer = '';

const Color = {
  Reset: '\x1b[0m',
  FgRed: '\x1b[31m',
};

const paintItRed = (string) => `${Color.FgRed}${string}${Color.Reset}`;

const isValidFunction = (getQuestionWithAnswer) => (
  typeof getQuestionWithAnswer === 'function' && isPair(getQuestionWithAnswer())
);

const isEmptyDescription = (gameDescription) => (
  gameDescription === null || gameDescription === ''
);

const greetingGamer = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (!isEmptyDescription(gameDescription)) {
    console.log(gameDescription);
  }
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default (getQuestionWithAnswer, gameDescription = '') => {
  greetingGamer(gameDescription);
  if (isValidFunction(getQuestionWithAnswer)) {
    for (let i = 0; i < gameSteps; i += 1) {
      pairQuestionAnswer = getQuestionWithAnswer();
      question = car(pairQuestionAnswer);
      correctAnswer = String(cdr(pairQuestionAnswer));
      gamerAnswer = readlineSync.question(`Question: ${String(question)}\nYour answer: `);
      if (gamerAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${paintItRed(gamerAnswer)}' is wrong answer ;(. Correct answer was '${paintItRed(correctAnswer)}'.\nLet's try again, ${gamerName}`);
        return;
      }
    }
    console.log(`Congratulations, ${gamerName}!`);
  }
};
