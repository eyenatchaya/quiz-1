import fn from "../q3";
const inputs = [
  [
    { name: "Bobby", time: 45 },
    { name: "Robert", time: 55 },
    { name: "Wilson", time: 120 },
  ],
  [
    { name: "A", time: 1 },
    { name: "B", time: 200 },
    { name: "C", time: 201 },
    { name: "D", time: 202 },
  ],
  [
    { name: "A", time: 1 },
    { name: "B", time: 1 },
    { name: "C", time: 1 },
    { name: "D", time: 1 },
  ],
];

const outputs = [
  [
    { name: "Bobby", time: 45 },
    { name: "Robert", time: 55 },
  ],
  [{ name: "A", time: 1 }],
  [
    { name: "A", time: 1 },
    { name: "B", time: 1 },
    { name: "C", time: 1 },
    { name: "D", time: 1 },
  ],
];

for (let i = 0; i < inputs.length; i++) {
  test(`q3 case${i + 1}`, () => {
    const result = fn(inputs[i]);
    expect(result).toEqual(expect.arrayContaining(outputs[i]));
    expect(result.length).toEqual(outputs[i].length);
  });
}
