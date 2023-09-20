import React from 'react';

const calcMod = (abilityScore) => {
  return Math.floor((abilityScore - 10) / 2);
};

const Monster_stat = ({ statType, num }) => {
  return (
    <div className="monster_stat">
      <div className="monster_stat-type">{statType}</div>
      <div>
        <div>
          {num} ({calcMod(num)})
        </div>
      </div>
    </div>
  );
};

export default Monster_stat;
