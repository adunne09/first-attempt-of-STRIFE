import React, { Component } from "react";
import { connect } from "react-redux";
import OauthLoginForm from "./OauthLoginForm";
import LocalLoginForm from "./LocalLoginForm";
import { login } from "../../redux/users";

//three parts - local sign in option, google sign in option, or register account option

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <LocalLoginForm handleSubmit={this.props.handleSubmit} />
        <div className="new/google">
          <button>New Account</button>
          <OauthLoginForm />
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    async handleSubmit(evt) {
      evt.preventDefault();
      // trigger thunk (AJAX login request)
      const thunk = login({
        email: evt.target.email.value,
        password: evt.target.password.value,
      });
      await dispatch(thunk);
      // once that is complete, change the URL to /home
      console.log("RIGHT AFTER HANDLE SUBMIT DISPATCH, BEFORE history.push");
      ownProps.history.push("/"); // '/home' breaks it, why?
    },
  };
};

export default connect(null, mapDispatch)(LoginPage);
