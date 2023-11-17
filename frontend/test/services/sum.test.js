const sum = require("../../src/services/sum");

describe("sum", () => {
  it("test function sum", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});