import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Stopwatch from "./stopwatch";
import Calculator from "./calculator";
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Stopwatch/>
    <Calculator/>
  </>
);
