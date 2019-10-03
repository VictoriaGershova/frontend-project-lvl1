import readlineSync from 'readline-sync';

let gamerName = '';

const Color = {
  Reset: '\x1b[0m',
  FgRed: '\x1b[31m',
};

const ansYes = 'yes';
const ansNo = 'no';

const paintItRed = (string) => `${Color.FgRed}${string}${Color.Reset}`;

export const runBrainEven = () => {
  let currentNum = 0;
  let numIsEven = false;
  let currentAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    currentNum = Math.round(Math.random() * 100);
    currentAnswer = readlineSync.question(`Question: ${String(currentNum)}\nYour answer: `);
    numIsEven = currentNum % 2 === 0;
    if ((numIsEven && currentAnswer === ansYes) || (!numIsEven && currentAnswer === ansNo)) {
      console.log('Correct!');
    } else {
      console.log(`'${paintItRed(currentAnswer)}' is wrong answer ;(. Correct answer was '${paintItRed(numIsEven ? ansYes : ansNo)}'.\nLet's try again, ${gamerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export default () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const showRules = (gameName) => {
  let rule = '';
  switch (gameName) {
    case 'brain-even':
      rule = `Answer ${paintItRed(ansYes)} if the number is even, otherwise answer ${paintItRed(ansNo)}.`;
      break;
    default:
      break;
  }
  console.log(rule);
};
