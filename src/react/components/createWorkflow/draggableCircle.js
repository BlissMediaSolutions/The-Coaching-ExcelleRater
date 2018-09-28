// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { ToolBox } from "./toolbox";

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      number: props.number,
      top: props.top,
      left: props.left
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DraggableCircle extends Component {
  state = {
    toolBoxOpen: false
  };

  toggleTabBar = () => {
    this.setState({
      toolBoxOpen: !this.state.toolBoxOpen
    });
    console.log("selected circle");
  };

  render() {
    const {
      connectDragSource,
      resize,
      number,
      top,
      left,
      width,
      height
    } = this.props;
    const { toolBoxOpen } = this.state;
    // can get isDragging from props

    const style = {
      "z-index": 9999,
      position: "absolute",
      top,
      left,
      width,
      height
    };

    if (toolBoxOpen) {
      return (
        <div className="c-dnd-video-player__side-bar__circle" style={style}>
          <ToolBox number={number} resize={resize} />
          <div onClick={this.toggleTabBar}>{number}</div>
        </div>
      );
    }
    return connectDragSource(
      <div className="c-dnd-video-player__side-bar__circle" style={style}>
        <div onClick={this.toggleTabBar}>{number}</div>
      </div>
    );
  }
}

// Export the wrapped component:
export default DragSource("CIRCLE", cardSource, collect)(DraggableCircle);
