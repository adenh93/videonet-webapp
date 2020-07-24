import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route>
        <Redirect to="/Home" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
