import React, { useState, useEffect } from 'react';
import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import './ProgressBar.scss.js';

var ProgressBar = function (_a) {
    var percentage = _a.percentage, label = _a.label, showPercentage = _a.showPercentage, _b = _a.height, height = _b === void 0 ? '0.5rem' : _b, _c = _a.width, width = _c === void 0 ? '45%' : _c, highlightOnHover = _a.highlightOnHover;
    var _d = useState(percentage ? percentage : 0), progress = _d[0], setProgress = _d[1];
    useEffect(function () {
        setProgress(percentage);
    }, [percentage]);
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
    var heightStyle = {
        height: height,
    };
    return (React.createElement("div", { className: "progressBarWrapper", style: __assign(__assign({}, heightStyle), { width: width }) },
        React.createElement("div", { className: "progressBarBg", style: __assign({}, heightStyle) },
            React.createElement("div", { className: "progressBarFg " + (highlightOnHover ? 'progressBarFgHover' : ''), style: __assign(__assign({}, heightStyle), { width: progress + "%" }) },
                showPercentage && React.createElement("div", { className: "progressBarLabel", style: __assign(__assign({}, heightStyle), { fontSize: heightStyle.height }) }, progress + "%"),
                label && React.createElement("div", { className: 'progressBarLabel', style: __assign(__assign({}, heightStyle), { fontSize: heightStyle.height }) }, label)))));
};

export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
