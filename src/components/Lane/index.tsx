import React from "react";
import CardForm from "components/CardForm";
import Card, { Item} from "components/Card";
import Modal from "components/Modal";

import { db } from "../../firebase";
import { renderTitle } from "./laneUtils";
import styles from "./lane.module.css";

type Props = {
  type: string;
  data: Array<Item>;
}

const Lane = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  const { type, data } = props;
  const dbRef = db.ref("/board");

  const handleRemove = (id: string) => {
    dbRef.child(id).remove();
    handleModalClose();
  };

  const renderTasks = () => {
    return data.map((item: Item) => (
      <Card key={item.id} item={item} handleModalOpen={handleModalOpen} />
    ));
  };

  // Type WIP
  const handleModalOpen = (item: any) => {
    setOpen(true);
    setModalData(item);
  };

  const handleModalClose = () => {
    setOpen(false);
    setModalData(null);
  };

  const renderModal = () => {
    return (
      <Modal
        open={open}
        data={modalData}
        onRemove={handleRemove}
        onClose={handleModalClose}
        dbRef={dbRef}
      />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{renderTitle(type)}</h3>
      </div>
      {open && renderModal()}
      <CardForm dbRef={dbRef} type={type} />
      {renderTasks()}
    </div>
  );
};

export default Lane;
