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
    const { connectDragSource, number, top, left } = this.props;
    const { toolBoxOpen } = this.state;
    // can get isDragging from props

    const style = {
      position: "absolute",
      top,
      left
    };
    return connectDragSource(
      <div
        className="c-dnd-video-player__side-bar__circle__wrapper"
        style={style}
      >
        <div className="c-dnd-video-player__side-bar__circle__sub">
          {toolBoxOpen ? <ToolBox /> : null}
          <div
            onClick={this.toggleTabBar}
            className="c-dnd-video-player__side-bar__circle"
          >
            {number}
          </div>
        </div>
      </div>
    );
  }
}

// Export the wrapped component:
export default DragSource("CIRCLE", cardSource, collect)(DraggableCircle);
