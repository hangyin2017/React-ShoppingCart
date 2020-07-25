import React from "react";
import Counter from "../../elements/counter/counter";
import ResetButton from "../../elements/buttons/resetButton";
import classes from "./total.module.css";

const total = (props) => {
  return (
    <div className={classes.TotalWrapper}>
      <span>TOTAL ITEMS</span>
      <span className={classes.Counter}>
        <Counter />
      </span>
      <ResetButton />
    </div>
  );
};

export default total;
