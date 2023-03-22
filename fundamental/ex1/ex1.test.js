const sum = require('./ex1');

describe("sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test("adds 1 + 10 to equal 11", () => {
    expect(sum(1, 10)).toBe(11);
  });
  
  test("adds 99 + 1 to equal 100", () => {
    expect(sum(99, 1)).toBe(100);
  });
})