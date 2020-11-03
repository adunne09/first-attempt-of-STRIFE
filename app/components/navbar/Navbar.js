import React from "react";
import Logo from "./Logo";
import AccountMenu from "./AccountMenu";
import StartButton from "../StartButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="nav-items">
        <StartButton />
        <AccountMenu />
      </div>
    </div>
  );
};

export default Navbar;
