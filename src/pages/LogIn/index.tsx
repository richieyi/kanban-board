import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { auth } from "../../firebase";

import styles from "./login.module.css";

const useStyles = makeStyles({
  input: {
    marginBottom: '5px'
  },
  button: {
    marginTop: '10px'
  }
});

const LogIn = (): JSX.Element => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ): void => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        label="Email"
        name="email"
        type="text"
        value={email}
        onChange={handleEmail}
        className={classes.input}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
        className={classes.input}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Log In
      </Button>
    </form>
  );
};

export default LogIn;
