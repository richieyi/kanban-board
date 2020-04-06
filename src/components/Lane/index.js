import React from "react";
import CardForm from "components/CardForm";
import Card from "components/Card";
import Modal from "components/Modal";

import { db } from "../../firebase";
import { renderTitle } from "./laneUtils";
import styles from "./lane.module.css";

const Lane = (props) => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  const { type, data } = props;
  const dbRef = db.ref("/board");

  const handleRemove = (id) => {
    dbRef.child(id).remove();
    handleModalClose();
  };

  const renderTasks = () => {
    return data.map((item) => (
      <Card key={item.id} item={item} handleModalOpen={handleModalOpen} />
    ));
  };

  const handleModalOpen = (item) => {
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
