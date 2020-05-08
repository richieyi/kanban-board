import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./email-password-form.module.css";

const useStyles = makeStyles({
  input: {
    marginBottom: "5px",
  },
  button: {
    marginTop: "10px",
  },
});

interface Props {
  email: string;
  handleSubmit: (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
}

const EmailPasswordForm = (props: Props) => {
  const {
    handleSubmit,
    email,
    handleEmail,
    password,
    handlePassword,
    buttonText,
  } = props;
  const classes = useStyles();

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
          {buttonText}
      </Button>
    </form>
  );
};

export default EmailPasswordForm;
