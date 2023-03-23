const getType = require('./ex3');

describe("getType function", () => {
  test("getType 1 should be number", () => {
    expect(getType(1)).toBe('number');
  });

  test("getType false should be boolean", () => {
    expect(getType(false)).toBe('boolean');
  });

  test("getType {} should be object", () => {
    expect(getType({})).toBe('object');
  });

  test("getType 'test' should be string", () => {
    expect(getType('test')).toBe('string');
  });

  test("getType array should be object", () => {
    expect(getType(['array'])).toBe('object');
  });
});

