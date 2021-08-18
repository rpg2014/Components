'use strict';

var React = require('react');
require('./PlayPauseButton.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// Generated with util/create-component.js
var PlayPauseButton = function (_a) {
    var play = _a.play;
    var _b = React.useState(play), isPlaying = _b[0], setPlaying = _b[1];
    return (React__default['default'].createElement("button", { "data-testid": "PlayPauseButton", className: "playPauseButton", onClick: function () { return setPlaying(!isPlaying); } },
        React__default['default'].createElement("div", { className: isPlaying ? 'icon' : 'icon paused' })));
};

module.exports = PlayPauseButton;
//# sourceMappingURL=PlayPauseButton.js.map
