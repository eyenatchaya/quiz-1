import func from "../q2";

const inputs = [
  [1, 3],
  [6, 10],
  [20, 26],
];
test("q2 case 1", () => {
  expect(func(inputs[0][0], inputs[0][1])).toEqual(4);
});

test("q2 case 2", () => {
  expect(func(inputs[1][0], inputs[1][1])).toEqual(16);
});

test("q2 case 3", () => {
  expect(func(inputs[2][0], inputs[2][1])).toEqual(69);
});
