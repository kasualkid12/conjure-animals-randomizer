import React, { useEffect, useState } from 'react';

import Separator from './Separator';
import Monster_stats from './Monster_stats';
import Attribute from './Attribute';
import Header from './Header';
import MiscInfo from './MiscInfo';
import Speed from './Speed';
import Special_abilities from './Special_abilities';
import Actions from './Actions';

const Monster = ({ data }) => {
  return (
    <div className="monster">
      <Header
        name={data.name}
        size={data.size}
        type={data.type}
        alignment={data.alignment}
      />
      <Separator />
      <Attribute attribute="Armor Class" num={data.armor_class[0].value} />
      <Attribute attribute="Hit Points" num={data.hit_points} />
      <Speed speedObj={data.speed} />
      <Separator />
      <Monster_stats
        str={data.strength}
        dex={data.dexterity}
        con={data.constitution}
        int={data.inteligence}
        wis={data.wisdom}
        cha={data.constitution}
      />
      <Separator />
      <MiscInfo data={data}/>
      <Separator />
      <Special_abilities special_abilities={data.special_abilities}/>

      <Actions actions={data.actions} legendary={false} />
      {data.legendary_actions.length !== 0 ? <Actions actions={data.legendary_actions} legendary={true} /> : null }
    </div>
  );
};

export default Monster;
