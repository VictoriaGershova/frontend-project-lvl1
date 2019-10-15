import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

let gamerName = '';

const Color = {
  Reset: '\x1b[0m',
  FgRed: '\x1b[31m',
};

const paintItRed = (string) => `${Color.FgRed}${string}${Color.Reset}`;

const isEmptyGame = (getQuestionWithAnswer) => getQuestionWithAnswer === null;

const greetingGamer = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription !== null) {
    console.log(gameDescription);
  }
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default (getQuestionWithAnswer, gameDescription) => {
  greetingGamer(gameDescription);
  if (!isEmptyGame(getQuestionWithAnswer)) {
    for (let i = 0; i < 3; i += 1) {
      const pairQuestionAnswer = getQuestionWithAnswer();
      const question = car(pairQuestionAnswer);
      const correctAnswer = String(cdr(pairQuestionAnswer));
      const gamerAnswer = readlineSync.question(`Question: ${String(question)}\nYour answer: `);
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
