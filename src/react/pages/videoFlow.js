import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { Button } from "reactstrap";

import Banner from "../components/common/banner";
import { SelectWorkflow, Video } from "../components/videoFlow";

const maxIndex = 1;

class VideoFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
      playing: true
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
    // Prints out the x and y coordinates of the click on the overlay of the video player
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  componentToRender = index => {
    const { searchString, playing } = this.state;

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
          <Video
            question={"Where should the player pass next?"}
            playing={playing}
            onChange={this.onChange}
            getClickPosition={this.getClickPosition}
            onProgress={this.onProgress}
            videoUrl={"http://www.youtube.com/watch?v=2Ae5byjzUKg"}
          />
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
