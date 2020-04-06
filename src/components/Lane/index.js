import React from "react";
import { db } from "../../firebase";

import { LANE_TYPE } from "../../utils/enums";
import Card from "../Card";
import styles from "./lane.module.css";

const Lane = (props) => {
  const [newCard, setNewCard] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [laneData, setLaneData] = React.useState({});

  const { data } = props;
  const ref = db.ref(`/${data.type}`);

  React.useEffect(() => {
    ref.on("value", (snapshot) => {
      // console.log("val", snapshot.val());
      setLaneData(snapshot.val())
    });
  }, []);
  // console.log('lane data', laneData);

  // const handleRemove = () => {
  //   ref.child("-M4C8oDgSeYo6jL5WgiG").remove();
  // };

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
        title = "N/A";
        break;
    }

    return <h3>{title}</h3>;
  };

  const renderTasks = () => {
    const arr = [];

    for (let key in laneData) {
      arr.push(<Card key={key} title={laneData[key].title} />);
    }

    return arr.map(item => item)
  };

  const handleNewCard = () => {
    ref.push().set({ title: newCard });
    setNewCard("");
  };

  const handleOnChange = (e) => {
    setNewCard(e.target.value);
  };

  if (loading) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <div className={styles.title}>{renderTitle()}</div>
      <input onChange={handleOnChange} value={newCard} />
      <button onClick={handleNewCard}>Add</button>
      {/* <button onClick={handleRemove}>Remove</button> */}
      {renderTasks()}
    </div>
  );
};

export default Lane;
