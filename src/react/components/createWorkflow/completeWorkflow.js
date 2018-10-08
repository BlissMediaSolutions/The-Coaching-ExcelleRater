import React from "react";

export default ({ onAdd }) => (
  <div className="u-component">
    <div className="container-fluid">
      <div className="row">
        <h2>Do you want to add another video?</h2>
      </div>
      <div className="row pt-2">
        <div className="btn btn-primary mr-3" onClick={() => onAdd(true)}>
          Yes
        </div>
        <div className="btn btn-success" onClick={() => onAdd(false)}>
          No, Assign Players
        </div>
      </div>
    </div>
  </div>
);
