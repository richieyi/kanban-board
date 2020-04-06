import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiModal from "@material-ui/core/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import MoveIcon from "@material-ui/icons/TrendingFlat";

import { LANE_TYPE } from "../../utils/enums";

import styles from "./modal.module.css";

const getModalStyle = () => {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal = (props) => {
  const { dbRef } = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { data, onRemove, open, onClose } = props;

  const handleRemove = () => {
    onRemove(data.id);
  };

  // const handleMove = () => {
  //  WIP: Data structure
  // not ideal to delete and create new
  // };

  const renderNextAction = () => {
    let button;
    switch (data.type) {
      case LANE_TYPE.TO_DO:
        button = (
          <Button
            variant="contained"
            color="primary"
            startIcon={<MoveIcon />}
            onClick={() => {}}
          >
            In Progress
          </Button>
        );
        break;
      case LANE_TYPE.IN_PROGRESS:
        button = (
          <Button
            variant="contained"
            color="primary"
            startIcon={<MoveIcon />}
            onClick={() => {}}
          >
            Done
          </Button>
        );
        break;
      default:
        break;
    }

    return button;
  };

  return (
    <MuiModal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <div className={styles.container}>
          <span>Task: {data.title}</span>
        </div>
        <div className={styles.actionButtons}>
          {/* {renderNextAction()} */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={handleRemove}
          >
            Delete
          </Button>
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
