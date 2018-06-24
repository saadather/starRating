import React from "react";
export const Star = props => {
  return (
    <span
      onClick={() => props.onStarClick(props.index)}
      onMouseEnter={() => props.onStarHover(props.index)}
      onMouseLeave={() => props.onStartHoverLeave(props.index)}
    >
      {props.selected ? (
        <i className="fas fa-star" />
      ) : props.partialValue ? (
        <i className="fas fa-star-half" />
      ) : (
        <i className="far fa-star" />
      )}
    </span>
  );
};
