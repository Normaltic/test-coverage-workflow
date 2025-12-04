/**
 * Capitalizes the first letter of a string.
 */
export const capitalize = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Reverses a string.
 */
export const reverse = (str: string): string => {
  return str.split('').reverse().join('');
};

/**
 * Checks if a string is a palindrome.
 */
export const isPalindrome = (str: string): boolean => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
};

/**
 * Counts the number of words in a string.
 */
export const wordCount = (str: string): number => {
  if (str.trim().length === 0) {
    return 0;
  }
  return str.trim().split(/\s+/).length;
};

/**
 * Truncates a string to a specified length with an ellipsis.
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
};

