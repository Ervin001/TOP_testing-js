// capitalize: returns a string with a cap
const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// reverseString: returns a reversed string
const reverse = function (string) {
  return [...string].reverse().join('').toString();
};

// calculator: object that contains functions for the basic operations Add, Sub, Multiply, Divide
const calculator = {
  sum(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

// caesarCipher: string ciphered by a shift factor
const caesarCipher = function (string, shift) {
  let tempArr = [];
  [...string].forEach((char) => {
    let charNum = char.charCodeAt();

    // For uppercase
    if (charNum >= 65 && charNum <= 90) {
      charNum -= 65;
      charNum = (charNum + shift) % 26;
      charNum += 65;

      const backToChar = String.fromCharCode(charNum);
      tempArr.push(backToChar);
    } else if (charNum >= 97 && charNum <= 122) {
      charNum -= 97;
      charNum = (charNum + shift) % 26;
      charNum += 97;
      const backToChar = String.fromCharCode(charNum);
      tempArr.push(backToChar);
    } else {
      tempArr.push(char);
    }
  });
  return tempArr.join('');
};

// analyzeArray: function that takes an array of numbers and returns an object with the following properties. Average, min, max,length
const analyzeArr = function (array) {
  const sum = array.reduce((prev, cur) => prev + cur);
  const average = sum / array.length;

  return {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalize, reverse, calculator, caesarCipher, analyzeArr };
