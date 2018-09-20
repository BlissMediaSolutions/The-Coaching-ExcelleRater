import React from "react";
import ReactPlayer from "react-player";

export default ({
  question,
  playing,
  endFrame,
  videoUrl,
  onProgress,
  getClickPosition
}) => {
  let overlayClassName = "video__overlay ";
  overlayClassName += !playing ? `video__overlay--${endFrame}` : "";

  return (
    <div className="u-component">
      <div className="container d-flex align-items-center flex-column">
        <h2>{question}</h2>
        <div className="position-relative">
          <div className="video__overlay" onClick={getClickPosition} />
          {!playing ? (
            <div className={overlayClassName} onClick={getClickPosition} />
          ) : null}
          <ReactPlayer
            url={videoUrl}
            onProgress={onProgress}
            volume="0"
            playing={playing}
            width={640}
            height={360}
          />
        </div>
      </div>
    </div>
  );
};
