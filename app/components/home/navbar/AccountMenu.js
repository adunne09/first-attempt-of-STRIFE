import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMe } from "../redux/users";

class AccountMenu extends Component {
  componentDidMount() {
    this.props.fetchMe();
  }

  render() {
    return !this.props.user.id ? (
      <div id="logged-in">{this.props.user.name}</div>
    ) : (
      <div id="not-logged-in">Log In</div>
    );
  }
}
const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchMe: () => dispatch(fetchMe()),
  };
};

export default connect(mapState, mapDispatch)(AccountMenu);
