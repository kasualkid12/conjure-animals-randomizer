import React from 'react';

import Monster_stat from './Monster_stat';

const Monster_stats = ({ str, dex, con, int, wis, cha }) => {
  return (
    <div className="monster_stats">
      <Monster_stat statType="STR" num={str} />
      <Monster_stat statType="DEX" num={dex} />
      <Monster_stat statType="CON" num={con} />
      <Monster_stat statType="INT" num={int} />
      <Monster_stat statType="WIS" num={wis} />
      <Monster_stat statType="CHA" num={cha} />
    </div>
  );
};

export default Monster_stats;
