import React from "react";

import { LANE_TYPE } from "../../utils/enums";
import Lane from "../Lane";
import styles from "./board.module.css";

const Board = (props) => {
  return (
    <div className={styles.container}>
      <Lane type={LANE_TYPE.TO_DO} />
      <Lane type={LANE_TYPE.IN_PROGRESS} />
      <Lane type={LANE_TYPE.DONE} />
    </div>
  );
};

export default Board;
