import React from 'react';

import SavingThrows from './SavingThrows';
import Skills from './Skills';

const MiscInfo = () => {
  return (
    <div>
      <SavingThrows savingThrows={{ DEX: 5, CON: 11, WIS: 7, CHA: 9 }} />
      <Skills skills={{ Insight: 7, Perception: 12, Stealth: 5 }} />
    </div>
  );
};

export default MiscInfo;
