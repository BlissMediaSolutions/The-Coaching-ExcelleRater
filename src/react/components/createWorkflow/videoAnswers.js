import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import DragAndDropVideoPlayer from "./dragAndDropVIdeoPlayer";

class VideoAnswers extends Component {
  render() {
    const {
      resize,
      answers,
      moveAnswer,
      videoUrl,
      timeStamp,
      question
    } = this.props;
    return (
      <div className="u-component c-video-answers d-flex align-items-center m-3 flex-column w-100">
        <DragAndDropVideoPlayer
          resize={resize}
          moveAnswer={moveAnswer}
          answers={answers}
          videoUrl={videoUrl}
          timeStamp={timeStamp}
        />
        <div className="mt-2">
          Please drag and drop answer areas onto the correct locations with 1 being the lowest score and 3 being the highest.
        </div>
        <div className="mt-2">
          Click on the answer to open and close resizing menu
        </div>
        <div>
          <div className="d-flex align-items-center">
            <i className="c-video-answers__icon fa fa-question m-3" />
            <h2 className="m-0">{question}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(VideoAnswers);
