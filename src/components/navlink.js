import React from "react";
import "./navlink.css";

class Navlink extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        //onClick={() => this.props.onClick(this.props.index)}
        //onClick={() => this.props.onClick.map(e => e)}
        onClick={() => this.props.onClick}
        class={
          this.props.selected
            ? "active " + this.props.class
            : "none " + this.props.class
        }
      >
        {this.props.title}
      </a>
    );
  }
}

export default Navlink;
