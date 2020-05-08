import React from "react";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";

interface Props {
  user: any;
  handleLogout: () => void;
}

const Nav = (props: Props): JSX.Element => {
  const { user, handleLogout } = props;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
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
      {user && (
        <button className={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </button>
      )}
    </nav>
  );
};

export default Nav;
