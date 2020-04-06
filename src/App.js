import React from "react";

import Board from './components/Board';
import "./App.css";


const App = props => {
  console.log(props)
  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
