
import React from "react";

import { SkeletonProps } from "./Skeleton.types";

import "./Skeleton.scss";
import "../variables.scss"

/**
 * A loading skeleton
 * @param param0 
 */
const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {

  return (
      <div className={`skeleton`} style={{width, height}}></div>
    )
};

export default Skeleton;

