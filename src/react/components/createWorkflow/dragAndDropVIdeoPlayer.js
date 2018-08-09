import React, { Component } from "react";
import ReactPlayer from "react-player";

const Circle = ({ number }) => (
  <div className="c-dnd-video-player__side-bar__circle">{number}</div>
);

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true
    };
  }
  ref = player => {
    this.player = player;
  };

  seekToTime = () => {
    const { timeStamp } = this.props;
    this.player.seekTo(parseInt(timeStamp, 10));
    this.setState({
      playing: false
    });
  };

  render() {
    const { videoUrl } = this.props;
    const { playing } = this.state;
    return (
      <div className="c-dnd-video-player row">
        <ReactPlayer
          url={videoUrl}
          playing={playing}
          onPlay={this.seekToTime}
          ref={this.ref}
        />
        <div className="c-dnd-video-player__side-bar d-flex flex-column justify-content-between">
          <Circle number="1" />
          <Circle number="2" />
          <Circle number="3" />
        </div>
      </div>
    );
  }
}
