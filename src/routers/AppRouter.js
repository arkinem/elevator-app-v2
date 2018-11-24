import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import MainPage from "../components/MainPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
