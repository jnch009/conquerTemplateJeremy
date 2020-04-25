import React from "react";
import "./navlink.css";

class Navlink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    this.setState({
      active: this.props.selected,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({
        active: !this.state.active,
      });
    }
  }

  render() {
    return (
      <a
        href={this.props.href}
        className={`${
          this.state.active
            ? `active ${this.props.class}`
            : `none ${this.props.class}`
        }`}
      >
        {this.props.title}
      </a>
    );
  }
}

export default Navlink;
