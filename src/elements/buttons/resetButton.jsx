import React from "react";
import classes from "./buttons.module.css";

const resetButton = (props) => {
  return <input type="reset" className={classes.ResetButton}></input>;
};

export default resetButton;
