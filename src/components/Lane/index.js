import React from "react";
import { db } from '../../firebase';

import { LANE_TYPE } from "../../utils/enums";
import Card from "../Card";
import styles from "./lane.module.css";

const Lane = (props) => {
  const [newCard, setNewCard] = React.useState("");
  const { data } = props;
  const ref = db.ref('/todos')

  React.useEffect(() => {
    console.log('uhhh', process.env.REACT_APP_TEST)
    console.log('uhhh2', process.env.REACT_APP_FIREBASE_DATABASE_URL)
    ref.on('value', snapshot => {
      console.log('here123', snapshot.val())
    })
  }, [ref])

  const renderTitle = () => {
    let title;
    switch (data.type) {
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
        break;
    }

    return <h3>{title}</h3>;
  };

  const renderTasks = () => {
    return data.tasks.map((task) => (
      <Card title={task.title} key={task.title} />
    ));
  };

  const handleNewCard = () => {
    ref.push().set(newCard);
    setNewCard('');
  };

  const handleOnChange = (e) => {
    setNewCard(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{renderTitle()}</div>
      <input onChange={handleOnChange} value={newCard} />
      <button onClick={handleNewCard}>Add</button>
      {renderTasks()}
    </div>
  );
};

export default Lane;
