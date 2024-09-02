/* define interface for Runner objects */
interface Runner {
  name: string,
  time: number,
}

/* assign interface/type to the function definition properly */
const q3 = (runners: Runner[]): Runner[] => {
  let avg:number = 0;
  let sum:number = 0;
  for(let i:number = 0; i < runners.length; i++) {
    sum += runners[i].time;
  }
  avg = sum / runners.length;
  let filterTime = runners.filter((runner: Runner):boolean => runner.time <= avg);
  return filterTime;
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));


export default q3;
