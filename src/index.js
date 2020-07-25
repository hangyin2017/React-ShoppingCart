import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app/app";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
