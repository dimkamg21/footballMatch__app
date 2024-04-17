export interface IPlayer {
  player: IPlayerData;
}

export interface IPlayerData {
  id: number;
  name: string;
  number: number;
  pos: string | null;
  grid: string | null;
}
