import React from "react";
import "./contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", address: "", character: "", tableList: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.baseState = this.state;
  }

  resetState() {
    this.setState({ name: "" });
    this.setState({ address: "" });
    this.setState({ character: "" });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick(e) {
    e.preventDefault();
    const jsonTableEntry = {
      name: this.state.name,
      address: this.state.address,
      character: this.state.character
    };

    this.setState({ tableList: [...this.state.tableList, jsonTableEntry] });
    console.log(this.state.tableList);
    this.resetState();
  }

  render() {
    return (
      <div id="contact">
        <div class="contactBody">
          <h2>Services</h2>
          <form class="btn-center" onSubmit={this.handleClick}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="character"
              placeholder="Character"
              value={this.state.character}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit please" class="btn btn--white" />
          </form>
        </div>
        <div class="flex__container">
          <div class="gridTable">
            <span>
              <strong>1</strong>
            </span>
            <span>
              <strong>2</strong>
            </span>
            <span>
              <strong>3</strong>
            </span>
            <span>
              <strong>4</strong>
            </span>
            <span>
              <strong>5</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
