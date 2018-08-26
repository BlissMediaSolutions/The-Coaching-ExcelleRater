import React from "react";

import { Input } from "reactstrap";

export default ({ onChange, searchString, videos }) => (
  <div className="u-component col-lg-6">
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
      {videos.map((video, index) => (
        <div key={index} className="row flex-column mt-3 pb-2 border-bottom">
          <div>{video.title}</div>
          <div>{video.description}</div>
        </div>
      ))}
    </div>
  </div>
);
