import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const stepsCount = 3;

const Color = {
  Reset: '\x1b[0m',
  FgRed: '\x1b[31m',
};

const paintItRed = (string) => `${Color.FgRed}${string}${Color.Reset}`;

export default (getQuestionWithAnswer, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  for (let i = 0; i < stepsCount; i += 1) {
    const questionAnswer = getQuestionWithAnswer();
    const question = car(questionAnswer);
    const correctAnswer = String(cdr(questionAnswer));
    console.log(`Question: ${String(question)}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${paintItRed(gamerAnswer)}' is wrong answer ;(.`);
      console.log(`Correct answer was '${paintItRed(correctAnswer)}'.\nLet's try again, ${gamerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};
