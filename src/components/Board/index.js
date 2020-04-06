import React from "react";

import { LANE_TYPE } from "../../utils/enums";
import Lane from "../Lane";
import styles from "./board.module.css";

const toDoTasks = {
  type: LANE_TYPE.TO_DO,
  tasks: [
    { title: "Wash car" },
    { title: "Do laundry" },
    { title: "Clean room" },
    { title: "Get groceries" },
  ],
};

const progressTasks = {
  type: LANE_TYPE.IN_PROGRESS,
  tasks: [{ title: "Take dog to vet" }, { title: "Sweep the yard" }],
};

const doneTasks = {
  type: LANE_TYPE.DONE,
  tasks: [
    { title: "Get haircut" },
    { title: "Schedule dr appt" },
    { title: "Finish vacation planning" },
  ],
};

const Board = (props) => {
  return (
    <div className={styles.container}>
      <Lane data={toDoTasks} />
      <Lane data={progressTasks} />
      <Lane data={doneTasks} />
    </div>
  );
};

export default Board;
