import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {  Input } from 'reactstrap';

class SelectVideo extends Component {
  render() {
    const { onChange, searchString } = this.props;
    return (
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
  }
}

SelectVideo.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
}

export default SelectVideo;