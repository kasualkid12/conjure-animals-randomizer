import React, { useState } from 'react';

import Title from './components/Title';
import Monster from './components/Monster';

import './Styles/App.scss';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <Title setData={setData}/>

      {data !== null ? <Monster data={data.data}/> : null}
    </div>
  );
};

export default App;
