/**
 * Calculates the sum of all numbers in an array.
 */
export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

/**
 * Calculates the average of all numbers in an array.
 */
export const average = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate average of empty array');
  }
  return sum(numbers) / numbers.length;
};

/**
 * Finds the maximum value in an array.
 */
export const max = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot find max of empty array');
  }
  return Math.max(...numbers);
};

/**
 * Finds the minimum value in an array.
 */
export const min = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot find min of empty array');
  }
  return Math.min(...numbers);
};

/**
 * Removes duplicate values from an array.
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

/**
 * Chunks an array into smaller arrays of specified size.
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) {
    throw new Error('Chunk size must be greater than 0');
  }
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

