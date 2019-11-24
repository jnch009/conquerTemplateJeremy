import React from "react";
import "./contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div class="contactBody">
          <h2>Services</h2>
          <form method="POST" action="http://localhost:8080" class="btn-center">
            <input type="text" id="Name" name="Name" placeholder="Name" />
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="Address"
            />
            <input
              type="number"
              id="Address"
              name="Address"
              placeholder="Score"
            />
            <button
              type="submit"
              class="btn btn--white"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
