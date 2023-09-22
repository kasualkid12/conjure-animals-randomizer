import React from 'react';

const Special_ability = ({ name, desc, usage }) => {
  return (
    <div className="special_abilities">
      <b>
        {name}
        {usage.rest_types !== null
          ? String(' (' + usage.times + ' ' + usage.type + '). ')
          : '. '}
      </b>
      {desc}
    </div>
  );
};

export default Special_ability;
