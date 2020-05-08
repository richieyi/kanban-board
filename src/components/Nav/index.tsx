import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    user: any;
    handleLogout: () => void;
}

const Nav = (props: Props): JSX.Element => {
    const { user, handleLogout} = props;

    return (
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
    )
}

export default Nav;