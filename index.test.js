const index = require('./index.js');

test('The length of the string "cat" is three', () => {
  // Arrange
  const str = 'cat';
  // Act
  const result = index.stringLength(str);
  // Assert
  expect(result).toBe(3);
});

test('A string out of bounds in the lower range throws an exception', () => {
  // Arrange
  const str = '';
  // Act
  const lengthFunction = () => index.stringLength(str);
  // Assert
  expect(lengthFunction).toThrow('String length must be between one and ten characters long!');
});

test('A string out of bounds in the upper range throws an exception', () => {
  // Arrange
  const str = 'out of range';
  // Act
  const lengthFunction = () => index.stringLength(str);
  // Assert
  expect(lengthFunction).toThrow('String length must be between one and ten characters long!');
});

test('The reversed string of "Hello" is "olleH"', () => {
  // Arrange
  const str = 'Hello';
  // Act
  const result = index.reverseString(str);
  // Assert
  expect(result).toBe('olleH');
});

describe('Calculator', () => {
  describe('Add', () => {
    test('Add 2 and 3 should result in 5', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.add(2, 3);
      // Assert
      expect(result).toBe(5);
    });

    test('Add -2 and -3 should result in -5', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.add(-2, -3);
      // Assert
      expect(result).toBe(-5);
    });

    test('Add -2 and 0 should result in -2', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.add(-2, -0);
      // Assert
      expect(result).toBe(-2);
    });
  });

  describe('Subtract', () => {
    test('Subtract 2 and 3 should result in -1', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.subtract(2, 3);
      // Assert
      expect(result).toBe(-1);
    });

    test('Subtract -2 and -3 should result in 1', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.subtract(-2, -3);
      // Assert
      expect(result).toBe(1);
    });

    test('Subtract -2 and 0 should result in -2', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.subtract(-2, -0);
      // Assert
      expect(result).toBe(-2);
    });
  });

  describe('Multiply', () => {
    test('Multiply 2 and 3 should result in 6', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.multiply(2, 3);
      // Assert
      expect(result).toBe(6);
    });

    test('Multiply -2 and -3 should result in 6', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.multiply(-2, -3);
      // Assert
      expect(result).toBe(6);
    });

    test('Multiply -2 and 0 should result in 0', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.multiply(-2, -0);
      // Assert
      expect(result).toBe(0);
    });
  });

  describe('Divide', () => {
    test('Divide 2 and 3 should be close to 0.6667', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.divide(2, 3);
      // Assert
      expect(result).toBeCloseTo(0.6667);
    });

    test('Divide 6 and -3 should result in -2', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const result = calc.divide(6, -3);
      // Assert
      expect(result).toBe(-2);
    });

    test('Divide -2 and 0 should throw an exception', () => {
      // Arrange
      const calc = new index.Calculator();
      // Act
      const divideFunction = () => calc.divide(-2, -0);
      // Assert
      expect(divideFunction).toThrow('"0" value for the denominator is not allowed');
    });
  });
});

test('The input is an string and The first letter of "hello" is capitalized', () => {
  // Arrange
  const str = 'hello';
  const type = typeof (str);
  // Act
  const result = index.firstCapital(str);
  // Assert
  expect(result).toBe('Hello');
  expect(type).toBe('string');
});

// new things
