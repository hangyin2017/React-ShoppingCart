import React from "react";
import MinusButton from "../../elements/buttons/minusButton";
import PlusButton from "../../elements/buttons/plusButton";
import Counter from "../../elements/counter/counter";
import classes from "./item.module.css";

const item = (props) => {
  return (
    <div>
      <label>itemName</label>
      <MinusButton />
      <span className={classes.Counter}>
        <Counter counter={props.counter} />
      </span>
      <PlusButton />
    </div>
  );
};

export default item;
