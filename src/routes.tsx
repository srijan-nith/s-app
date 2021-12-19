import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Sidebar } from "./components/sidebar/sidebar";
import { Home } from "./pages/home/home";

export function Routes_(): JSX.Element {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}