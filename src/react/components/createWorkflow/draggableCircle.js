// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from "react";
import { DragSource } from "react-dnd";

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      number: props.number,
      top: props.top,
      right: props.right
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
  render() {
    const { connectDragSource, number, top, right } = this.props;
    // can get isDragging from props

    const style = {
      position: "absolute",
      top,
      right
    };
    return connectDragSource(
      <div className="c-dnd-video-player__side-bar__circle" style={style}>
        {number}
      </div>
    );
  }
}

// Export the wrapped component:
export default DragSource("CIRCLE", cardSource, collect)(DraggableCircle);
