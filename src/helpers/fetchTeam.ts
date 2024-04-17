import { IMatchData } from '../types/MatchData';
import team1 from '../../data/team1.json'
import team2 from '../../data/team2.json'
import team3 from '../../data/team3.json'

const matchData: { [key: number]: IMatchData } = {
  1: team1,
  2: team2,
  3: team3,
};

export const fetchTeam = (matchId: number): Promise<IMatchData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = matchData[matchId];
      if (!response) {
        console.error(`No data found for matchId: ${matchId}`);
        resolve(null);
      } else {
        resolve(response);
      }
    }, 1000);
  });
};
