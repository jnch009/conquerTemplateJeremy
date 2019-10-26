import React from "react";
import Navlink from "./navlink.js";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  handleClick = index => {
    this.setState({ active: index });
  };

  render() {
    const links = [
      {
        title: "Homepage",
        href: "#homepage",
        index: 0,
        selected: this.state.active === 0
      },
      {
        title: "About us",
        href: "#about",
        index: 1,
        selected: this.state.active === 1
      },
      {
        title: "Services",
        href: "#services",
        index: 2,
        selected: this.state.active === 2
      },
      {
        title: "Contact",
        href: "#contact",
        index: 3,
        selected: this.state.active === 3
      },
      {
        title: "External",
        href: "#external",
        index: 4,
        selected: this.state.active === 4
      }
    ];

    const functionsToCall = [
      { fn: this.props.click },
      { fn: this.handleClick }
    ];

    return (
      <ul class={this.props.showNav ? "hamburgerList" : null}>
        <div class={this.props.showNav ? "hamburgerNavbar" : "navbar"}>
          {this.props.showNav
            ? links.map(e => (
                <li class="hamburgerListItem">
                  <Navlink
                    title={e.title}
                    href={e.href}
                    index={e.index}
                    selected={e.selected}
                    //onClick={functionsToCall}
                    onClick={this.props.onClick}
                    class="hamburgerLink"
                  />
                </li>
              ))
            : links.map(e => (
                <li>
                  <Navlink
                    title={e.title}
                    href={e.href}
                    index={e.index}
                    selected={e.selected}
                    onClick={this.handleClick}
                  />
                </li>
              ))}
          }};
        </div>
      </ul>
    );
  }
}

export default Navbar;
