import React from "react";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import styles from "./card-form.module.css";

const CardForm = (props) => {
  const { dbRef } = props;

  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dbRef.push().set({ title: value });
    setValue("");
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
        placeholder="Feed the dog"
      />
      <AddIcon onClick={handleSubmit} className={styles.icon} />
    </form>
  );
};

export default CardForm;
