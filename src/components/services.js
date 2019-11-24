import React from "react";
import "./services.scss";
import Card from "./card";

function Services() {
  return (
    <div id="services">
      <div class="parallax parallax__servicespage">
        <p class="testHeader testHeader__services">Our Services</p>
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
          titleStyle="title--grey"
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
          titleStyle="title--grey"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          buttonText="Read It"
          imgLink="4-2.jpg"
          buttonClass="topRowButtons"
          cardColor="btn--white"
        />
        <Card
          cardStyle="card__servicesTopRow"
          title="Column Three"
          titleStyle="title--grey"
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
          titleStyle="title--grey"
          body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
          buttonText="Details"
          imgLink="4-4.jpg"
          buttonClass="topRowButtons"
          cardColor="btn--white"
        />
      </div>
      <div class="flexServices">
        <Card
          cardStyle="card__servicesBottomRow"
          title="One Big Column"
          titleStyle="title--alignLeft title--grey"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, sollicitudin convallis orci.
          <br>
          Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi."
          buttonText="Read More"
          imgLink="4-5.jpg"
          buttonWrapper="btn__services--leftjustify"
          cardColor="btn--white"
        />
      </div>
    </div>
  );
}

export default Services;
