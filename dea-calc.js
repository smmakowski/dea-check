// Validation Helpers
function areLetters(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++) {
    if (letters.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

function areDigits(str) {
  const digits = '1234567890';
  for (let i = 0; i < str.length; i++) {
    if (digits.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

function calcComparison(nums) {
  //get sums
  const step1 = nums[0] + nums[2] + nums[4];
  const step2 = (nums[1] + nums[3] + nums[5]) * 2;

  // process comparison number
  let step3 = step1 + step2;
  step3 = step3.toString();
  let last = step3[step3.length - 1];
  last = parseInt(last);

  return last;
}

// Main algorithm
function isValidType(str) {
  const regType = {
    a: 'Hospital/Prescriber/Pharmacy (deprecated)',
    b: 'Hospital/Clinic',
    c: 'Practitioner',
    d: 'Teaching Institution',
    e: 'Manufacturer',
    f: 'Distributor',
    g: 'Researcher',
    h: 'Analytical Lab',
    j: 'Importer',
    k: 'Exporter',
    l: 'Reverse Distributor',
    m: 'Mid Level Practitioner',
    p: 'Narcotic Treatment Program',
    r: 'Narcotic Treament Program',
    s: 'Narcotic Treament Program',
    t: 'Narcotic Treament Program',
    u: 'Narcotic Treament Program',
    x: 'Suboxone/Subutex Prescribing Program',
  };

  if (regType[str.toLowerCase()] === undefined) {
    return false;
  }

  return true;
}

function isValidName(lastName, initial) {
  const last = lastName[0].toLowerCase();
  return last === initial;
}

function deaCheck(num, lastName) {
  // process nums
  const chars = num.split('');
  const type = num[0].toLowerCase();
  const lastInitial = num[1].toLowerCase();
  const check = parseInt(chars[chars.length - 1]);
  const nums = chars.slice(2, chars.length - 1).map((n) => {
    return parseInt(n);
  });

  console.log('processed nums are: ', nums);
  // invalid format
  if (num.length !== 9 || nums.length !== 6) {
    return 'length';
  }
  if (!areLetters(num.slice(0, 2)) || !areDigits(num.slice(2))) {
    return 'chars';
  }

  // invalid type
  if (!isValidType(type)) {
    return 'type';
  }

  if (!isValidName(lastName, lastInitial)) {
    return 'name';
  }

  const comp = calcComparison(nums);
  console.log('comp' + comp + 'check ' + check)
  // validate step3 with comparison number
  if (comp === check) {
    return 'valid';
  }

  return 'comp';

}

// Function Export
module.exports = {
  deaCheck: deaCheck,
  areLetters: areLetters,
  areDigits: areDigits,
  isValidType: isValidType,
  calcComparison: calcComparison,
};
