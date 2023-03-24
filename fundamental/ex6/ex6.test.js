const removeLastThreeChar = require('./ex6');

describe("removeLastThreeChar function", () => {
  test("should be efg", () => {
    expect(removeLastThreeChar('abcdefg')).toBe('efg');
  });
  
  test("should be 234", () => {
    expect(removeLastThreeChar('1234')).toBe('234');
  });

  test("should be cba", () => {
    expect(removeLastThreeChar('fgedcba')).toBe('cba');
  });
});

