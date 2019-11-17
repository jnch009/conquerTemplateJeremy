import React from "react";
import "./services.css";
import Card from "./card";

function Services() {
  return (
    <div id="services">
      <div class="parallax">
        <p class="testHeader">Our Services</p>
        <p class="testParagraph">
          Nunc diam leo, fringilla vulputate elit lobortis, consectetur
          vestibulum quam. Sed id
          <br />
          felis ligula. In euismod libero at magna dapibus, in rutrum velit
          lacinia.
          <br />
          Etiam a mi quis arcu varius condimentum.
        </p>
      </div>
      <Card
        title="Bootstrap v3.3.6"
        titleStyle="titleTopRow"
        body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
        buttonText="Button Green"
        imgLink="1-1.jpg"
        buttonClass="topRowButtons"
        cardColor="green"
      />
      <Card
        title="Bootstrap v3.3.6"
        titleStyle="titleTopRow"
        body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
        buttonText="Button Green"
        imgLink="1-1.jpg"
        buttonClass="topRowButtons"
        cardColor="green"
      />
      <Card
        title="Bootstrap v3.3.6"
        titleStyle="titleTopRow"
        body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
        buttonText="Button Green"
        imgLink="1-1.jpg"
        buttonClass="topRowButtons"
        cardColor="green"
      />
    </div>
  );
}

export default Services;
