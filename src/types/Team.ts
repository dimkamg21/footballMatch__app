import { IPlayer } from './Player';

export interface ITeam {
  team: {
    id: number;
    name: string;
    logo: string;
    colors: string[] | null;
  };
  coach: {
    id: number;
    name: string;
    photo: string;
  };
  formation: string;
  startXI: IPlayer[];
  substitutes: IPlayer[];
}
