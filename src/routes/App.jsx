import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "@components/Menu";
import "@styles/App.css";
import Landing from "@components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Menu />
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
