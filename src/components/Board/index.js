import React from "react";

import Lane from "../Lane";
import styles from './board.module.css';

const toDoTasks = [
  { title: "Wash car" },
  { title: "Do laundry" },
  { title: "Clean room" },
  { title: "Get groceries" },
];

const progressTasks = [{ title: "Take dog to vet" }];

const doneTasks = [{ title: "Get haircut" }, { title: "Schedule dr appt" }];

const Board = (props) => {
  return (
    <div className={styles.container}>
      <Lane tasks={toDoTasks} title="To Do" />
      <Lane tasks={progressTasks} title="In Progress" />
      <Lane tasks={doneTasks} title="Done" />
    </div>
  );
};

export default Board;
