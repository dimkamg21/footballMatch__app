import { ITeam } from './Team';

export interface IMatchData {
  get: string;
  parameters: {
    fixture: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ITeam[];
}