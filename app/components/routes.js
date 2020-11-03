import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
