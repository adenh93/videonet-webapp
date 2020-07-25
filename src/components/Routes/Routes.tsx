import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, Browse, WatchList } from "../../pages";
import Details from "../../pages/Details";

const Routes: FC = () => (
  <Switch>
    <Route path="/Details/:movieId">
      <Details />
    </Route>
    <Route path="/Watchlist">
      <WatchList />
    </Route>
    <Route path="/Browse">
      <Browse />
    </Route>
    <Route path="/Home">
      <Home />
    </Route>
    <Route>
      <Redirect to="/Home" />
    </Route>
  </Switch>
);

export default Routes;
