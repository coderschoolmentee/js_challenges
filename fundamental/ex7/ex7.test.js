const findIsIndex = require('./ex7');

describe("findIsIndex function", () => {
  test("should be 3", () => {
    expect(findIsIndex('praise')).toBe(3);
  });
  
  test("should be 1", () => {
    expect(findIsIndex('risky')).toBe(1);
  });
  
  test("should be 3", () => {
    expect(findIsIndex('paris')).toBe(3);
  });
});

