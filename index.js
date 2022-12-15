const stringLength = (str) => {
    if (str.length < 1 || str.length > 10) {
      throw new Error('String length must be between one and ten characters long!');
    }
    return str.length;
  };
  
  const reverseString = (str) => str.split('').reverse().join('');
  
  class Calculator {
    add = (x, y) => x + y;
  
    subtract = (x, y) => x - y;
  
    multiply = (x, y) => x * y;
  
    divide = (x, y) => {
      if (y === 0) {
        throw new Error('"0" value for the denominator is not allowed');
      }
      return x / y;
    }
  }
  
  const firstCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  module.exports = {
    stringLength, reverseString, Calculator, firstCapital,
  };