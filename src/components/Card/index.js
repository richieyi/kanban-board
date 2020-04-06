import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
  const { title, handleModalOpen } = props;

  const handleOpen = () => {
    // props.handleRemove(props.id);
    handleModalOpen(title);
  };

  return (
    <div className={styles.container} onClick={handleOpen}>
      {title}
    </div>
  );
};

export default Card;
