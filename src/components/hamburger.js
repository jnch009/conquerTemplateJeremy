import React from "react";
import "./hamburger.scss";
import Navbar from "./navbar";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ham: false };
    this.showHamburger = this.showHamburger.bind(this);
  }

  showHamburger = () => {
    this.setState({ ham: !this.state.ham });
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
          <button class="btn btn__hamburger">test</button>
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
