import React from 'react';

const Speed = ({ speedObj }) => {
  const items = [];
  for (const prop in speedObj) {
    if (speedObj[prop] !== 'none') {
      items.push(`${prop} ${speedObj[prop]} `);
    }
  }
  return (
    <div className="attribute">
      <div className="monster_attribute">Speed</div>
      <div>{items}</div>
    </div>
  );
};

export default Speed;
