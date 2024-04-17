import React from 'react';
import './Button.scss';

interface ButtonProps {
  matchNum: number;
  isActive: boolean,
  handleClick: (teamId: number) => void,
}

const Button: React.FC<ButtonProps> = ({ matchNum, isActive, handleClick }) => {
  return (
    <button
      className={`button ${isActive ? "button-active" : ""}`}
      onClick={() => handleClick(matchNum)}
    >
      Team {matchNum}
    </button>
  );
};

export default Button;