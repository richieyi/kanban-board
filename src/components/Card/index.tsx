import React from "react";

import styles from "./card.module.css";

export interface Item {
  id: string;
  title: string;
  type: string;
}

type Props = {
  handleModalOpen: (item: Item) => void; 
  item: Item;
}

const Card = (props: Props) => {
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
