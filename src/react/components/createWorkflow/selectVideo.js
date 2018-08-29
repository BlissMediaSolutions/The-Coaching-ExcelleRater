import React from "react";

import { Input } from "reactstrap";

export default ({ onChange, onSelect, searchString, videos }) => (
  <div className="c-select-video u-component col-lg-6">
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
      <div className="mt-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="c-select-video__video row flex-column py-2 border-bottom"
            onClick={() => onSelect(video.id)}
          >
            <div>{video.title}</div>
            <div>{video.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
