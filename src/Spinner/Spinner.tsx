
import React from "react";

import { SpinnerProps } from "./Spinner.types";

import "./Spinner.scss";

const Spinner: React.FC<SpinnerProps> = ({size}) => {
  const sizeClass = size === 'lg' ? 'largeSize' : 'smallSize'
  return (
      <div className={`spinner ${sizeClass}`}></div>
    )
};

export default Spinner;

