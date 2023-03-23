const getNChar = require('./ex4');

describe("getNChar function", () => {
  test("should be a", () => {
    expect(getNChar('abcd',1)).toBe('a');
  });

  test("should be e", () => {
    expect(getNChar('gfedcba',3)).toBe('e');
  });

  test("should be w", () => {
    expect(getNChar('zyxbwpl',5)).toBe('w');
  });
});

