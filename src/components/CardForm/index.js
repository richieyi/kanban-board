import React from "react";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { db } from "../../firebase";

import styles from "./card-form.module.css";

const CardForm = (props) => {
  const { dbRef, type } = props;

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") {
      dbRef.push().set({ title: value, type });
      setValue("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        label="New Task"
        onChange={handleChange}
        value={value}
        error={error}
        placeholder="Feed the dog"
      />
      <AddIcon onClick={handleSubmit} className={styles.icon} />
    </form>
  );
};

export default CardForm;
