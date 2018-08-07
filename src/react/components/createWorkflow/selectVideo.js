import React from "react";

import { Input } from "reactstrap";

export default ({ onChange, searchString }) => (
  <div className="u-component">
    <h2>Search and Select a Video</h2>
    <div>
      <Input
        type="text"
        name="searchString"
        value={searchString}
        onChange={onChange}
      />
    </div>
  </div>
);
