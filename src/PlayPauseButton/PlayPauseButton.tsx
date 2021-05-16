// Generated with util/create-component.js
import React, { useState } from "react";

import { PlayPauseButtonProps } from "./PlayPauseButton.types";

import "./PlayPauseButton.scss";

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ play }) => {
    const [isPlaying, setPlaying] = useState(play);
    
    
    return (<button data-testid="PlayPauseButton" className="playPauseButton" onClick={() => setPlaying(!isPlaying)}>
        <div className={isPlaying ? 'icon' : 'icon paused'} />
    </button>
    )
}
;

export default PlayPauseButton;

