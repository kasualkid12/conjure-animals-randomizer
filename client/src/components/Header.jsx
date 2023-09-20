import React from 'react';

const Header = ({ name, type, alignment }) => {
  return (
    <div className="monster_header">
      <div className="monster_name">{name}</div>
      <div className="monster_meta">{type}, {alignment}</div>
    </div>
  );
};

export default Header;
