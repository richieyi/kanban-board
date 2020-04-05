import React from 'react';

import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Card title="Wash car" />
      <Card title="Do laundry" />
      <Card title="Clean room" />
      <Card title="Get groceries" />
    </div>
  );
}

export default App;
