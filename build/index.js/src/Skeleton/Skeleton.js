'use strict';

var React = require('react');
require('./Skeleton.scss.js');
require('../variables.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * A loading skeleton
 * @param param0
 */
var Skeleton = function (_a) {
    var width = _a.width, height = _a.height;
    return (React__default['default'].createElement("div", { className: "skeleton", style: { width: width, height: height } }));
};

module.exports = Skeleton;
//# sourceMappingURL=Skeleton.js.map
