import React, { Component } from 'react';

class Banner extends Component {
  render() {

    let background = {
      backgroundImage: `url(${this.props.bgImage})`
    }

    return (
      <div className="c-banner" style={background}>
        <div className="container">
          <h1 className="c-banner__heading">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default Banner;
