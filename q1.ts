interface Hero {
  name: string;
  hp: number;
  luckyHp?: boolean; // Add optional field luckyHp to Hero interface
  // เป็นฟิลด์ที่ไม่บังคับ ในขณะที่เรายังไม่ได้คำนวณค่าหรือยังไม่ได้ตั้งค่ามันในตอนแรก
}

const q1 = (hero: Hero): Hero => {
  hero.hp += 10; // Add 10 to hp
  if(hero.hp > 100) hero.hp = 100;
  if(hero.hp % 8 === 0){
    hero.luckyHp = true; // If true, hero is lucky
  }else{
    hero.luckyHp = false; // If false, hero is not lucky
  } // Check if new hp is divisible by 8 and set luckyHp
  return hero;


};

const input1 = { name: "Batman", hp: 78 };
const input2 = { name: "Superman", hp: 95 };
const input3 = { name: "Aquaman", hp: 67 };

console.log(q1(input1)); // { name: "Batman", hp: 88, luckyHp: true }
console.log(q1(input2)); // { name: "Superman", hp: 100, luckyHp: false }
console.log(q1(input3)); // { name: "Aquaman", hp: 77, luckyHp: false }

export default q1;