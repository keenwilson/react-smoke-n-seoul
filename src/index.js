import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Router } from "react-router";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "antd/dist/antd.css";
import "./index.less";

const Root = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(Root, document.getElementById("root"));

serviceWorker.unregister();
