import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
  const { title } = props;

  const handleRemove = () => {
    props.handleRemove(props.id);
  };

  return (
    <div className={styles.container} onClick={handleRemove}>
      {title}
    </div>
  );
};

export default Card;
