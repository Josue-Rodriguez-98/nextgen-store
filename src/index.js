import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "views/LandingPage/LandingPage.js";
import ForumPage from "views/ForumPage/ForumPage.jsx"
import ConsolePage from "views/ConsolePage/ConsolePage.jsx"
import GamesPage from "views/GamesPage/GamesPage.jsx"

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist} basename="/nextgen">
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/forum-page" component={ForumPage} />
      <Route path="/consoles-page" component={ConsolePage} />
      <Route path="/games-page" component={GamesPage} />
      <Route path="/home" component={LandingPage} />
      <Redirect from="/" to="/home"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
