import getRandomNumber from '../utils';
import executeGame from '../execute';

const calculateGcd = (numberX, numberY) => {
  let X = numberX;
  let Y = numberY;
  while (X && Y) {
    if (X > Y) X %= Y;
    else Y %= X;
  }
  X += Y;
  return X;
};

const taskGame = 'Find the greatest common divisor of given numbers.';

const maxRangeNumbers = 30;

const getQuestionAndCorrectResult = () => {
  const numberX = getRandomNumber(1, maxRangeNumbers);
  const numberY = getRandomNumber(1, maxRangeNumbers);
  const correctResult = calculateGcd(numberX, numberY).toString(10);
  return [`${numberX} ${numberY}`, correctResult];
};

const gcdGame = () => {
  executeGame(taskGame, getQuestionAndCorrectResult);
};

export default gcdGame;
