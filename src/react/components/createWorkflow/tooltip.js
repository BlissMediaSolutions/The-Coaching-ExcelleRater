import React from "react";
import ReactTooltip from "react-tooltip";

export const QuestionTooltip = () => (
  <ReactTooltip id="question" effect="solid" className="c-video-setup__tooltip">
    <span>Enter question to ask player completing the workflow</span>
  </ReactTooltip>
);

export const TimestampTooltip = () => (
  <ReactTooltip
    id="timeStamp"
    effect="solid"
    className="c-video-setup__tooltip"
  >
    <div>
      <div>
        Manually enter the time you want the video to be stopped during
        playback(to one decimal point)
      </div>
      <div>
        or play and pause the video above at the point you wish to have the
        video stop
      </div>
    </div>
  </ReactTooltip>
);

export const PlaybackTooltip = () => (
  <ReactTooltip id="playback" effect="solid" className="c-video-setup__tooltip">
    <span>
      Select Playback rate determines the playback speed of the video when
      players are attempting this question
    </span>
  </ReactTooltip>
);

export const EndFrameTooltip = () => (
  <ReactTooltip id="endFrame" effect="solid" className="c-video-setup__tooltip">
    <span>Controls what happens to the final frame when the video stops</span>
  </ReactTooltip>
);
