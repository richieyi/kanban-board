import React from "react";

import Card from "../Card";
import styles from './lane.module.css';

const Lane = (props) => {
  const { tasks, title } = props;

  const renderTasks = () => {
    return tasks.map((task) => <Card title={task.title} key={task.title} />);
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {renderTasks()}
    </div>
  );
};

export default Lane;
