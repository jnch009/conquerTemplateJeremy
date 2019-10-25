import React from "react";
import "./hamburger.css";
import Navbar from "./navbar";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <>
        <div
          class="hamburgerWrapper"
          style={{ display: !this.props.showMenu ? "block" : "none" }}
          onClick={this.props.showHamburger}
        >
          <div class="container">
            <div class="bar1" />
            <div class="bar2" />
            <div class="bar3" />
          </div>
        </div>
        <div
          class="hamburgerMenu"
          style={{ display: this.props.showMenu ? "block" : "none" }}
        >
          <Navbar showNav={this.props.showMenu} />
        </div>
        <div
          class="hamburgerOpen"
          style={{ display: this.props.showMenu ? "block" : "none" }}
          onClick={this.props.showHamburger}
        />
      </>
    );
  }
}

export default Hamburger;
