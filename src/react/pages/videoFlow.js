import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { Button } from "reactstrap";

import Banner from "../components/common/banner";
import SuccessModal from "../components/common/successModal";
import { SelectWorkflow, Video } from "../components/videoFlow";

const maxIndex = 1;

class VideoFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
      playing: true,
      answerSelectModal: false,
      videoUrl: "http://www.youtube.com/watch?v=2Ae5byjzUKg",
      data: [] // array of answers from the players
    };
  }

  componentDidMount() {
    // To Do: Fetch Required Data
  }

  /* Generic Functions */
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
        return this.isSelectWorkflowComplete();
      default:
        return false;
    }
  }

  /* Workflow Related Functions */
  isSelectWorkflowComplete = () => {
    // Force user to select video
    return true; // TO DO: Fix this
  };

  // Stops the player at the required Time Stamps
  onProgress = progress => {
    // const { timeStamp } = this.props;
    const timeStamp = 1;
    if (Math.round(progress.playedSeconds) === parseInt(timeStamp, 10)) {
      this.setState({
        playing: false
      });
    }
  };

  onWorflowSelect = () => {
    this.setState({
      index: 1 // Go to the next card
    });
  };

  /* Video Related Functions */
  getClickPosition = e => {
    const { playing } = this.state;
    // Prints out the x and y coordinates of the click on the overlay of the video player
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    // only record answer when video has been paused
    if (!playing) {
      this.setState({
        data: [
          ...this.state.data,
          { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
        ],
        answerSelectModal: true
      });
    }
  };

  toggleAnswerSelectModal = () => {
    this.setState({
      answerSelectModal: !this.state.answerSelectModal
    });
  };

  onContinueWorkflowClick = () => {
    // Check whether there is any videos left in workflow
    // if there is, go to next video
    // else go to results page
    this.setState({
      answerSelectModal: !this.state.answerSelectModal,
      videoUrl: "http://www.youtube.com/watch?v=_Bnakw83tcM",
      playing: true
    });
  };

  componentToRender = index => {
    const { videoUrl, answerSelectModal, searchString, playing } = this.state;

    switch (index) {
      case 0: {
        return (
          <SelectWorkflow
            onChange={this.onChange}
            onSelect={this.onVideoSelect}
            searchString={searchString}
            workflows={[]}
          />
        );
      }

      case 1: {
        return (
          <div>
            <Video
              question={"Where should the player pass next?"}
              playing={playing}
              onChange={this.onChange}
              getClickPosition={this.getClickPosition}
              onProgress={this.onProgress}
              videoUrl={videoUrl}
            />
            <SuccessModal
              isOpen={answerSelectModal}
              toggle={this.toggleAnswerSelectModal}
              heading="Answer Selected!"
              text="Your answer has been saved, click continue when you are ready for the next video"
              buttonText="Continue"
              onButtonClick={this.onContinueWorkflowClick}
            />
          </div>
        );
      }

      default: {
        console.log("Indexing Error");
        return (
          <SelectWorkflow
            onChange={this.onChange}
            onSelect={this.onVideoSelect}
            searchString={searchString}
            workflows={[]}
          />
        );
      }
    }
  };

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
          <div className="row justify-content-center">
            {this.componentToRender(index)}
          </div>
          {index !== 4 && (
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
          )}
        </div>
      </div>
    );
  }
}

export default compose()(VideoFlow);
