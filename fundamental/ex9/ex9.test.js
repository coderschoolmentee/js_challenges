const doBasicMath = require('./ex9');

describe("doBasicMath function", () => {
  test("should be 10.5", () => {
    expect(doBasicMath(6,5,4,3,2,1)).toBe(10.5);
  });

  test("should be 2744", () => {
    expect(doBasicMath(6,2,1,4,2,3)).toBe(2744);
  });

  test("should be -8", () => {
    expect(doBasicMath(2,3,6,4,2,3)).toBe(-8);
  });
});

