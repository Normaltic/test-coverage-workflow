import {
  add,
  subtract,
  multiply,
  divide,
  power
} from './calculator';

describe('Calculator Module - Partial Tests', () => {

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(5, 2)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });

  describe('power', () => {
    it('should return the base to the exponent power', () => {
      expect(power(2, 3)).toBe(8);
    });
  });

});
