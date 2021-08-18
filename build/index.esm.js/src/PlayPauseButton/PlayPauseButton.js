import React, { useState } from 'react';
import './PlayPauseButton.scss.js';

// Generated with util/create-component.js
var PlayPauseButton = function (_a) {
    var play = _a.play;
    var _b = useState(play), isPlaying = _b[0], setPlaying = _b[1];
    return (React.createElement("button", { "data-testid": "PlayPauseButton", className: "playPauseButton", onClick: function () { return setPlaying(!isPlaying); } },
        React.createElement("div", { className: isPlaying ? 'icon' : 'icon paused' })));
};

export default PlayPauseButton;
//# sourceMappingURL=PlayPauseButton.js.map
