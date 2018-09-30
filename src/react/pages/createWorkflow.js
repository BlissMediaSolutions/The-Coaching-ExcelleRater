import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { workflowQuery, updateWorkflow } from "../../graphql/workflow";
// import PropTypes from "prop-types";
import { Button } from "reactstrap";

import Banner from "../components/common/banner";
import Preloader from "../components/common/preloader";
import SuccessModal from "../components/common/successModal";
import SelectVideo from "../components/createWorkflow/selectVideo";
import VideoSetUp from "../components/createWorkflow/videoSetUp";
import VideoAnswers from "../components/createWorkflow/videoAnswers";
import SelectPlayers from "../components/createWorkflow/selectPlayers";
import CompleteWorkflow from "../components/createWorkflow/completeWorkflow";
import WorkflowModal from "../components/createWorkflow/workflowModal";

import { isDefinedNotNull } from "../../util/objUtil";
import { validateNonEmptyString } from "../../util/validators";

import { VIDEO_LIST, PLAYER_LIST } from "../../graphql/types";
import { USER_TEAM } from "../../constants/storageTokens";
import { videoUrlString } from "../../util/helpers";

const maxIndex = 4;

class CreateWorkflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
      workflowModal: false,
      successModal: false,
      workflowName: "",
      videoId: "",
      playing: true,
      timeStamp: "",
      question: "",
      endFrame: "show",
      playbackRate: 1.0,
      answers: {
        "1": {
          number: "1",
          top: 0,
          left: 640,
          height: 50,
          width: 50
        },
        "2": {
          number: "2",
          top: 100,
          left: 640,
          height: 50,
          width: 50
        },
        "3": {
          number: "3",
          top: 200,
          left: 640,
          height: 50,
          width: 50
        }
      },
      data: {
        videoData: [],
        players: []
      }
    };
  }

  componentDidMount() {
    const { updateWorkflow } = this.props;
    const variables = {
      teamid: parseInt(sessionStorage.getItem(USER_TEAM), 10)
    };
    axios
      .post("/getteamplayers.php", variables)
      .then(response => {
        updateWorkflow({
          variables: { type: PLAYER_LIST, data: response.data }
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .post("/getteamvideos.php", variables)
      .then(response => {
        updateWorkflow({
          variables: { type: VIDEO_LIST, data: response.data }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleWorkflowModal = () => {
    this.setState({
      workflowModal: !this.state.workflowModal
    });
  };

  toggleSuccessModal = () => {
    this.setState({
      successModal: false,
      index: 0
    });
  };

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
      case 3:
        return false; // force decision on complete workflow
      case 4:
        return this.isSelectPlayerComplete();
      default:
        return false;
    }
  }

  isSelectVideoComplete = () => {
    // Force user to select video
    return false;
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

  isSelectPlayerComplete = () => {
    const { players } = this.state.data;
    return players.length > 0;
  };

  onProgress = progress => {
    const { timeStamp } = this.state;
    if (Math.round(progress.playedSeconds) === parseInt(timeStamp, 10)) {
      this.setState({
        playing: false
      });
    }
  };

  moveAnswer = (number, top, left) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [number]: {
          ...this.state.answers[number],
          top,
          left
        }
      }
    });
  };

  resize = (number, direction) => {
    let newAnswer = this.state.answers[number];
    switch (direction) {
      case "up":
        newAnswer = {
          ...newAnswer,
          height: newAnswer.height + 5,
          width: newAnswer.width + 5
        };
        break;
      case "down":
        newAnswer = {
          ...newAnswer,
          height: newAnswer.height - 5,
          width: newAnswer.width - 5
        };
        break;
      default:
        break;
    }
    this.setState({
      answers: {
        ...this.state.answers,
        [number]: newAnswer
      }
    });
  };

  onVideoSelect = id => {
    // set the video id and change index
    // also reset the data to default
    this.setState({
      videoId: id,
      index: this.state.index + 1,
      timeStamp: "",
      question: "",
      endFrame: "show",
      playbackRate: 1.0,
      answers: {
        "1": {
          number: "1",
          top: 0,
          left: 640,
          height: 50,
          width: 50
        },
        "2": {
          number: "2",
          top: 100,
          left: 640,
          height: 50,
          width: 50
        },
        "3": {
          number: "3",
          top: 200,
          left: 640,
          height: 50,
          width: 50
        }
      }
    });
  };

  getVideoUrl = id => {
    const {
      workflow: { videos }
    } = this.props;
    const video = videos.find(video => video.id === id);
    if (isDefinedNotNull(video)) {
      return videoUrlString(video.filename);
    }
    // if no video was found
    return undefined;
  };

  onPlayerSelect = id => {
    const { data } = this.state;
    const { players } = data;
    const playerIndex = players.indexOf(id);
    if (playerIndex !== -1) {
      // player has already been selected
      const newPlayers = players;
      // remove the player
      newPlayers.splice(playerIndex, 1);
      this.setState({
        data: {
          ...data,
          players: newPlayers
        }
      });
    } else {
      // if player has not been selected
      this.setState({
        data: {
          ...data,
          // add the player
          players: [...players, id]
        }
      });
    }
  };

  onAddVideoSetUp = addMore => {
    const {
      videoId,
      question,
      timeStamp,
      endFrame,
      playbackRate,
      answers,
      data: { videoData }
    } = this.state;

    const videoSetUpData = {
      videoId,
      question,
      timeStamp,
      endFrame,
      playbackRate,
      answers
    };

    // if adding more go to start, else go to player select
    const index = addMore ? 0 : 4;

    this.setState({
      index,
      data: {
        ...this.state.data,
        videoData: [...videoData, videoSetUpData] // add video
      }
    });
  };

  onGoBackClick = () => {
    const { data } = this.state;
    const newVideoData = data.videoData;
    newVideoData.pop(); // remove the last video set up
    this.setState({
      data: {
        ...data,
        videoData: newVideoData
      },
      index: 3
    });
  };

  saveWorkflow = () => {
    const { data, workflowName } = this.state;
    // build player object
    let playerObject = {};
    data.players.forEach((p, index) => {
      const key = (index + 1).toString();
      playerObject = { ...playerObject, [key]: p };
    });

    // initial variables
    const variables = [
      {
        name: workflowName,
        date: new Date(),
        teamid: sessionStorage.getItem(USER_TEAM),
        coachid: "1",
        resolution: "400x300"
      },
      playerObject
    ];
    // build and push each video data onto variables
    data.videoData.forEach(video => {
      const { endFrame, playbackRate, question, videoId, timeStamp } = video;
      const ans1 = `${video.answers[1].left},${video.answers[1].top}`;
      const ans2 = `${video.answers[2].left},${video.answers[2].top}`;
      const ans3 = `${video.answers[3].left},${video.answers[3].top}`;

      variables.push({
        ans1,
        ans1radius: video.answers[0].width / 2,
        ans2,
        ans2radius: video.answers[1].width / 2,
        ans3,
        ans3radius: video.answers[2].width / 2,
        endframe: endFrame,
        playrate: playbackRate,
        videoid: videoId,
        stoppoint: timeStamp,
        question
      });
    });
    // send to php
    this.setState({
      loading: true
    });
    axios
      .post("/addworkflow.php", variables)
      .then(() => {
        // stop loading and go back to first screen
        this.setState({
          loading: false,
          workflowModal: false,
          successModal: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };

  componentToRender = index => {
    const { workflow } = this.props;
    const {
      workflowModal,
      workflowName,
      successModal,
      playing,
      videoId,
      answers,
      searchString,
      question,
      timeStamp,
      endFrame,
      playbackRate,
      data: { players }
    } = this.state;

    const videoUrl = this.getVideoUrl(videoId);

    switch (index) {
      case 0: {
        let filteredVideos = workflow.videos;
        if (validateNonEmptyString(searchString)) {
          filteredVideos = workflow.videos.filter(video => {
            const string = video.description + " " + video.title;
            return string.toLowerCase().includes(searchString.toLowerCase());
          });
        }

        return (
          <SelectVideo
            videos={filteredVideos}
            onChange={this.onChange}
            onSelect={this.onVideoSelect}
            searchString={searchString}
          />
        );
      }
      case 1:
        return (
          <VideoSetUp
            playing={playing}
            videoUrl={videoUrl}
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
            resize={this.resize}
            answers={answers}
            videoUrl={videoUrl}
            moveAnswer={this.moveAnswer}
            question={question}
            timeStamp={timeStamp}
          />
        );
      case 3:
        return <CompleteWorkflow onAdd={this.onAddVideoSetUp} />;
      case 4:
        return (
          <div>
            <SelectPlayers
              players={workflow.players}
              selectedPlayers={players}
              onSelect={this.onPlayerSelect}
              onSave={this.toggleWorkflowModal}
              onGoBackClick={this.onGoBackClick}
            />
            <WorkflowModal
              isOpen={workflowModal}
              toggle={this.toggleWorkflowModal}
              workflowName={workflowName}
              onChange={this.onChange}
              onButtonClick={this.saveWorkflow}
            />
            <SuccessModal
              isOpen={successModal}
              toggle={this.toggleSuccessModal}
              heading="Workflow created!"
            />
          </div>
        );

      default: {
        console.log("Indexing Error");
        return (
          <SelectVideo onChange={this.onChange} searchString={searchString} />
        );
      }
    }
  };

  render() {
    const { index, loading } = this.state;
    const canNext = this.isComplete(index) && index < maxIndex;
    const canPrev = index !== 0;

    const className = canPrev ? "mt-5 pt-5" : "";

    console.log(this.state.answers);

    return (
      <div className="mb-footer">
        {!canPrev && (
          <Banner
            title="Create Workflow"
            bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"
          />
        )}
        <div className={`container ${className}`}>
          <div className="row justify-content-center">
            {loading ? <Preloader /> : this.componentToRender(index)}
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

CreateWorkflow.propTypes = {};

export default compose(
  graphql(workflowQuery, {
    props: ({ data: { workflow } }) => ({
      workflow
    })
  }),
  graphql(updateWorkflow, { name: "updateWorkflow" })
)(CreateWorkflow);
