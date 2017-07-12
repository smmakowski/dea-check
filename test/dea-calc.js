const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const validator = require('../dea-calc.js');

describe('DEA Number Validation', () => {
  describe('validation of last number of sums', () => {
    it('should return "valid" if the last number of sums is equal to the check number',
    () => {
      expect(validator.deaCheck('AP5836727'), 'Patterson').to.equal('valid');
    });
    it('should return "comp" if the last number of sums is equal to check number',
    () => {
      expect(validator.deaCheck('AB1234567', 'Bradford')).to.equal('comp');
    });
  });
  describe('format invalidations', () => {
    it('should return "length" if length is not 9 characters long', () => {
      expect(validator.deaCheck('AB123456', 'Bradford')).to.equal('length');
    });
    it('should return chars if number does not start with 2 letters or does not end with 7 numbers',
    () => {
      expect(validator.deaCheck('A12345678', 'Bradford')).to.equal('chars');
      expect(validator.deaCheck('AB234Q678', 'Bradford')).to.equal('chars');
    });
    it('should return "type" if registrant type not found \
    with 7 numbers', () => {
      expect(validator.deaCheck('QB2345678', 'Bradford')).to.equal('type');
    });
    it('should return "type" if registrant type not found \
    with 7 numbers', () => {
      expect(validator.deaCheck('QB2345678', 'Bradford')).to.equal('type');
    });
    it('should return "name" if last name does not match not found \
    with 7 numbers', () => {
      expect(validator.deaCheck('QB2345678', 'Patterson')).to.equal('type');
    });
  });
  describe('misc considerations', () => {
    it('should not consider case-sensitivity for letters in the number', () => {
      expect(validator.deaCheck('Ap5836727', 'Patterson')).to.equal('valid');
      expect(validator.deaCheck('aP5836727', 'Patterson')).to.equal('valid');

    });
  });
});
