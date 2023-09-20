import React from 'react';

import Separator from './Separator';
import Monster_stats from './Monster_stats';
import Attribute from './Attribute';
import Header from './Header';
import MiscInfo from './MiscInfo';


const Monster = () => {
  return (
    <div className="monster">
      <Header name="Monster Name" type="Monster Type" alignment="Alignment" />
      <Separator />
      <Attribute attribute="Armor Class" num="'num'" />
      <Attribute attribute="Hit Points" num="'num'" />
      <Attribute attribute="Speed" num="'num'" />
      <Separator />
      <Monster_stats str={10} dex={10} con={10} int={10} wis={10} cha={10} />
      <Separator />
      <MiscInfo />
    </div>
  );
};

export default Monster;
