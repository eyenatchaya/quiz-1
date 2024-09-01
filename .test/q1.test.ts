import fn from "../q1";

const inputs = [
  { name: "Batman", hp: 78 },
  { name: "Superman", hp: 95 },
  { name: "Aquaman", hp: 67 },
];

const outputs = [
  { name: "Batman", hp: 88, luckyHp: true },
  { name: "Superman", hp: 100, luckyHp: false },
  { name: "Aquaman", hp: 77, luckyHp: false },
];


for (let i = 0; i < inputs.length; i++) {
  test(`q1 case${i + 1}`, () => {
    expect(fn(inputs[i])).toEqual(outputs[i]);
  });
}
