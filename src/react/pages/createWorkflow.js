import React, { Component } from "react";
import Banner from "../components/banner";
// import PropTypes from "prop-types";

import { Button } from "reactstrap";

import SelectVideo from "../components/createWorkflow/selectVideo";
import VideoSetUp from "../components/createWorkflow/videoSetUp";
import VideoAnswers from "../components/createWorkflow/videoAnswers";
import { isDefinedNotNull } from "../../util/objUtil";
import { validateNonEmptyString } from "../../util/validators";

const maxIndex = 2;

// Video to Play
const youtubeVideo = "https://www.youtube.com/watch?v=mQQgFqptVyc";

class CreateWorkflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
      timeStamp: "",
      question: "",
      endFrame: "show",
      playbackRate: 1.0
    };
  }

  onNextClick = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  onPrevClick = () => {
    this.setState({
      index: this.state.index - 1
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isComplete(index) {
    switch (index) {
      case 0:
        return this.isSelectVideoComplete();
      case 1:
        return this.isVideoSetUpComplete();
      case 2:
        return this.isVideoAnswersComplete();
      default:
        return false;
    }
  }

  isSelectVideoComplete = () => {
    // TO DO: Check if video is selected
    // For now, just check non empty string
    return validateNonEmptyString(this.state.searchString);
  };

  isVideoSetUpComplete = () => {
    const { question, timeStamp, endFrame, playbackRate } = this.state;

    return (
      validateNonEmptyString(question) &&
      parseInt(timeStamp, 10) > 0 &&
      validateNonEmptyString(endFrame) &&
      isDefinedNotNull(playbackRate)
    );
  };

  isVideoAnswersComplete = () => {
    // To Do: Check that all 3 have been set up
    return true;
  };

  componentToRender(index) {
    const {
      searchString,
      question,
      timeStamp,
      endFrame,
      playbackRate
    } = this.state;
    switch (index) {
      case 0:
        return (
          <SelectVideo onChange={this.onChange} searchString={searchString} />
        );
      case 1:
        return (
          <VideoSetUp
            videoUrl={youtubeVideo}
            onChange={this.onChange}
            question={question}
            timeStamp={timeStamp}
            endFrame={endFrame}
            playbackRate={playbackRate}
          />
        );
      case 2:
        return (
          <VideoAnswers
            videoUrl={youtubeVideo}
            question={question}
            timeStamp={timeStamp}
            endFrame={endFrame}
            playbackRate={playbackRate}
          />
        );
      default:
        console.log("Indexing Error");
    }
  }

  render() {
    const { index } = this.state;
    const canNext = this.isComplete(index) && index < maxIndex;
    const canPrev = index !== 0;

    return (
      <div>
        {!canPrev && (
          <Banner
            title="Create Workflow"
            bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"
          />
        )}
        <div className="container">
          <div className="row">{this.componentToRender(index)}</div>
          <div className="row justify-content-between mb-4">
            <Button
              color="secondary"
              onClick={this.onPrevClick}
              disabled={!canPrev}
            >
              Previous
            </Button>
            <Button
              color="primary"
              onClick={this.onNextClick}
              disabled={!canNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CreateWorkflow.propTypes = {};

export default CreateWorkflow;
