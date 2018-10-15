import React from "react";

export default ({ onAdd }) => (
  <div className="u-component">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center mb-5">
        <h2>Do you want to add another video?</h2>
      </div>
      <div className="row pt-2 mb-5 pb-5 justify-content-between">
        <div className="btn btn-primary mr-3 col-4" onClick={() => onAdd(true)}>
          Yes
        </div>
        <div className="btn btn-success col-4" onClick={() => onAdd(false)}>
          No, Assign Players
        </div>
      </div>
    </div>
  </div>
);
