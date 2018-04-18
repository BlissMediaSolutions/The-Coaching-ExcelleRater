import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="c-banner">
        <div className="container">
          <h1 className="c-banner__heading">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default Banner;
