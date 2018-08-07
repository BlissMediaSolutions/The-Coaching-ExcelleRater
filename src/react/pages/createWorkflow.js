import React, { Component } from "react";
import Banner from "../components/banner";
// import PropTypes from "prop-types";

import { Button } from "reactstrap";

import SelectVideo from "../components/createWorkflow/selectVideo";
import VideoSetUp from "../components/createWorkflow/videoSetUp";

const maxIndex = 1;

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
      default:
        return false;
    }
  }

  isSelectVideoComplete = () => {
    // TO DO: Check if video is selected
    // For now, just check non empty string
    return this.state.searchString !== "";
  };

  isVideoSetUpComplete = () => {
    return true;
  };

  componentToRender(index) {
    switch (index) {
      case 0:
        return (
          <SelectVideo
            onChange={this.onChange}
            searchString={this.state.searchString}
          />
        );
      case 1:
        return (
          <VideoSetUp
            videoUrl={youtubeVideo}
            onChange={this.onChange}
            question={this.state.question}
            timeStamp={this.state.timeStamp}
            endFrame={this.state.endFrame}
            playbackRate={this.state.playbackRate}
          />
        );
      default:
        console.log("Indexing Error");
    }
  }

  render() {
    const canNext =
      this.isComplete(this.state.index) && this.state.index < maxIndex;
    const canPrev = this.state.index !== 0;

    return (
      <div>
        {!canPrev && (
          <Banner
            title="Create Workflow"
            bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"
          />
        )}
        <div className="container">
          <div className="row">{this.componentToRender(this.state.index)}</div>
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
