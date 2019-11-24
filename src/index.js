import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/homepage.js";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import Hamburger from "./components/hamburger.js";
import Services from "./components/services.js";
import Contact from "./components/contact.js";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hamburger />
        <Home />
        <About />
        <Services />
        <Contact />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
