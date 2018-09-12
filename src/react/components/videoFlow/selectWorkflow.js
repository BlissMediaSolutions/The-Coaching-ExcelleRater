import React from "react";

import { Input } from "reactstrap";

export default ({ onChange, onSelect, searchString, workflows }) => (
  <div className="c-select-workflow u-component">
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
        {workflows.map((workflow, index) => (
          <div
            key={index}
            className="c-select-workflow__item row flex-column py-2 border-bottom"
            onClick={() => onSelect(workflow.id)}
          >
            <div>{workflow.wfname}</div>
            <div className="color-grey-mid">{workflow.wfdate}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
