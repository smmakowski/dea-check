function dea(num) {
  const regType = {
    a: 'Hospital/Prescriber/Pharmacy (deprecated)',
    b: 'Hospital/Clinic',
    f: 'Distributor',
    g: 'Researcher',
    m: 'Mid Level Practitioner',
    p: 'Narcotic Treatment Program',
    r: 'Narcotic Treament Program',
    x: 'Suboxone/Subutex Prescribing Program',
  }

  // process nums
  let chars = num.split('');
  const type = regType[num[0].toLowerCase()];
  const lastInitial = num[1];
  const check = parseInt(chars[chars.length - 1]);
  const nums = chars.slice(2, chars.length - 1).map((n) => {
    return parseInt(n);
  });
  console.log('processed nums are: ', nums);
  // invalid lengths
  // if (num.length !== 9 || nums.length !== 6) {
  //   return 'Invalid length';
  // }
  // // invalid type
  // if (!type) {
  //   return 'Not recognized type!'
  // }

  // calculate sums
  const step1 = nums[0] + nums[2] + nums[4];
  const step2 = (nums[1] + nums[3] + nums[5]) * 2;
  console.log('Step 1 is...', step1);
  console.log('Step 2 is... ', step2);

  // process comparison number
  let comp = step1 + step2;
  comp = comp.toString();
  comp = comp[comp.length - 1];
  comp = parseInt(comp);

  // validate comparison number
  if (comp === check) {
    return true;
  }

  return false;

}

function assert(a, b) {
  if (a === b) {
    return 'PASSED';
  } else {
    return 'FAILED';
  }
}

let trueTest1 = assert(dea('BT6835752'), true);
let trueTest2 = assert(dea('AD0865937'), true);
console.log(trueTest1);
console.log(treuTest2);
