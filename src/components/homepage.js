import React from "react";
import "./homepage.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    this.setState({
      active:
        e.target.documentElement.scrollTop <
        e.target.getElementById("homepage").clientHeight
    });
  };

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
