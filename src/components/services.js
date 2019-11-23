import React from "react";
import "./services.scss";
import Card from "./card";

function Services() {
  return (
    <div id="services">
      <div class="parallax parallax__servicespage">
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
      <div class="flexServices flexServices__TopSection">
        {/* TODO: refactor the following into an array and map */}

        <Card
          cardStyle="card__servicesTopRow"
          title="Column One"
          titleStyle="titleTopRow"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          imgLink="4-1.jpg"
          cardColor="green"
          buttonWrapper="cardButton--hidden"
        />
        <Card
          cardStyle="card__servicesTopRow"
          title="Column Two"
          titleStyle="titleTopRow"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          buttonText="Button Green"
          imgLink="4-2.jpg"
          buttonClass="topRowButtons"
          cardColor="green"
        />
        <Card
          cardStyle="card__servicesTopRow"
          title="Column Three"
          titleStyle="titleTopRow"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          buttonText="Button Green"
          imgLink="4-3.jpg"
          buttonClass="topRowButtons"
          cardColor="green"
          buttonWrapper="cardButton--hidden"
        />
        <Card
          cardStyle="card__servicesTopRow"
          title="Column Four"
          titleStyle="titleTopRow"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          buttonText="Button Green"
          imgLink="4-4.jpg"
          buttonClass="topRowButtons"
          cardColor="green"
        />
      </div>
      <div class="flexServices">
        <Card
          cardStyle="card__servicesBottomRow"
          title="Bootstrap v3.3.6"
          titleStyle="titleTopRow"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          imgLink="4-5.jpg"
          cardColor="green"
        />
      </div>
    </div>
  );
}

export default Services;
