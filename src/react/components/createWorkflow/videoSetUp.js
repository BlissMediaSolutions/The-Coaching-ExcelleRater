import React from "react";
import ReactPlayer from "react-player";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label
} from "reactstrap";

import {
  EndFrameTooltip,
  QuestionTooltip,
  TimestampTooltip,
  PlaybackTooltip
} from "./tooltip";

export default ({
  playing,
  timeStamp,
  question,
  endFrame,
  playbackRate,
  onChange,
  videoUrl,
  onProgress
}) => (
  <div className="c-video-setup d-flex align-items-center flex-column w-100">
    <ReactPlayer
      playing={playing}
      url={videoUrl}
      controls={true}
      onProgress={onProgress}
      progressInterval={100}
      className="c-react-player"
    />
    <div className="w-100">
      <div className="d-flex align-items-center mt-3 mb-3">
        <i className="c-video-setup__icon fa fa-cog mr-3" />
        <h2 className="m-0">Setup the clip information</h2>
      </div>
      <div>
        <div className="row">
          <FormGroup className="col sm-12">
            <Label>Enter question to ask</Label>
            <i
              style={{ marginLeft: "25px" }}
              class="fa fa-info-circle"
              data-tip
              data-for="question"
            />
            <QuestionTooltip />

            <Input
              type="text"
              name="question"
              value={question}
              onChange={onChange}
            />
          </FormGroup>
        </div>
        <div className="row">
          <FormGroup className="col sm-4">
            <Label>Pause at Timestamp</Label>
            <i
              style={{ marginLeft: "25px" }}
              class="fa fa-info-circle"
              data-tip
              data-for="timeStamp"
            />
            <TimestampTooltip />
            <InputGroup>
              <Input
                type="number"
                name="timeStamp"
                value={timeStamp}
                onChange={onChange}
              />
              <InputGroupAddon addonType="append">seconds</InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup className="col sm-4">
            <Label>Select playback rate</Label>
            <i
              style={{ marginLeft: "25px" }}
              class="fa fa-info-circle"
              data-tip
              data-for="playback"
            />
            <PlaybackTooltip />

            <Input
              type="select"
              name="playbackRate"
              value={playbackRate}
              onChange={onChange}
            >
              <option value={1.0}>1.0x</option>
              <option value={1.1}>1.1x</option>
              <option value={1.2}>1.2x</option>
              <option value={1.3}>1.3x</option>
              <option value={1.4}>1.4x</option>
              <option value={1.5}>1.5x</option>
            </Input>
          </FormGroup>
          <FormGroup className="col sm-4">
            <Label>Select end frame option</Label>
            <i
              style={{ marginLeft: "25px" }}
              class="fa fa-info-circle"
              data-tip
              data-for="endFrame"
            />
            <EndFrameTooltip />
            <Input
              type="select"
              name="endFrame"
              value={endFrame}
              onChange={onChange}
            >
              <option value="show">Show Last Frame</option>
              <option value="black-out">Black Out</option>
              <option value="fade">Fade To Black</option>
            </Input>
          </FormGroup>
        </div>
      </div>
    </div>
  </div>
);
