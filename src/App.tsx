import React from 'react';

import LogIn from './components/LogIn';
// import SignUp from "./components/SignUp";
// import Board from './components/Board';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <LogIn />
      {/* <SignUp /> */}
      {/* <Board /> */}
    </div>
  );
};

export default App;
