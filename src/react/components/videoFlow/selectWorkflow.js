import React from "react";

import { Input } from "reactstrap";

export default ({ onChange, onSelect, searchString, workflows }) => (
  <div className="u-component col-lg-6">
    <div className="container-fluid">
      <div className="row">
        <h2>Search and Select a Workflow</h2>
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
        {workflows.map((workflows, index) => (
          <div key={index} className="row flex-column py-2 border-bottom">
            Workflow
          </div>
        ))}
      </div>
    </div>
  </div>
);
