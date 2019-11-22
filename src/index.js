import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/homepage.js";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import Hamburger from "./components/hamburger.js";
import Services from "./components/services.js";

import "./styles.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hamburger />
      <Home />
      <About />
      <Services />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
