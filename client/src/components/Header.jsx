import React from 'react';

const Header = ({ name, size, type, alignment }) => {
  return (
    <div className="monster_header">
      <div className="monster_name">{name}</div>
      <div className="monster_meta">{size} {type}, {alignment}</div>
    </div>
  );
};

export default Header;
