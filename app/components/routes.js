import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./home/Home";

export const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            {console.log("INSIDE ROUTES")}
            {/* <Route path="/home" component={Home} /> */}
            <Redirect from="/" to="/home" />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

//export default Routes;
