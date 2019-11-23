import React from "react";
import "./card.scss";
import "../styles.scss";

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
      buttonColor: this.props.cardColor,
      buttonWrapper: this.props.buttonWrapper
    };
  }

  render() {
    return (
      <div class={this.props.cardStyle}>
        <img src={this.state.imgLink} alt="1" />
        <div class="bootstrapText">
          <div class="cardContents">
            <h2 class={"title " + this.state.titleStyle}>{this.state.title}</h2>
            <p class="bootstrapBody">{this.state.body}</p>
          </div>
          <div class={this.state.buttonWrapper}>
            <button class={" btn " + this.state.buttonColor}>
              {this.state.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
