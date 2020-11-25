import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/teste" exact component={Home} />
    </Switch>
  );
}

export default Routes;