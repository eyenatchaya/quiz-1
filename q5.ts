/* define interface for Mafia objects */
interface Mafia {
  id: number;
  power: number;
}

interface Fight {
  mafiaId: number;
  Score: number;
}

/* assign interface/type to the function definition properly */
const q5 = (mafias: Mafia[], fights: Fight[]): Mafia => {
  // Initialize a map to keep track of scores for each mafia
  const scoresMap: { [key: number]: number } = {};

  // Initialize scores for each mafia based on their initial power
  mafias.forEach(mafia => {
    scoresMap[mafia.id] = mafia.power;
  });

  // Update the scores based on the fights
  fights.forEach(fight => {
    if (scoresMap.hasOwnProperty(fight.mafiaId)) {
      scoresMap[fight.mafiaId] += fight.Score;
    }
  });

  // Find the mafia with the maximum score
  let maxScore = -Infinity;
  let bestMafia: Mafia | null = null;

  for (const mafia of mafias) {
    if (scoresMap[mafia.id] > maxScore) {
      maxScore = scoresMap[mafia.id];
      bestMafia = mafia;
    }
  }

  return bestMafia!;
};

// Test cases
const mafias = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];

const fights = [
  { mafiaId: 5, Score: 10 },
  { mafiaId: 2, Score: 20 },
  { mafiaId: 4, Score: 15 },
  { mafiaId: 3, Score: 25 },
  { mafiaId: 1, Score: 5 },
  { mafiaId: 3, Score: 10 },
];

console.log(q5(mafias, fights)); // Expected output: { id: 3, power: 95 }

export default q5;
