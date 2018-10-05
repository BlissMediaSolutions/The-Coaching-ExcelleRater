import React, { Component } from "react";
import ReactPlayer from "react-player";
import { videoUrlString } from "../../../util/helpers";

export default class DetailedAnswer extends Component {
  constructor(props) {
    super(props);

    const answer1Coordinates = this.props.answer1.split(",");
    const answer2Coordinates = this.props.answer2.split(",");
    const answer3Coordinates = this.props.answer3.split(",");

    const answerOne = {
      x: answer1Coordinates[0],
      y: answer1Coordinates[1],
      r: this.props.an1radius
    };
    const answerTwo = {
      x: answer2Coordinates[0],
      y: answer2Coordinates[1],
      r: this.props.an2radius
    };
    const answerThree = {
      x: answer3Coordinates[0],
      y: answer3Coordinates[1],
      r: this.props.an3radius
    };

    const answers = [answerOne, answerTwo, answerThree];

    this.state = {
      playing: true,
      answers
    };
  }

  ref = player => {
    this.player = player;
  };

  seekToTime = () => {
    const { stoppoint } = this.props;
    this.player.seekTo(stoppoint);
    this.setState({
      playing: false
    });
  };

  render() {
    const { answer, filename } = this.props;
    const { playing, answers } = this.state;

    console.log(answers);
    const answerStyle = {
      position: "absolute",
      top: parseInt(answer.split(",")[1], 10),
      left: parseInt(answer.split(",")[0], 10)
    };

    return (
      <div>
        <div className="position-relative">
          <div className="video__overlay" />
          <ReactPlayer
            className="c-dnd-video-player__player"
            url={videoUrlString(filename)}
            playing={playing}
            onPlay={this.seekToTime}
            ref={this.ref}
            width={1130}
            height={650}
          />
          {answers.map((a, index) => {
            console.log(a);
            const { x, y, r } = a;
            const style = {
              position: "absolute",
              top: parseInt(y, 10),
              left: parseInt(x, 10),
              width: r * 2,
              height: r * 2
            };

            return (
              <div className="answer-circle" style={style} key={index}>
                {index + 1}
              </div>
            );
          })}
          <i className="fa fa-times player-selection" style={answerStyle} />
        </div>
      </div>
    );
  }
}
