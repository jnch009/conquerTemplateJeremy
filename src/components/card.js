import React from "react";
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      titleStyle: this.props.titleStyle
        ? this.props.titleStyle
        : "bootstrapTitle",
      body: this.props.body,
      buttonText: this.props.buttonText,
      imgLink: this.props.imgLink,
      buttonClass: this.props.buttonClass,
      buttonColor: this.props.cardColor
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.imgLink} alt="1" />
        <div class="bootstrapText">
          <div class="cardContents">
            <h2
              class={this.state.titleStyle}
              style={{ color: this.props.cardColor }}
            >
              {this.state.title}
            </h2>
            <p class="bootstrapBody">{this.state.body}</p>
          </div>
          <button
            class={this.state.buttonClass}
            style={{ "background-color": this.state.buttonColor }}
          >
            {this.state.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
