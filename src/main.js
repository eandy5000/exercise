import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//styles
import "./styles/main.scss";
import store from "./scripts/store";
import App from "./scripts/app";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
