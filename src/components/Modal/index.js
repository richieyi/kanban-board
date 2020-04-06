import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiModal from "@material-ui/core/Modal";

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
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { children, open, onClose } = props;

  return (
    <MuiModal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
