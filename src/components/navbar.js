import React from "react";
import Navlink from "./navlink.js";
import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    let navbarHeight = 73;
    let windowScroll = e.target.documentElement.scrollTop;
    let homeHeight = e.target.getElementById("homepage").clientHeight;
    let aboutHeight = e.target.getElementById("about").clientHeight;

    if (windowScroll + navbarHeight < homeHeight) {
      // home page selected
      this.setState({ active: 0 });
    } else if (windowScroll - homeHeight + navbarHeight < aboutHeight) {
      // about page selected
      this.setState({ active: 1 });
    } else {
      // services selected
      this.setState({ active: 2 });
    }
  };

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
        title: "About Us",
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

    let classRender;
    if (this.props.newHam && this.props.showNav) {
      classRender = "hamburgerList hamburgerList__new";
    } else if (!this.props.newHam && this.props.showNav) {
      classRender = "hamburgerList";
    } else {
      classRender = "null";
    }

    return (
      <ul class={classRender}>
        <div class={this.props.showNav ? "hamburgerNavbar" : "navbar"}>
          {this.props.showNav
            ? links.map(e => (
                <li class="hamburgerListItem" onClick={this.props.onClick}>
                  <Navlink
                    title={e.title}
                    href={e.href}
                    index={e.index}
                    selected={e.selected}
                    onClick={this.handleClick}
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
