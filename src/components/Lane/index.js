import React from "react";

import { LANE_TYPE } from "../../utils/enums";
import Card from "../Card";
import styles from "./lane.module.css";

const Lane = (props) => {
  const { data } = props;

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

  return (
    <div className={styles.container}>
      <div className={styles.title}>{renderTitle()}</div>
      {renderTasks()}
    </div>
  );
};

export default Lane;
