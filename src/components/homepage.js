import React from "react";
import "./homepage.css";

class Home extends React.Component {
  render() {
    return (
      <div id="homepage" onScroll={this.handleScroll}>
        <div class="conquerContainer">
          <h1>CONQUER</h1>
          <h4>Simple Bootstrap Template</h4>
        </div>
      </div>
    );
  }
}

export default Home;
