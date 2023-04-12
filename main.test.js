import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArr,
} from './main.js';

test('Capitalize the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Reverse a string', () => {
  expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
});

test('Basic calculator functions should work', () => {
  expect(calculator.sum(2, 2)).toEqual(4);
  expect(calculator.subtract(20, 10)).toEqual(10);
  expect(calculator.multiply(10, 10)).toEqual(100);
  expect(calculator.divide(50, 2)).toEqual(25);
});

test('Cipher the string by the shift passed', () => {
  expect(caesarCipher('Hey Caesar!', 8)).toBe('Pmg Kimaiz!');
});

test('Function that takes an array of numbers and returns an object with the following properties', () => {
  expect(analyzeArr([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
