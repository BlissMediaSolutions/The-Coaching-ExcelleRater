import React from "react";

export const Bar = ({ condition }) => (
  <span
    className={
      condition ? "c-progress__bar" : "c-progress__bar c-progress__bar--alt"
    }
  />
);

export const Circle = ({ condition, number }) => (
  <span
    className={
      condition
        ? "c-progress__circle"
        : "c-progress__circle c-progress__circle--alt"
    }
  >
    {condition ? <i className="fa fa-check" /> : <span>{number}</span>}
  </span>
);

export default ({ index }) => (
  <div className="d-flex align-items-center">
    <Circle number={1} condition={index > 0} />
    <Bar condition={index > 0} />
    <Circle number={2} condition={index > 1} />
    <Bar condition={index > 1} />
    <Circle number={3} condition={index > 2} />
    <Bar condition={index > 2} />
    {index > 2 ? <Circle number={4} condition={index > 4} /> : null}
    
  </div>
);
