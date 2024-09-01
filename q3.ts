/* define interface for Runner objects */
interface Runner {
  name: string,
  time: number,
}

/* assign interface/type to the function definition properly */
const q3 = (runners: Runner[]): Runner[] => {
  const winner = runners.filter(runner =>runner.time > 54);
  return winner;
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));


export default q3;
