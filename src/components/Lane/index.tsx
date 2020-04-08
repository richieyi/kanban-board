import React from 'react';
import CardForm from 'components/CardForm';
import Card, { Item } from 'components/Card';
import Modal from 'components/Modal';

import { db } from '../../firebase';
import { renderTitle } from './laneUtils';
import styles from './lane.module.css';

interface Props {
  type: string;
  data: Item[];
}

const Lane = (props: Props): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<Item | null>(null);

  const { type, data } = props;
  const dbRef = db.ref('/board');

  const handleRemove = (id: string): void => {
    dbRef.child(id).remove();
    handleModalClose();
  };

  const renderTasks = (): JSX.Element[] => {
    return data.map((item: Item) => (
      <Card key={item.id} item={item} handleModalOpen={handleModalOpen} />
    ));
  };

  const handleModalOpen = (item: Item): void => {
    setOpen(true);
    setModalData(item);
  };

  const handleModalClose = (): void => {
    setOpen(false);
    setModalData(null);
  };

  const renderModal = (): JSX.Element => {
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
