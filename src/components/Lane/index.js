import React from "react";
import { db } from "../../firebase";

import { LANE_TYPE } from "../../utils/enums";
import Card from "../Card";
import Modal from "../Modal";
import styles from "./lane.module.css";

const Lane = (props) => {
  const [newCard, setNewCard] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const [data, setData] = React.useState({});

  const { type } = props;
  const dbRef = db.ref(`/${type}`);

  React.useEffect(() => {
    dbRef.on("value", (snapshot) => {
      setLoading(false);
      setData(snapshot.val());
      console.log('get data')
    });
  }, []);

  const renderTitle = () => {
    let title;
    switch (type) {
      case LANE_TYPE.TO_DO:
        title = "To Do";
        break;
      case LANE_TYPE.IN_PROGRESS:
        title = "In Progress";
        break;
      case LANE_TYPE.DONE:
        title = "Done";
        break;
      default:
        title = "N/A";
        break;
    }

    return <h3>{title}</h3>;
  };

  const handleRemove = (id) => {
    console.log(`removing ${id}`)
    dbRef.child(id).remove();
  };

  const renderTasks = () => {
    const arr = [];

    for (let key in data) {
      arr.push(
        <Card
          id={key}
          key={key}
          title={data[key].title}
          // handleRemove={handleRemove}
          handleModalOpen={handleModalOpen}
        />
      );
    }

    return arr.map((item) => item);
  };

  const handleModalOpen = item => {
    setOpen(true);
    setModalData(item);
  }

  const handleModalClose = () => {
    setOpen(false);
    setModalData(null)
  }

  const handleNewCard = () => {
    dbRef.push().set({ title: newCard });
    setNewCard("");
  };

  const handleOnChange = (e) => {
    setNewCard(e.target.value);
  };

  if (loading) return <div />

  return (
    <div className={styles.container}>
      <div className={styles.title}>{renderTitle()}</div>
      <Modal title={modalData} onClose={handleModalClose} open={open} />
      <input onChange={handleOnChange} value={newCard} />
      <button onClick={handleNewCard}>Add</button>
      {renderTasks()}
    </div>
  );
};

export default Lane;
