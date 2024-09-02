function func() {
  class Mafia {
    constructor(public id: number, public power: number) {}
  }

  function findStrongestMafia(mafias: Mafia[], fights: [number, number][]): Mafia | null {
    // สร้าง Map เพื่อเก็บข้อมูลมาเฟียโดยใช้ ID เป็น key
    const mafiaMap = new Map<number, Mafia>();
    mafias.forEach(mafia => mafiaMap.set(mafia.id, mafia));

    // อัปเดตพลังของมาเฟียหลังจากการต่อสู้
    fights.forEach(fight => {
      const mafia1 = mafiaMap.get(fight[0]);
      const mafia2 = mafiaMap.get(fight[1]);

      if (mafia1 && mafia2) {
        if (mafia1.power > mafia2.power) {
          mafia1.power += mafia2.power;
        } else {
          mafia2.power += mafia1.power;
        }

        // อัปเดต Mafia map หลังการต่อสู้
        mafiaMap.set(mafia1.id, mafia1);
        mafiaMap.set(mafia2.id, mafia2);
      }
    });

    // หามาเฟียที่มีพลังมากที่สุด
    let strongestMafia: Mafia | null = null;
    let maxPower = -Infinity;

    for (const mafia of mafiaMap.values()) {
      if (mafia.power > maxPower) {
        strongestMafia = mafia;
        maxPower = mafia.power;
      }
    }

    return strongestMafia;
  }

  // ตัวอย่างการใช้งาน
  const mafias = [
    new Mafia(1, 50),
    new Mafia(2, 30),
    new Mafia(3, 60),
    new Mafia(4, 42),
    new Mafia(5, 70)
  ];

  const fights: [number, number][] = [
    [5, 2],
    [4, 3],
    [1, 3]
  ];

  const result = findStrongestMafia(mafias, fights);
  console.log(result); // Output: Mafia { id: 3, power: 107 }
}

export default func;
