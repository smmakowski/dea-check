const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const validator = require('../dea-calc.js');
const generator = require('../num-generator.js');

describe('DEA Number Generator', () => {
    it('should return a random DEA number as a string',
    () => {
      expect((typeof generator.generateNumber()).to.equal('string'));
    });
    it('should return a valid DEA number when checked by the validator function',
    () => {
      const rand = generator.generateNumber();
      const last = rand[1];
      expect(validator.deaCheck(rand, last)).to.equal('valid');
    });
});
