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

const target = {
  drop(props, monitor, component) {
    if (!component) {
      return;
    }
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const right = Math.round(item.right - delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveAnswer(item.number, top, right);
  }
};

class DragAndDropVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      answers: {
        "1": {
          number: "1",
          top: 0,
          right: 0
        },
        "2": {
          number: "2",
          top: 100,
          right: 0
        },
        "3": {
          number: "3",
          top: 200,
          right: 0
        }
      }
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

  moveAnswer = (number, top, right) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [number]: {
          ...this.state.answers[number],
          top,
          right
        }
      }
    });
  };

  render() {
    const { videoUrl, connectDropTarget } = this.props;
    const { playing, answers } = this.state;

    return connectDropTarget(
      <div className="c-dnd-video-player row position-relative">
        <div className="c-dnd-video-player__overlay bg-transparent" />

        <ReactPlayer
          className="c-dnd-video-player__player"
          url={videoUrl}
          playing={playing}
          onPlay={this.seekToTime}
          ref={this.ref}
        />
        <div className="c-dnd-video-player__side-bar d-flex flex-column justify-content-between">
          {Object.keys(answers).map(answer => {
            const { number, top, right } = answers[answer];
            return (
              <DraggableCircle
                key={number}
                number={number}
                top={top}
                right={right}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default DropTarget("CIRCLE", target, collect)(DragAndDropVideoPlayer);
