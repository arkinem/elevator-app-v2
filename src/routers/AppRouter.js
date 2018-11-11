import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../components/NotFoundPage";
import MainPage from "../components/MainPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
