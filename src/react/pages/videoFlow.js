import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { videoFlowQuery, updateVideoFlow } from "../../graphql/videoFlow";

import Banner from "../components/common/banner";
import SuccessModal from "../components/common/successModal";
import Preloader from "../components/common/preloader";
import { SelectWorkflow, Video } from "../components/videoFlow";

import * as types from "../../graphql/types";

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
    const { updateVideoFlow } = this.props;
    const variables = { playerid: "2" };
    axios
      .post("/getworkflowlist.php", variables)
      .then(response => {
        updateVideoFlow({
          variables: { type: types.WORKFLOW_LIST, data: response.data }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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

  onWorflowSelect = id => {
    const { updateVideoFlow } = this.props;
    this.setState({
      loading: true
    });
    // get the videos for the selected workflow
    axios
      .post("/getworkflowvids.php", { workflowid: id })
      .then(response => {
        console.log(response);
        updateVideoFlow({
          variables: { type: types.WORKFLOW_VIDEO_LIST, data: response.data }
        });
        this.setState({
          loading: false,
          index: 1 // Go to the next card
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
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
    const { videoFlow } = this.props;
    const { videoUrl, answerSelectModal, searchString, playing } = this.state;
    console.log(videoFlow);

    switch (index) {
      case 0: {
        return (
          <SelectWorkflow
            onChange={this.onChange}
            onSelect={this.onWorflowSelect}
            searchString={searchString}
            workflows={videoFlow.workflows}
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
    const { loading, index } = this.state;
    const showBanner = index === 0;

    if (loading) {
      return <Preloader />;
    }

    return (
      <div>
        {showBanner && (
          <Banner
            title="Create Workflow"
            bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"
          />
        )}
        <div className="container">
          <div className="row justify-content-center">
            {this.componentToRender(index)}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(videoFlowQuery, {
    props: ({ data: { videoFlow } }) => ({
      videoFlow
    })
  }),
  graphql(updateVideoFlow, { name: "updateVideoFlow" })
)(VideoFlow);
