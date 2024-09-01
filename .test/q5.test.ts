import func from "../q5";

const ms1 = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];

const fs1 = [5, 2, 4, 3, 1, 3];

const ms2 = [
  { id: 1, power: 100 },
  { id: 2, power: 100 },
  { id: 3, power: 100 },
  { id: 4, power: 101 },
];
const fs2 = [1, 2, 3, 1, 2, 3];

const ms3 = [
  { id: 1, power: -50 },
  { id: 2, power: -100 },
  { id: 3, power: 20 },
];
const fs3 = [1, 2, 3, 1];

const output1 = { id: 3, power: 107 };
const output2 = { id: 4, power: 101 };
const output3 = { id: 2, power: -100 };

test("q5 case 1", () => {
  expect(func(ms1, fs1)).toEqual(output1);
});

test("q5 case 2", () => {
  expect(func(ms2, fs2)).toEqual(output2);
});

test("q5 case 3", () => {
  expect(func(ms3, fs3)).toEqual(output3);
});
