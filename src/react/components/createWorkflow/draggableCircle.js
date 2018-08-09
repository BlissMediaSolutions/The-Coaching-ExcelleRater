// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from "react";
import { DragSource } from "react-dnd";

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    console.log("BEGIN");
    return {
      top: props.top,
      right: props.right
    };
  },

  endDrag(props, monitor, component) {
    console.log("END");
    if (!monitor.didDrop()) {
      return;
    }
    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    console.log(item);
    const dropResult = monitor.getDropResult();
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  console.log("COLLECT");
  // console.log(connect, monitor);
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DraggableCircle extends Component {
  render() {
    const { connectDragSource, number } = this.props;
    // can get isDragging from props

    return connectDragSource(
      <div className="c-dnd-video-player__side-bar__circle">{number}</div>
    );
  }
}

// Export the wrapped component:
export default DragSource("CIRCLE", cardSource, collect)(DraggableCircle);
