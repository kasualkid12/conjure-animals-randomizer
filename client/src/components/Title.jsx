import React, { useState } from 'react';

const Title = ({ setData }) => {
  const [selectedCR, setSelectedCR] = useState('Cr0_25')

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:8080/?cr=${selectedCR}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  const handleCRChange = (e) => {
    setSelectedCR(e.target.value)
  }

  return (
    <div>
      <div className="title">
        <h1>Conjure Animals Randomizer</h1>
      </div>
      <div className="options">
        <select name="cr" className="cr" onChange={handleCRChange} value={selectedCR}>
          <option value={'Cr0_25'}>CR 0.25</option>
          <option value={'Cr0_5'}>CR 0.5</option>
          <option value={'Cr1'}>CR 1</option>
          <option value={'Cr2'}>CR 2</option>
        </select>
        <button type="button" onClick={fetchData}>
          Conjure Animals
        </button>
      </div>
    </div>
  );
};

export default Title;
