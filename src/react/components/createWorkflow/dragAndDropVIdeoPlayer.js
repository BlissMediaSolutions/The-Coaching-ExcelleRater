import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class componentName extends Component {
  ref = player => {
    this.player = player;
  };

  seekToTime = () => {
    this.player.seekTo(10);
  };

  render() {
    const { videoUrl } = this.props;
    return (
      <div>
        <ReactPlayer
          url={videoUrl}
          onStart={this.seekToTime}
          playing={true}
          ref={this.ref}
        />
      </div>
    );
  }
}
