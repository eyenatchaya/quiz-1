import fn from "../q4";

const hero1 = { items: [], gold: 200 };
const hero2 = { items: ["helmet"], gold: 100 };

const items1 = [
  { item: "shirt", price: 50 },
  { item: "pant", price: 100 },
];
const items2 = [
  { item: "shirt", price: 50 },
  { item: "pant", price: 40 },
  { item: "armor", price: 20 },
  { item: "bow", price: 10 },
];

const outputs = [
  { items: ["shirt", "pant"], gold: 50 },
  { items: ["helmet", "shirt", "pant", "bow"], gold: 0 },
];

test("q4 case 1", () => {
  expect(fn(hero1, items1)).toEqual(outputs[0]);
});

test("q4 case 2", () => {
  expect(fn(hero2, items2)).toEqual(outputs[1]);
});
