import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { videoFlowQuery, updateVideoFlow } from "../../graphql/videoFlow";
import { updateResults } from "../../graphql/results";

import Banner from "../components/common/banner";
import SuccessModal from "../components/common/successModal";
import Preloader from "../components/common/preloader";
import { SelectWorkflow, Video } from "../components/videoFlow";

import { validateNonEmptyString } from "../../util/validators";
import * as types from "../../graphql/types";
import { videoUrlString } from "../../util/helpers";
import { isDefinedNotNull } from "../../util/objUtil";
import { USER_ID } from "../../constants/storageTokens";

// x,y is the point to test
// cx, cy is circle center, and radius is circle radius
const pointInCircle = (x, y, cx, cy, radius) => {
  var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  return distancesquared <= radius * radius;
};

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
    const { updateVideoFlow, videoFlow } = this.props;
    if (videoFlow.workflows.length < 1) {
      const variables = { playerid: sessionStorage.getItem(USER_ID) };
      this.setState({
        loading: true
      });
      axios
        .post("/getworkflowlist.php", variables)
        .then(response => {
          updateVideoFlow({
            variables: { type: types.WORKFLOW_LIST, data: response.data }
          });
          this.setState({
            loading: false
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            loading: false
          });
        });
    }
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
      const {
        answer1,
        ans1radius,
        answer2,
        ans2radius,
        answer3,
        ans3radius,
        workflowid,
        id
      } = workflowVideos[videoIndex];

      const answerCircles = [
        {
          cx: answer1.split(",")[0],
          cy: answer1.split(",")[1],
          cr: ans1radius
        },
        {
          cx: answer2.split(",")[0],
          cy: answer2.split(",")[1],
          cr: ans2radius
        },
        {
          cx: answer3.split(",")[0],
          cy: answer3.split(",")[1],
          cr: ans3radius
        }
      ];

      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;

      let score = 0;
      for (var i = 0; i < answerCircles.length; i++) {
        const { cx, cy, cr } = answerCircles[i];
        if (pointInCircle(x, y, cx, cy, cr)) {
          score = i + 1;
          break;
        }
      }

      const data = {
        score,
        answer: `${x},${y}`,
        playerid: sessionStorage.getItem(USER_ID),
        workflowid,
        videoid: id
      };

      this.setState({
        data: [...this.state.data, data]
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
    const {
      history,
      updateResults,
      videoFlow: { workflows, workflowVideos }
    } = this.props;
    const { data } = this.state;

    this.setState({
      loading: true
    });
    // get the workflow
    const workflow = workflows.find(
      workflow => workflow.id === data[0].workflowid
    );
    // save results in link state
    updateResults({
      variables: {
        type: types.INDIVIDUAL_RESULTS,
        data: { results: data, workflowVideos, workflow }
      }
    });
    // post to backend
    axios
      .post("/addanswers.php", data)
      .then(response => {
        history.push("/results");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
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

    switch (index) {
      case 0: {
        if (videoFlow.workflows.success === false) {
          return (
            <div>
              <div className="row py-5">
                <h2>No Workflows have been assigned to you</h2>
              </div>
              <div className="row justify-content-center pb-5 mb-5">
                <span>
                  Please contact your coach regarding workflow assignments
                </span>
              </div>
            </div>
          );
        }

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
          <div className="video-screen">
            <Video
              question={videoData.question}
              endFrame={videoData.display}
              playing={playing}
              onChange={this.onChange}
              getClickPosition={this.getClickPosition}
              onProgress={this.onProgress}
              videoUrl={videoUrlString(videoData.filename)}
            />
            <SuccessModal
              isOpen={answerSelectModal}
              heading="Answer Selected!"
              text="Your answer has been saved, click continue when you are ready for the next video"
              buttonText="Continue"
              onButtonClick={this.onContinueWorkflowClick}
            />
            <SuccessModal
              isOpen={workflowCompleteModal}
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
      <div className="mb-footer">
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
  graphql(updateVideoFlow, { name: "updateVideoFlow" }),
  graphql(updateResults, { name: "updateResults" })
)(VideoFlow);
