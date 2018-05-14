import React, { Component } from 'react';
import Banner from '../components/banner';
import PropTypes from 'prop-types';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {
    return (
      <div>
        <Banner title="Video" bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"></Banner>
      </div>
    );
  }
}

Video.propTypes = {
}

export default Video;