import React from "react";

import { Input } from "reactstrap";
import ReactPlayer from "react-player";
import { videoUrlString } from "../../../util/helpers";

export default ({ onChange, onSelect, searchString, videos }) => (
  <div className="c-select-video u-component">
    <div className="container-fluid">
      <div className="row">
        <h2>Search and Select a Video</h2>
      </div>
      <div className="row">
        <Input
          type="text"
          name="searchString"
          className="col-12"
          value={searchString}
          onChange={onChange}
        />
      </div>
      <div className="mt-3">
        {videos.map((video, index) => (
          <div
            key={index}
            className="c-select-video__video row py-2 border-bottom"
            onClick={() => onSelect(video.id)}
          >
            <div className="">
              <ReactPlayer
                url={videoUrlString(video.filename)}
                playing={false}
                width={200}
                className="c-select-video__video__player"
              />
            </div>
            <div>
              <div className="font-weight-bold">{video.title}</div>
              <div>{video.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
