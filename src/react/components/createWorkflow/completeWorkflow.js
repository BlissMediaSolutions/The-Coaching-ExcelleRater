import React from "react";

export default ({ onAdd }) => (
  <div className="u-component col-lg-8 col-xl-6">
    <div className="container-fluid">
      <div className="row">
        <h2>Do you want to add another video?</h2>
      </div>
      <div className="row pt-5 justify-content-between">
        <div className="btn btn-primary col-4" onClick={() => onAdd(true)}>
          Yes
        </div>
        <div className="btn btn-success col-4" onClick={() => onAdd(false)}>
          No, Assign Players
        </div>
      </div>
    </div>
  </div>
);
