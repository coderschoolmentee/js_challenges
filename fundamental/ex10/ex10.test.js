const concatenateString = require('./ex10');

describe("concatenateString function", () => {
  test("should be cheesecake", () => {
    expect(concatenateString('cheese', 'cake')).toBe('cheesecake');
  });

  test("should be slips", () => {
    expect(concatenateString('lips', 's')).toBe('slips');
  });

  test("should be Javascript", () => {
    expect(concatenateString('Java', 'script')).toBe('Javascript');
  });

  test("should be I think, therefore I am", () => {
    expect(concatenateString(' think, therefore I am', 'I')).toBe('I think, therefore I am');
  });
});

