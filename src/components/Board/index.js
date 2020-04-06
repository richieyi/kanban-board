import React from "react";

import { db } from "../../firebase";
import { LANE_TYPE } from "utils/enums";
import Lane from "components/Lane";
import styles from "./board.module.css";

const Board = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const dbRef = db.ref(`/board`);

  React.useEffect(() => {
    dbRef.on("value", (snapshot) => {
      setLoading(false);
      setData(snapshot.val());
    });
  }, []);

  if (loading) return <div />;

  const filterData = (type) => {
    const arr = [];
    for (let key in data) {
      if (data[key].type === type) {
        arr.push({ id: key, title: data[key].title, type: data[key].type });
      }
    }

    return arr;
  };

  return (
    <div className={styles.container}>
      <Lane type={LANE_TYPE.TO_DO} data={filterData(LANE_TYPE.TO_DO)} />
      <Lane
        type={LANE_TYPE.IN_PROGRESS}
        data={filterData(LANE_TYPE.IN_PROGRESS)}
      />
      <Lane type={LANE_TYPE.DONE} data={filterData(LANE_TYPE.DONE)} />
    </div>
  );
};

export default Board;
