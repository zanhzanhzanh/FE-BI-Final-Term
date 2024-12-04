import React, { useState } from 'react';
import './css/App.css';
import ApiComponent from './ApiComponent';
import Form from './Form';

function App() {
  const [data, setData] = useState('');

  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <Form setData={setData} />
          <ApiComponent data={data} />
        </header>
      </div>
    </div>
  );
}

export default App;
