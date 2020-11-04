import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import LoginPage from "./login/LoginPage";

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <Navbar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

//what does the 'withRouter' that the login workshop do as it relates to logging in and if its important how do i implement that into this particular layout
//what is the difference between using component and the 'const ____ = (props) => ({})', i used it where the former is when i need to connect store

export default Routes;
