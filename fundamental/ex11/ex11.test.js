const checkEven = require('./ex11');

describe("getFirstHalfStr function", () => {
  test("should be true", () => {
    expect(checkEven(10)).toBeTruthy();
  });

  test("should be true", () => {
    expect(checkEven(-4)).toBeTruthy();
  });

  test("should be false", () => {
    expect(checkEven(5)).toBeFalsy();
  });

  test("should be false", () => {
    expect(checkEven(-111)).toBeFalsy();
  });
});

