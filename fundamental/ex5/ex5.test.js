const removeFirstThreeChar = require('./ex5');

describe("removeFirstThreeChar function", () => {
  test("should be defg", () => {
    expect(removeFirstThreeChar('abcdefg')).toBe('defg');
  });
  
  test("should be 4", () => {
    expect(removeFirstThreeChar('1234')).toBe('4');
  });

  test("should be dcba", () => {
    expect(removeFirstThreeChar('fgedcba')).toBe('dcba');
  });
});

