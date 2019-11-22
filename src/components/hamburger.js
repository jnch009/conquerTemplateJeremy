import React from "react";
import "./hamburger.scss";
import Navbar from "./navbar";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ham: false, legacy: true };
    this.showHamburger = this.showHamburger.bind(this);
  }

  showHamburger = () => {
    this.setState({ ham: !this.state.ham });
  };

  hamburgerStyle = () => {
    this.setState({ legacy: !this.state.legacy });
  };

  render() {
    return (
      <>
        <div
          class="hamburgerWrapper"
          style={{ display: !this.state.ham ? "flex" : "none" }}
        >
          <div class="container" onClick={this.showHamburger}>
            <div class="bar1" />
            <div class="bar2" />
            <div class="bar3" />
          </div>
          <button class="btn btn__hamburger" onClick={this.hamburgerStyle}>
            {this.state.legacy ? "Legacy" : "New"}
          </button>
        </div>
        <div
          class="hamburgerMenu"
          style={{ display: this.state.ham ? "block" : "none" }}
        >
          <Navbar showNav={this.state.ham} onClick={this.showHamburger} />
        </div>
        <div
          class="hamburgerOpen"
          style={{ display: this.state.ham ? "block" : "none" }}
          onClick={this.showHamburger}
        />
      </>
    );
  }
}

export default Hamburger;
