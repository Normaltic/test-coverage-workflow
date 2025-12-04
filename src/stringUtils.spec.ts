import { capitalize, reverse, isPalindrome, wordCount, truncate } from './stringUtils';

describe('StringUtils Module', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('WORLD')).toBe('World');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should handle single character strings', () => {
      expect(reverse('a')).toBe('a');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    it('should ignore case and special characters', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });
  });

  describe('wordCount', () => {
    it('should count words in a string', () => {
      expect(wordCount('hello world')).toBe(2);
    });

    it('should return 0 for empty strings', () => {
      expect(wordCount('')).toBe(0);
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    it('should return original string if shorter than maxLength', () => {
      expect(truncate('hi', 5)).toBe('hi');
    });
  });
});

