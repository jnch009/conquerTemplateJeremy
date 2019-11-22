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
          style={{
            display: 1 ? "flex" : "none"
          }}
        >
          <div class="container" onClick={this.showHamburger}>
            <div class="bar1" />
            <div class="bar2" />
            <div class="bar3" />
          </div>
          <button
            class={this.state.ham ? "btn btn--hidden" : "btn btn__hamburger"}
            onClick={this.hamburgerStyle}
          >
            {this.state.legacy ? "Legacy" : "New"}
          </button>
        </div>
        <div
          class={
            this.state.legacy && this.state.ham
              ? "hamburgerMenu hamburgerMenu__visible"
              : "hamburgerMenu"
          }
        >
          <Navbar
            showNav={this.state.ham && this.state.legacy}
            onClick={this.showHamburger}
          />
        </div>
        <div
          class={
            this.state.legacy && this.state.ham
              ? "hamburgerOpen hamburgerOpen__visible"
              : "hamburgerOpen"
          }
          onClick={this.showHamburger}
        />
        <div
          class={
            !this.state.legacy && this.state.ham ? "box box__visible" : "box"
          }
        >
          <Navbar
            showNav={this.state.ham && !this.state.legacy}
            onClick={this.showHamburger}
          />
        </div>
      </>
    );
  }
}

export default Hamburger;
