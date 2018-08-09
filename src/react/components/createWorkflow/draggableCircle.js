// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from "react";
import { DragSource } from "react-dnd";

const ITEM_TYPES = {
  CIRCLE: "circle"
};

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
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
    const { connectDragSource, number } = this.props;
    // can get isDragging from props

    return connectDragSource(
      <div className="c-dnd-video-player__side-bar__circle">{number}</div>
    );
  }
}

// Export the wrapped component:
export default DragSource(ITEM_TYPES.CIRCLE, cardSource, collect)(
  DraggableCircle
);
