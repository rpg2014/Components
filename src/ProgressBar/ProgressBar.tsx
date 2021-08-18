import React, { useEffect, useState } from "react";

import { ProgressBarProps } from "./ProgressBar.types";

import "./ProgressBar.scss";

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, label, showPercentage, height = '0.5rem', width='45%' ,highlightOnHover }) => {
  const [progress, setProgress] = useState(percentage ? percentage :0);

  useEffect(() =>{
    setProgress(percentage)
  },[percentage])

  // useEffect(() => {
  //   if(progress<100 && progress!=0){
  //     setProgress(progress+1)
  //   }else{
  //     setProgress(0)
  //   }
  // }, [progress])

  // const zeroTo100 = () => {
  //   setProgress(progress+1);
  // }

  const heightStyle = {
    height: height,
    
  }

  return (
      <div className="progressBarWrapper" style={{...heightStyle, width}}>
        <div className="progressBarBg" style={{...heightStyle}}>
          <div className={`progressBarFg ${highlightOnHover ? 'progressBarFgHover' : ''}`} style={{...heightStyle, width: `${progress}%`}} > 
            {showPercentage && <div className="progressBarLabel" style={{...heightStyle, fontSize: heightStyle.height}}>{`${progress}%`}</div>}
            {label && <div className='progressBarLabel'style={{...heightStyle, fontSize: heightStyle.height}}>{label}</div>}
          </div>
          
        </div>
      </div>
    )
};

export default ProgressBar;

