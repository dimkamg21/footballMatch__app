/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from'./useFetch';

export const fetchTeam = async (matchId: number) => {
  try {
    const response = await useFetch(`../../data/team${matchId}.json`);
    return response;
  } catch (error) {
    console.error('Error fetching team data:', error);
    return null;
  }
};
