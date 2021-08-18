import React from 'react';
import './Spinner.scss.js';

/**
 * A loading spinner
 * TODO make color and theme work
 * @param param0
 */
var Spinner = function (_a) {
    var size = _a.size, color = _a.color, theme = _a.theme;
    var sizeClass = size === 'lg' ? 'largeSize' : 'smallSize';
    return (React.createElement("div", { className: "spinner " + sizeClass + " ", style: { borderTopColor: color } }));
};

export default Spinner;
//# sourceMappingURL=Spinner.js.map
