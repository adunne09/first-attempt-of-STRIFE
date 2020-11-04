import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMe } from "../../redux/users";
import { Link } from "react-router-dom";

class AccountMenu extends Component {
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    this.props.fetchMe();
  }

  render() {
    console.log(this.props, "<<<<<<PROPS"); //why is log the first thing that loads?
    console.log(this.state, "<<<STATE");
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

//google login creates new user in DB but doesnt change accountMenu to display account name
//maybe because account name is null?
//later, check if we can login after created account with google login

//add code that google provides for google sign in button

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
});

export default connect(mapState, mapDispatch)(AccountMenu);
