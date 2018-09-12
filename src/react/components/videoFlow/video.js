import React from "react";
import ReactPlayer from "react-player";

export default ({
  question,
  playing,
  videoUrl,
  onProgress,
  getClickPosition
}) => (
  <div className="u-component">
    <div className="container d-flex align-items-center flex-column">
      <h2>{question}</h2>
      <div className="position-relative">
        <div className="video__overlay" onClick={getClickPosition} />
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
