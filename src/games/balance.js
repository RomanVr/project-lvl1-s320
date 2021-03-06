import getRandomNumber from '../utils';
import executeGame from '../execute';

const getSummNumber = (stringNumber) => {
  let summ = 0;
  for (let i = 0; i < stringNumber.length; i += 1) {
    summ += Number.parseInt(stringNumber[i], 10);
  }
  return summ;
};

const calculateBalance = (numberBalane) => {
  const stringNumber = numberBalane.toString(10);
  let summ = getSummNumber(stringNumber);
  let newStringNumber = '';
  let remainingNumberLength = stringNumber.length;
  for (let i = 0; i < stringNumber.length - 1; i += 1) {
    const currentSymbol = Math.floor(summ / remainingNumberLength);
    summ -= currentSymbol;
    remainingNumberLength -= 1;
    newStringNumber += currentSymbol.toString(10);
  }
  newStringNumber += summ;
  return newStringNumber;
};

const taskGame = 'Balance the given number.';

const minRangeNumbers = 100;
const maxRangeNumbers = 999;

const getQuestionAndRigthAnswer = () => {
  const questionNumberBalance = getRandomNumber(minRangeNumbers, maxRangeNumbers);
  const rigthAnswer = calculateBalance(questionNumberBalance);
  return [`${questionNumberBalance}`, rigthAnswer];
};

const balanceGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default balanceGame;
