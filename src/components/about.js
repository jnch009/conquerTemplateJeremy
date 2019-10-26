import React from "react";
import "./about.css";
import Card from "./card.js";

function About() {
  return (
    <div id="about">
      <div class="flexCards">
        <div class="gridCards">
          <div class="num1">
            <Card
              title="Bootstrap v3.3.6"
              body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
              buttonText="Button Green"
              imgLink="2-1.jpg"
              buttonClass="bootstrapGreen"
            />
          </div>
          <div class="num2">
            <Card
              title="Bootstrap v3.3.6"
              body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
              buttonText="Button Green"
              imgLink="1-1.jpg"
              buttonClass="bootstrapGreen"
            />
          </div>
          <div class="num3">
            <Card
              title="Responsive Design"
              body="Conquer Template is provided by templatemo for free of charge.
            You can use this template for any kind of website. No credit
            link is required. All images by Unsplash. Thank you for visiting
            our website. Please come again!"
              buttonText="See Details"
              imgLink="1-2.jpg"
              buttonClass="seeDetails"
            />
          </div>
          <div class="num4">
            <Card
              title="Parallax Layout"
              body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
              buttonText="Button Red"
              imgLink="1-3.jpg"
              buttonClass="buttonRed"
            />
          </div>
          <div class="num5">
            <Card
              title="Bootstrap v3.3.6"
              body="Morbi sagittis justo a velit placerat ullamcorper quis quis
            velit. Sed convallis at risus ullamcorper auctor. Praesent quis
            velit neque. Quisque semper porta nisi vitae suscipit. Duis
            lectus magna, ornare ac scelerisque."
              buttonText="Button Green"
              imgLink="2-2.jpg"
              buttonClass="bootstrapGreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
