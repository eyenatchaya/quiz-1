/* define interface for Mafia objects */
interface Mafia {
  id: number;
  power: number;
}

const q5 = (mafias:Mafia[], fights:number[]):Mafia => {
  for (let i = 0; i < fights.length /2 ; i ++){
    let mafia_battle = mafias.filter((maf)=>maf.id === fights[i+i] ||maf.id === fights[i+i+1] )
    if (mafia_battle[0].power > mafia_battle[1].power){
      mafia_battle[0].power += mafia_battle[1].power;
    }
    else if (mafia_battle[0].power < mafia_battle[1].power){
      mafia_battle[1].power += mafia_battle[0].power;
    }
    else {

    }
  }
  let max = 0;
  for (let i = 0;i < mafias.length;i++){
    if (mafias[i].power >= mafias[max].power){
      max = i;
    }
  }
  return mafias[max];
};

//Test case
const mafias = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];
const fights = [5, 2, 4, 3, 1, 3];
console.log(q5(mafias, fights));

export default q5;