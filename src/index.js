import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

let gamerName = '';

const Color = {
  Reset: '\x1b[0m',
  FgRed: '\x1b[31m',
};

const paintItRed = (string) => `${Color.FgRed}${string}${Color.Reset}`;

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const showGameDescription = (gameDescription) => {
  console.log(gameDescription);
};

export const greetingNewPlayer = () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

const playBrainGame = (getQuestionWithAnswer) => {
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
};

export default (getQuestionWithAnswer, gameDescription) => {
  welcome();
  showGameDescription(gameDescription);
  greetingNewPlayer();
  playBrainGame(getQuestionWithAnswer);
};
