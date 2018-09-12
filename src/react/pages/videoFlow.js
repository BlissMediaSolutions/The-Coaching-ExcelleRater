import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { videoFlowQuery, updateVideoFlow } from "../../graphql/videoFlow";

import Banner from "../components/common/banner";
import SuccessModal from "../components/common/successModal";
import Preloader from "../components/common/preloader";
import { SelectWorkflow, Video } from "../components/videoFlow";

import { validateNonEmptyString } from "../../util/validators";
import * as types from "../../graphql/types";
import { videoUrlString } from "../../util/helpers";
import { isDefinedNotNull } from "../../util/objUtil";
import { USER_ID } from "../../constants/storageTokens";
import { Link } from "react-router-dom";

import Results from "../pages/results";

class VideoFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
      playing: true,
      answerSelectModal: false,
      workflowCompleteModal: false,
      videoIndex: 0,
      data: [] // array of answers from the players
    };
  }

  componentDidMount() {
    const { updateVideoFlow } = this.props;
    const variables = { playerid: sessionStorage.getItem(USER_ID) };
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

  toggleWorkflowCompleteModal = () => {
    this.setState({
      workflowCompleteModal: !this.state.workflowCompleteModal
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
          index: 1, // Go to the next card
          videoData: response.data[0]
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
    const {
      videoFlow: { workflowVideos }
    } = this.props;
    const { playing, videoIndex } = this.state;
    // Prints out the x and y coordinates of the click on the overlay of the video player
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    // only record answer when video has been paused
    if (!playing) {
      this.setState({
        data: [
          ...this.state.data,
          { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
        ]
      });
      // check if last answer in workflow
      if (videoIndex === workflowVideos.length - 1) {
        this.setState({
          workflowCompleteModal: true
        });
      } else {
        this.setState({
          answerSelectModal: true
        });
      }
    }
  };

  toggleAnswerSelectModal = () => {
    this.setState({
      answerSelectModal: !this.state.answerSelectModal
    });
  };

  onContinueWorkflowClick = () => {
    const { videoFlow } = this.props;
    // Check whether there is any videos left in workflow
    // if there is, go to next video
    // else go to results page
    const newVideoIndex = this.state.videoIndex + 1;
    if (isDefinedNotNull(videoFlow.workflowVideos[newVideoIndex])) {
      this.setState({
        videoIndex: newVideoIndex,
        answerSelectModal: !this.state.answerSelectModal,
        videoData: videoFlow.workflowVideos[newVideoIndex],
        playing: true
      });
    }
  };

  onFinishWorkflow = () => {
    // Go to results for workflow
    this.props.history.push(`/results`);
    this.setState({
      index: 0,
      workflowCompleteModal: false
    });
  };

  componentToRender = index => {
    const { videoFlow } = this.props;
    const {
      workflowCompleteModal,
      videoData,
      answerSelectModal,
      searchString,
      playing
    } = this.state;
    console.log(videoFlow);

    switch (index) {
      case 0: {
        let filteredWorkflows = videoFlow.workflows;
        if (validateNonEmptyString(searchString)) {
          filteredWorkflows = filteredWorkflows.filter(workflow => {
            return workflow.wfname
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
        }

        return (
          <div>
            <SelectWorkflow
              onChange={this.onChange}
              onSelect={this.onWorflowSelect}
              searchString={searchString}
              workflows={filteredWorkflows}
            />
          </div>
        );
      }

      case 1: {
        console.log(videoData);
        return (
          <div>
            <Video
              question={videoData.question}
              onEndFrame={videoData.display}
              playing={playing}
              onChange={this.onChange}
              getClickPosition={this.getClickPosition}
              onProgress={this.onProgress}
              videoUrl={videoUrlString(videoData.filename)}
            />
            <SuccessModal
              isOpen={answerSelectModal}
              toggle={this.toggleAnswerSelectModal}
              heading="Answer Selected!"
              text="Your answer has been saved, click continue when you are ready for the next video"
              buttonText="Continue"
              onButtonClick={this.onContinueWorkflowClick}
            />
            <SuccessModal
              isOpen={workflowCompleteModal}
              toggle={this.toggleWorkflowCompleteModal}
              heading="Workflow Completed"
              text="Continue to results"
              buttonText="View Results"
              onButtonClick={this.onFinishWorkflow}
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
            title="Test Sequence"
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
