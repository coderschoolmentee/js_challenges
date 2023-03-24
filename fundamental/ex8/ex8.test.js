const getFirstHalfStr = require('./ex8');

describe("getFirstHalfStr function", () => {
  test("should be abcd", () => {
    expect(getFirstHalfStr('abcdefgh')).toBe('abcd');
  });

  test("should be 1234", () => {
    expect(getFirstHalfStr('abcd')).toBe('12');
  });

  test("should be ged", () => {
    expect(getFirstHalfStr('gedcba')).toBe('ged');
  });
});

