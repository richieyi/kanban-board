import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { auth } from './firebase';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
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

  const handleLogout = (): void => {
    auth.signOut();
  };

  console.log('here', user);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {user && (
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/sign-in">Log In</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <LogIn />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};
// <div className="App">
//   <LogIn />
//   <SignUp />
//   <Board />
// </div>

export default App;
