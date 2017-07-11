const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const validator = require('../dea-calc.js');
describe('DEA Number Validation', () => {
  describe('validation of last number of sums', () => {
    it('should return true if the last number of sums is equal to the check number',
    () => {
      expect(validator.deaCheck('AB1234567')).to.equal(true);
    });
    it('should return false if the last number of sums is equal to check number',
    () => {
      expect(validator.deaCheck('AB1234567')).to.equal(false);
    });
  });
  describe('length and type invalidations', () => {
    it('should return false if length is not 9 characters long', () =>{
      expect(validator.deaCheck('AB123456')).to.equal(true);
    });
    it('should return false if number does not start with 2 letters and ends \
    with 7 numbers', () => {
      expect(validator.deaCheck('A12345678')).to.equal(false);
      expect(validator.deaCheck('AB234Q678')).to.equal(false);
    });
    it('should return false if registrant type not found \
    with 7 numbers', () => {
      expect(validator.deaCheck('QB2345678')).to.equal(false);
    });
  });
  describe('misc considerations', () => {
    it('should not consider case-sensitivity for letters in the number', () => {
      expect()
    });
  });
});
