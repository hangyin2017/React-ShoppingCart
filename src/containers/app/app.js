import React, { Component } from "react";
import "./app.css";
// import Header from "../../components/header/header.jsx";
import Header from "../../components/header/header";
import ItemList from "../../components/itemList/itemList";
import Total from "../../components/total/total";

class app extends Component {
  state = {
    cart: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <ItemList cart={this.state.cart} />
          <div className="TotalWrapper">
            <Total />
          </div>
        </main>
      </div>
    );
  }
}

export default app;
