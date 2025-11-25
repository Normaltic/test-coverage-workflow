/**
 * Adds two numbers.
 */
export const add = (a: number, b: number): number => a + b;

/**
 * Subtracts the second number from the first.
 */
export const subtract = (a: number, b: number): number => a - b;

/**
 * Multiplies two numbers.
 */
export const multiply = (a: number, b: number): number => a * b;

/**
 * Divides the first number by the second. Throws an error if dividing by zero.
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

/**
 * Calculates the power of a number to an exponent.
 */
export const power = (base: number, exponent: number): number => Math.pow(base, exponent);

/**
 * Calculates the square root of a number.
 */
export const sqrt = (num: number): number => Math.sqrt(num);

/**
 * Calculates the remainder of a division.
 */
export const modulo = (a: number, b: number): number => a % b;

/**
 * Calculates the factorial of a non-negative integer.
 */
export const factorial = (num: number): number => {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

/**
 * Checks if a number is even.
 */
export const isEven = (num: number): boolean => num % 2 === 0;

/**
 * Checks if a number is odd.
 */
export const isOdd = (num: number): boolean => num % 2 !== 0;