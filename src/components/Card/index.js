import React from "react";

import styles from "./card.module.css";

const Card = props => {
  const { item, handleModalOpen } = props;

  const handleOpen = () => {
    handleModalOpen(item);
  };

  return (
    <div className={styles.container} onClick={handleOpen}>
      {item.title}
    </div>
  );
};

export default Card;
