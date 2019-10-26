import React from "react";
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
      buttonText: this.props.buttonText,
      imgLink: this.props.imgLink,
      buttonClass: this.props.buttonClass
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.imgLink} alt="1" />
        <div class="bootstrapText">
          <div class="cardContents">
            <p class="bootstrapTitle">{this.state.title}</p>
            <p class="bootstrapBody">{this.state.body}</p>
          </div>
          <button class={this.state.buttonClass}>
            {this.state.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
