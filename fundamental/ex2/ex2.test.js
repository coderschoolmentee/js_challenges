const compare = require('./ex2');

describe("compare function", () => {
  test("compare 2 vs 3 should be false", () => {
    expect(compare(2, 3)).toBeFalsy();
  });
  
  test("compare 3 vs 3 should be true", () => {
    expect(compare(3, 3)).toBeTruthy();
  });
  
  test("compare 1 vs '1' should be false", () => {
    expect(compare(1, '1')).toBeFalsy();
  });

  test("compare '10' vs '10' should be true", () => {
    expect(compare('10', '10')).toBeTruthy();
  });
});

