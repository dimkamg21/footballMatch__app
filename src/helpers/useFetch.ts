/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMatchData } from '../types/MatchData';

export const useFetch = (
  url: string,
  delay: number = 1000
): Promise<IMatchData> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error fetching users data");
          }
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          resolve({} as IMatchData);
        });
    }, delay);
  });
};
