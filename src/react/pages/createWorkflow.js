import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { workflowQuery, updateWorkflow } from "../../graphql/workflow";
// import PropTypes from "prop-types";
import { Button } from "reactstrap";

import Banner from "../components/common/banner";
import SelectVideo from "../components/createWorkflow/selectVideo";
import VideoSetUp from "../components/createWorkflow/videoSetUp";
import VideoAnswers from "../components/createWorkflow/videoAnswers";
import SelectPlayers from "../components/createWorkflow/selectPlayers";
import CompleteWorkflow from "../components/createWorkflow/completeWorkflow";

import { isDefinedNotNull } from "../../util/objUtil";
import { validateNonEmptyString } from "../../util/validators";

import { VIDEO_LIST, PLAYER_LIST } from "../../graphql/types";
import { USER_TEAM } from "../../constants/storageTokens";

const maxIndex = 4;

class CreateWorkflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      searchString: "",
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
          left: 640
        },
        "2": {
          number: "2",
          top: 100,
          left: 640
        },
        "3": {
          number: "3",
          top: 200,
          left: 640
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

  onVideoSelect = id => {
    // set the video id and change index
    this.setState({
      videoId: id,
      index: this.state.index + 1
    });
  };

  getVideoUrl = id => {
    const {
      workflow: { videos }
    } = this.props;
    const video = videos.find(video => video.id === id);
    if (isDefinedNotNull(video)) {
      return "http://144.6.226.54/videos/" + video.filename;
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
    // TO DO: Need an end point
    const { data } = this.state;
    console.log(JSON.stringify(data));
  };

  componentToRender = index => {
    const { workflow } = this.props;
    const {
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
            return video.description
              .toLowerCase()
              .includes(searchString.toLowerCase());
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
          <SelectPlayers
            players={workflow.players}
            selectedPlayers={players}
            onSelect={this.onPlayerSelect}
            onSave={this.saveWorkflow}
            onGoBackClick={this.onGoBackClick}
          />
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

CreateWorkflow.propTypes = {};

export default compose(
  graphql(workflowQuery, {
    props: ({ data: { workflow } }) => ({
      workflow
    })
  }),
  graphql(updateWorkflow, { name: "updateWorkflow" })
)(CreateWorkflow);
