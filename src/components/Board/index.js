import React from "react";

import { db } from "../../firebase";
import { LANE_TYPE } from "../../utils/enums";
import Lane from "../Lane";
import styles from "./board.module.css";

const Board = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const dbRef = db.ref(`/board`);

  React.useEffect(() => {
    dbRef.on("value", (snapshot) => {
      console.log("retrieved data");
      setLoading(false);
      setData(snapshot.val());
    });
  }, []);

  if (loading) return <div />;

  return (
    <div className={styles.container}>
      <Lane type={LANE_TYPE.TO_DO} data={data[LANE_TYPE.TO_DO]} />
      <Lane type={LANE_TYPE.IN_PROGRESS} data={data[LANE_TYPE.IN_PROGRESS]} />
      <Lane type={LANE_TYPE.DONE} data={data[LANE_TYPE.DONE]} />
    </div>
  );
};

export default Board;
