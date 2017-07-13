const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const validator = require('../dea-calc.js');
const generator = require('../num-generator.js');

describe('DEA Number Generator', () => {
    it('should return a random DEA number as a string',
    () => {
      const type = typeof generator.generateNumber();
      console.log(type);
      expect(type).to.equal('string');
    });

    for (let i = 1; i <= 10; i++) {
      it('should return a valid DEA number when checked by the validator function',
      () => {
        const rand = generator.generateNumber();
        const last = rand[1];
        console.log('rand = ' + rand);
        console.log('last =' + last);
        expect(validator.deaCheck(rand, last)).to.equal('valid');
      });
    }
});
