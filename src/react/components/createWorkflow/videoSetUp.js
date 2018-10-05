import React from "react";
import ReactPlayer from "react-player";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label
} from "reactstrap";

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
  <div className="c-video-setup d-flex align-items-center m-3 flex-column w-100">
    <ReactPlayer
      playing={playing}
      url={videoUrl}
      controls={true}
      onProgress={onProgress}
      progressInterval={100}
    />
    <div>
      <div className="d-flex align-items-center">
        <i className="c-video-setup__icon fa fa-cog m-3" />
        <h2 className="m-0">Setup the clip information</h2>
      </div>
      <div>
        <div className="row">
          <FormGroup className="col sm-12">
            <Label>Enter question to ask</Label>
            <i style={{marginLeft:"25px"}} class="fa fa-info-circle" title="Enter a question to ask the player completing the workflow"></i>
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
            <i style={{marginLeft:"25px"}} class="fa fa-info-circle" title="Pause at Timestamp allows you to choose a time in which you would like the video to be stopped"></i>
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
            <i style={{paddingLeft:"25px"}} class="fa fa-info-circle" title="Select Playback rate determines the playback speed of the video when players are attempting this question"></i>

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
            <i style={{paddingLeft:"25px"}} class="fa fa-info-circle" title="Select end frame option allows you to choose an option for the final frame shown"></i>
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
