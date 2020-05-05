import React from 'react';
import { auth } from './firebase';

import LogIn from './components/LogIn';
// import SignUp from "./components/SignUp";
// import Board from './components/Board';
import './App.css';

const App = (): JSX.Element => {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  console.log('here', user);

  return (
    <div className="App">
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <Board /> */}
    </div>
  );
};

export default App;
