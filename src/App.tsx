import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { auth } from './firebase';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
// import Board from './components/Board';

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
    auth.signOut().then(() => setUser(null));
  };

  return (
    <Router>
      <div>
        <nav>
          {user && <button onClick={handleLogout}>Log Out</button>}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/log-in">Log In</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/log-in">
            <LogIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
