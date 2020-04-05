import React from "react";

import Lane from "./components/Lane";
import "./App.css";

const tasks = [
  { title: 'Wash car' },
  { title: 'Do laundry' },
  { title: 'Clean room' },
  { title: 'Get groceries' },
];

const App = () => {
  return (
    <div className="App">
      <Lane tasks={tasks} title="To Do" />
    </div>
  );
};

export default App;
