import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import ReactPlayer from "react-player";

import DraggableCircle from "./draggableCircle";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const squareTarget = {
  drop(props) {
    console.log("DROP");
  }
};

class DragAndDropVideoPlayer extends Component {
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
    const { videoUrl, connectDropTarget } = this.props;
    const { playing } = this.state;

    return connectDropTarget(
      <div className="c-dnd-video-player row">
        <div className="c-dnd-video-player__overlay b-transparent" />

        <ReactPlayer
          className="c-dnd-video-player__player"
          url={videoUrl}
          playing={playing}
          onPlay={this.seekToTime}
          ref={this.ref}
          style={{
            zIndex: "-1"
          }}
        />
        <div className="c-dnd-video-player__side-bar d-flex flex-column justify-content-between">
          <DraggableCircle number="1" />
          <DraggableCircle number="2" />
          <DraggableCircle number="3" />
        </div>
      </div>
    );
  }
}

export default DropTarget("CIRCLE", squareTarget, collect)(
  DragAndDropVideoPlayer
);
