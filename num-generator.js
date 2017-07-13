function randomDigits() {
  let digits = [];

  for (let i = 0; i < 6; i++) {
    digits.push(Math.floor(Math.random() * 10))
  }

  return digits;
};

function calcCheckNum(digits) {
  const evenSum = digits[0] + digits[2] + digits[4];
  const oddSum = (digits[1] + digits[3] + digits[5]) * 2;
  const sumStr = (evenSum + oddSum).toString();

  return sumStr[sumStr.length - 1];
};

function generateNumber() {
  // set relevant info
  const regCodes = 'ABCDEFGHJKLMPRSTUX';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // generate random number components
  const rndCode = regCodes[Math.floor(Math.random() * regCodes.length)];
  const rndLastInitial = letters[Math.floor(Math.random() * letters.length)];
  const digits = randomDigits();
  const digitStr = digits.join('');
  const check = calcCheckNum(digits);

  // create DEA number from components
  number += rndCode;
  number += rndLastInitial;
  number += digitStr;
  number += check;

  return number;
};

module.exports = {
  randomDigits,
  calcCheckNum,
  generateNumber,
}
