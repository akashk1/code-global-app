import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import classes from "./Modal.module.css";
import Slide from "@material-ui/core/Slide";
import Card from "../Card/Card";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <div className={classes.container}>
          <div className={classes.Row1}>
            {props.selectedUsers.slice(0, 5).map((user, id) => {
              return <Card user={user} />;
            })}
          </div>
        </div>
        <div style={{ marginLeft: "40px", marginTop: "580px" }}>
          <Button
            style={{ backgroundColor: "rgb(96, 88, 211)", color: "white" }}
            edge="start"
            color="inherit"
            onClick={props.close}
            aria-label="close"
          >
            Back
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
