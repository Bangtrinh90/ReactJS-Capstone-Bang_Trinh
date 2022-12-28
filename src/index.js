import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import globalStore from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={globalStore}>
    <App />
  </Provider>
);
