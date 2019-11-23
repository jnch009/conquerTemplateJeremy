import React from "react";
import "./about.scss";
import Card from "./card.js";

function About() {
  return (
    <div id="about">
      <div class="flexCards">
        <div class="flexWrapper">
          {/* TODO: (THIS TOO) refactor the following into an array and map */}

          <Card
            cardStyle="card__aboutTopRow"
            title="Bootstrap v3.3.6"
            titleStyle="title--alignLeft title--green"
            body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
            buttonText="Button Green"
            imgLink="1-1.jpg"
            buttonClass="topRowButtons"
            cardColor="btn--green"
          />
          <Card
            cardStyle="card__aboutTopRow"
            title="Responsive Design"
            titleStyle="title--alignLeft title--blue"
            body="Conquer Template is provided by templatemo for free of charge.
            You can use this template for any kind of website. No credit
            link is required. All images by Unsplash. Thank you for visiting
            our website. Please come again!"
            buttonText="See Details"
            imgLink="1-2.jpg"
            buttonClass="topRowButtons"
            cardColor="btn--blue"
          />
          <Card
            cardStyle="card__aboutTopRow"
            title="Parallax Layout"
            titleStyle="title--alignLeft title--red"
            body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
            buttonText="Button Red"
            imgLink="1-3.jpg"
            buttonClass="topRowButtons"
            cardColor="btn--red"
          />
          <Card
            cardStyle="card__aboutBottomRow"
            title="Two Column Left Side"
            titleStyle="title--grey"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.<br>Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus."
            imgLink="2-1.jpg"
            cardColor="btn--hidden"
          />
          <Card
            cardStyle="card__aboutBottomRow"
            title="Two Column Right Side"
            titleStyle="title--grey"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.<br>Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus."
            buttonText="Read More"
            imgLink="2-2.jpg"
            buttonClass="topRowButtons"
            buttonWrapper="cardButton"
            cardColor="btn--white"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
