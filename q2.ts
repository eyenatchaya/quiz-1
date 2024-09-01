/* assign interface/type to the function definition properly */
interface Number{ //Interface นี้กำหนดการใช้ตัวเลข m และ n แต่จริง ๆ แล้วไม่ได้ใช้ในฟังก์ชันที่เขียนขึ้น ดังนั้นอาจไม่จำเป็นที่จะต้องใช้ Interface 
 m: number;
 n: number;
}
function q2(m:number, n:number):number {
  let sum = 0;
  for(let i = m; i<=n; i++) {
    if((i%2)!=0) sum +=i; 
  }
  return sum;
}
//test cases
console.log(q2(1, 5));
console.log(q2(10, 20));

export default q2;

// หาผลรวมตั้งแต่ของเลขที่ ตั้งแต่ m ถึง n