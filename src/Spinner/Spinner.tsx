
import React from "react";

import { SpinnerProps } from "./Spinner.types";

import "./Spinner.scss";

/**
 * A loading spinner  
 * TODO make color and theme work
 * @param param0 
 */
const Spinner: React.FC<SpinnerProps> = ({size, color, theme}) => {
  const sizeClass = size === 'lg' ? 'largeSize' : 'smallSize'
  return (
      <div className={`spinner ${sizeClass} `} style={{borderTopColor: color}}></div>
    )
};

export default Spinner;

