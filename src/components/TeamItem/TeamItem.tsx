import React from 'react';
import Player from '../Player/Player';
import { ITeam } from '../../types/Team';
import './TeamItem.scss';

interface TeamProps {
  team: ITeam;
  isLeft: boolean;
}

const TeamItem: React.FC<TeamProps> = ({ team, isLeft }) => {
  const halfFieldClassName = isLeft ? "left-half" : "right-half";

  const { formation } = team;

  const formationNumArr = formation.split("-").map(Number);
  const gridRows = Math.max(...formationNumArr);
  const gridColumns = formationNumArr.length + 1;

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gridTemplateRows: `repeat(${gridRows}, 1fr)`,
    height: '450px',
    width: '100%',
  };

  return (
    <div className="teamItem">
      <div style={gridStyles} className={halfFieldClassName}>
        {team.startXI.map(({ player }) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default TeamItem;
