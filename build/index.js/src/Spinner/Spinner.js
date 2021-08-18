'use strict';

var React = require('react');
require('./Spinner.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * A loading spinner
 * TODO make color and theme work
 * @param param0
 */
var Spinner = function (_a) {
    var size = _a.size, color = _a.color, theme = _a.theme;
    var sizeClass = size === 'lg' ? 'largeSize' : 'smallSize';
    return (React__default['default'].createElement("div", { className: "spinner " + sizeClass + " ", style: { borderTopColor: color } }));
};

module.exports = Spinner;
//# sourceMappingURL=Spinner.js.map
