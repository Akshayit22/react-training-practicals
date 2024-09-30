const { sum, Mul } = require("../../api/sum");

test("checking addition 2 :", () => {
  expect(sum(-100, -200)).toBe(-300);
});

test("checking Multiplication 1 :", () => {
  expect(Mul(10, 20)).toBe(200);
});
