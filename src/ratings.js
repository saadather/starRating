import React, { Component } from "react";
import { Star } from "./stars";
export default class Ratings extends Component {
  state = {
    value: undefined
  };
  handleStarClick = index => {
    this.props.onSelect(index);
  };

  handleStartHover = value => {
    console.log("handleStartHoverLeave", value);
    this.setState(state => ({
      ...state,
      value
    }));
  };
  handleStartHoverLeave = index => {
    console.log("handleStartHover");
    this.setState(state => ({
      ...state,
      value: undefined
    }));
  };
  render() {
    const { average, value } = this.props;
    return [1, 2, 3, 4, 5].map(index => {
      let selected = false;
      let difference = 0;
      let partialValue = 0;
      let actualValue = this.state.value || value || average;
      console.log(actualValue);
      difference = actualValue - index;
      selected = difference >= 0;

      if (!selected && Math.abs(difference) > 0 && Math.abs(difference) < 1) {
        partialValue = 1 - Math.abs(difference);
      }
      return (
        <Star
          index={index}
          selected={selected}
          partialValue={partialValue}
          onStarClick={this.handleStarClick}
          onStarHover={this.handleStartHover}
          onStartHoverLeave={this.handleStartHoverLeave}
        />
      );
    });
  }
}
