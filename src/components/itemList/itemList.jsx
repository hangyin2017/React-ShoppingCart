// import React from "react";
import React, { Component } from "react";
import Item from "../../components/item/item";

const itemList = (props) => {
  return (
    <div>
      {props.cart.map((item) => (
        <Item key={item.id} counter={item.value} />
      ))}
    </div>
  );
};

export default itemList;
