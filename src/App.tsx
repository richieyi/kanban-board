import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';

import Nav from './components/Nav';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Board from './components/Board';

const App = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const handleLogout = (): void => {
    auth.signOut().then(() => setUser(null));
  };

  if (loading) return <div />;

  return (
    <Router>
      <div>
        <Nav user={user} handleLogout={handleLogout} />
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/log-in">
            <LogIn />
          </Route>
          <Route path="/">{user ? <Board user={user} /> : <Home />}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
