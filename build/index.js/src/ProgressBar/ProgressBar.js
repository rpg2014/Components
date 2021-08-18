'use strict';

var React = require('react');
var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
require('./ProgressBar.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ProgressBar = function (_a) {
    var percentage = _a.percentage, label = _a.label, showPercentage = _a.showPercentage, _b = _a.height, height = _b === void 0 ? '0.5rem' : _b, _c = _a.width, width = _c === void 0 ? '45%' : _c, highlightOnHover = _a.highlightOnHover;
    var _d = React.useState(percentage ? percentage : 0), progress = _d[0], setProgress = _d[1];
    React.useEffect(function () {
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
    return (React__default['default'].createElement("div", { className: "progressBarWrapper", style: tslib_es6.__assign(tslib_es6.__assign({}, heightStyle), { width: width }) },
        React__default['default'].createElement("div", { className: "progressBarBg", style: tslib_es6.__assign({}, heightStyle) },
            React__default['default'].createElement("div", { className: "progressBarFg " + (highlightOnHover ? 'progressBarFgHover' : ''), style: tslib_es6.__assign(tslib_es6.__assign({}, heightStyle), { width: progress + "%" }) },
                showPercentage && React__default['default'].createElement("div", { className: "progressBarLabel", style: tslib_es6.__assign(tslib_es6.__assign({}, heightStyle), { fontSize: heightStyle.height }) }, progress + "%"),
                label && React__default['default'].createElement("div", { className: 'progressBarLabel', style: tslib_es6.__assign(tslib_es6.__assign({}, heightStyle), { fontSize: heightStyle.height }) }, label)))));
};

module.exports = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
