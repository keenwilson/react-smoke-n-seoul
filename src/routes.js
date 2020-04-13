import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Menu, Story, Contact } from "./pages/";

export const Routes = ({ ...props }) => {
  return (
    <Switch>
      <Route path="/home">
        <Main {...props} />
      </Route>
      <Route path="/eat">
        <Menu {...props} />
      </Route>
      <Route path="/story">
        <Story {...props} />
      </Route>
      <Route path="/call">
        <Contact {...props} />
      </Route>
      <Route exact path="/">
        <Main {...props} />
      </Route>
    </Switch>
  );
};
