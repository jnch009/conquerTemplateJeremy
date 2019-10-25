import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./components/homepage.js";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import Hamburger from "./components/hamburger.js";

import "./styles.css";

function App() {
  const [ham, setHam] = useState(false);
  const showHamburger = () => {
    setHam(!ham);
  };

  return (
    <>
      <Navbar />
      <Hamburger showMenu={ham} showHamburger={showHamburger} />
      <Home />
      <About />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
