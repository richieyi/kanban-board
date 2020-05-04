import React from 'react';

import SignUp from './components/SignUp';
// import Board from './components/Board';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <SignUp />
      {/* <Board /> */}
    </div>
  );
};

export default App;
