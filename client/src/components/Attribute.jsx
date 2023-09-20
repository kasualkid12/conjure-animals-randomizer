import React from 'react';

const Attribute = ({ attribute, num }) => {
  return (
    <div className="attribute">
      <div className="monster_attribute">{attribute}</div>
      <div>{num}</div>
    </div>
  );
};

export default Attribute;
