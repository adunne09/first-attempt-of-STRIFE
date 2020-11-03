import React, { Component } from "react";
import Navbar from "./navbar/Navbar";

export default class Home extends Component {
  render() {
    console.log("INSIDE HOME");
    return (
      <div id="home">
        <div>HELLO WORLD</div>
        <Navbar />
      </div>
    );
  }
}
