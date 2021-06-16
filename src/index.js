import React from "react";
import ReactDOM from "react-dom";
import App from "@routes/App";
import { CurrentAirlineContextProvider } from "@context/CurrentAirlineContext";

ReactDOM.render(
  <CurrentAirlineContextProvider value="">
    <App />
  </CurrentAirlineContextProvider>,
  document.getElementById("app")
);
