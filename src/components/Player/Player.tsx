import React from 'react';
import { IPlayerData } from '../../types/Player';
import './Player.scss';

interface PlayerProps {
  player: IPlayerData;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  const playerGridRow = player.grid?.split(':')[1];
  const playerGridColumn = player.grid?.split(':')[0];

  let playerGrid = {
    gridColumn: `${Number(playerGridColumn)} / ${Number(playerGridColumn) + 1}`,
    gridRow: `${Number(playerGridRow)} / ${Number(playerGridRow) + 1}`,
    alignSelf: 'center',
    justifySelf: 'center',
    transform: 'rotate(-90deg)'
  };
  
  if (playerGridRow === '1' && playerGridColumn === '1') {
    playerGrid = {
      ...playerGrid,
      gridRow: '1/-1',
    };
  }

  return (
    <div style={playerGrid}>
        <div className='player' >
          <span className="player__hover-name">{player.name}</span>
        </div>
    </div>
  );
};

export default Player;
