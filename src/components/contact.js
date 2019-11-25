import React from "react";
import "./contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", character: "", tableList: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.baseState = this.state;
  }

  resetState() {
    this.setState({ name: "" });
    this.setState({ email: "" });
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
      email: this.state.email,
      character: this.state.character
    };

    this.setState({ tableList: [...this.state.tableList, jsonTableEntry] });
    this.resetState();
  }

  render() {
    return (
      <div id="contact">
        <div class="parallax parallax__contactpage">
          <div class="contactBody">
            <h2 class="testHeader">Contact Form</h2>
            <div class="contactSubtext">
              <span>
                Nunc diam leo, fringilla vulputate elit lobortis, consectetur
                vestibulum quam. Sed id
              </span>
              <span>
                felis ligula. In euismod libero at magna dapibus, in rutrum
                velit lacinia.
              </span>
              <span>Etiam a mi quis arcu varius condimentum.</span>
            </div>
            <form class="btn-center" onSubmit={this.handleClick}>
              <div class="contactInfo">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="character"
                  placeholder="Character"
                  value={this.state.character}
                  onChange={this.handleChange}
                />
              </div>
              <div class="messageInfo">
                <textarea />
                <button type="submit" class="btn btn--white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex__container">
          <div class="gridTable">
            <div class="tableEntries">
              <strong>Name</strong>
            </div>
            <div class="tableEntries">
              <strong>Email</strong>
            </div>
            <div class="tableEntries">
              <strong>Character</strong>
            </div>
            {this.state.tableList.map(entry => (
              <>
                <div class="tableEntries">{entry.name}</div>
                <div class="tableEntries">{entry.email}</div>
                <div class="tableEntries">{entry.character}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
