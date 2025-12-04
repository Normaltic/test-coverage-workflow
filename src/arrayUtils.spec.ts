import { sum, average, max, min, unique, chunk } from './arrayUtils';

describe('ArrayUtils Module', () => {
  describe('sum', () => {
    it('should return the sum of all numbers', () => {
      expect(sum([1, 2, 3])).toBe(6);
    });

    it('should return 0 for empty arrays', () => {
      expect(sum([])).toBe(0);
    });
  });

  describe('average', () => {
    it('should return the average of numbers', () => {
      expect(average([1, 2, 3, 4])).toBe(2.5);
    });

    it('should throw an error for empty arrays', () => {
      expect(() => average([])).toThrow('Cannot calculate average of empty array');
    });
  });

  describe('max', () => {
    it('should return the maximum value', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should throw an error for empty arrays', () => {
      expect(() => max([])).toThrow('Cannot find max of empty array');
    });
  });

  describe('min', () => {
    it('should return the minimum value', () => {
      expect(min([5, 2, 8, 1, 9])).toBe(1);
    });

    it('should throw an error for empty arrays', () => {
      expect(() => min([])).toThrow('Cannot find min of empty array');
    });
  });

  describe('unique', () => {
    it('should remove duplicate values', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should throw an error for invalid chunk size', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow('Chunk size must be greater than 0');
    });
  });
});

