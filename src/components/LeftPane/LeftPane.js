import React, { useState } from "react";
import classes from "./LeftPane.module.css";
import MoneyIcon from "../../Images/4475671331582800511.svg";
import BetIcon from "../../Images/roulette.svg";
import Avatar from "@material-ui/core/Avatar";
import TrophyIcon from "../../Images/Trophy.svg";
import DiceIcon from "../../Images/dice.svg";
import { Button } from "@material-ui/core";
import Modal from "../Modal/Modal";
const LeftPane = (props) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.LeftPane}>
      <div className={classes.iconWrap}>
        <img src={DiceIcon} className={classes.icon} />
      </div>
      <div className={classes.container}>
        {props.selectedUsers.map((user, index) => {
          return (
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img src={user["Profile Image"]} className={classes.img} />
              </div>
              <div>{user.Name}</div>
              <div style={{ marginBottom: "5px" }}>
                <span>{user.Bet}</span>
                <Avatar
                  src={BetIcon}
                  style={{
                    marginTop: "-20px",
                    width: "20px",
                    height: "20px",
                    marginLeft: "58px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "5px" }}>
                {user.wins}
                <Avatar
                  src={TrophyIcon}
                  style={{
                    marginTop: "-20px",
                    width: "20px",
                    height: "20px",
                    marginLeft: "58px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "5px" }}>
                {user.Price}
                <Avatar
                  src={MoneyIcon}
                  style={{
                    marginTop: "-20px",
                    width: "20px",
                    height: "20px",
                    marginLeft: "58px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          onClick={onOpen}
          disabled={props.selectedUsers.length === 0}
        >
          Start
        </Button>
      </div>
      <div>
        <Modal
          open={open}
          close={onClose}
          selectedUsers={props.selectedUsers}
        />
      </div>
    </div>
  );
};

export default LeftPane;
