import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMe, logout } from "../../redux/users";
import { Link } from "react-router-dom";

class AccountMenu extends Component {
  componentDidMount() {
    this.props.fetchMe();
  }

  render() {
    return (
      <div className="account-menu">
        {!this.props.user.id ? (
          <Link to={`/login`}>
            <button className="btn">Log In</button>
          </Link>
        ) : (
          <div className="menu">
            {this.props.user.name}
            <div>
              <button onClick={() => this.props.handleLogout()}>Log Out</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

//google login creates new user in DB but doesnt change accountMenu to display account name
//maybe because account name is null?
//later, check if we can login after created account with google login

//add code that google provides for google sign in button

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
  async handleLogout() {
    const thunk = logout();
    await dispatch(thunk);
    ownProps.history.push("/home");
  },
});

export default connect(mapState, mapDispatch)(AccountMenu);
