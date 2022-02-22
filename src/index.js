import React from "react";
import ReactDOM from "react-dom";

import { AdviceContextProvider } from "./store/advice-context";
import App from "./App";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <AdviceContextProvider>
      <App />
    </AdviceContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
