import React from 'react';

const Title = () => {
  return (
    <div>
      <div className="title">
        <h1>Conjure Animals Randomizer</h1>
      </div>
      <div className="options">
        <select name="cr" className="cr">
          <option value={'Cr0_25'}>CR 0.25</option>
          <option value={'Cr0_5'}>CR 0.5</option>
          <option value={'Cr1'}>CR 1</option>
          <option value={'Cr2'}>CR 2</option>
        </select>
        <button type="button">Conjure Animals</button>
      </div>
    </div>
  );
};

export default Title;
