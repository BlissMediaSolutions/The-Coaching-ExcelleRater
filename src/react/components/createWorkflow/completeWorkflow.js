import React from "react";

export default ({ onSave, onAdd }) => (
  <div className="u-component col-lg-6">
    <div className="container-fluid">
      <div className="row">
        <h2>Do you want to add another video?</h2>
      </div>
      <div className="row pt-5 justify-content-between">
        <div className="btn btn-primary col-4" onClick={onAdd}>
          Yes
        </div>
        <div className="btn btn-success col-4" onClick={onSave}>
          No, save workflow
        </div>
      </div>
    </div>
  </div>
);
