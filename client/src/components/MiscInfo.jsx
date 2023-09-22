import React from 'react';

import SavingThrows from './SavingThrows';
import Skills from './Skills';

const MiscInfo = ({ data }) => {
  const savingThrows = [];
  const skills = [];

  for (let i = 0; i < data.proficiencies.length; i++) {
    if (/^Saving Throw/.test(data.proficiencies[i].proficiency.name)) {
      savingThrows.push(
        String(
          data.proficiencies[i].proficiency.name.slice(-3) +
            ' +' +
            data.proficiencies[i].value +
            ' '
        )
      );
    }

    if (/^Skill/.test(data.proficiencies[i].proficiency.name)) {
      skills.push(
        String(
          data.proficiencies[i].proficiency.name.slice(7) +
            ' +' +
            data.proficiencies[i].value +
            ' '
        )
      );
    }
  }

  return (
    <div>
      <SavingThrows savingThrows={savingThrows} />
      <Skills skills={skills} />
    </div>
  );
};

export default MiscInfo;
