import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMe } from "../../redux/users";
import { Link } from "react-router-dom";

class AccountMenu extends Component {
  componentDidMount() {
    this.props.fetchMe();
  }

  render() {
    return (
      <div className="account-menu">
        {!this.props.user ? (
          <Link to={`/login`}>
            <button className="btn">Log In</button>
          </Link>
        ) : (
          <div className="menu">{this.props.user.name}</div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
});

export default connect(mapState, mapDispatch)(AccountMenu);
