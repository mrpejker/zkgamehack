import React from 'react';

interface MoleProps {
  onClick: () => void;
  moleUp: boolean;
}

const Mole: React.FC<MoleProps> = ({ onClick, moleUp }) => {
  return (
    <div
      className={`mole ${moleUp ? 'mole-up' : ''}`}
      onClick={moleUp ? onClick : undefined}
    >
      {moleUp && <img src="/image/mole.svg" alt="Mole" />}
    </div>
  );
};

export default Mole;