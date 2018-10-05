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
            <Label className="d-flex justify-content-between">
              Select playback rate <i className="fa fa-info c-video-setup__info" />
            </Label>
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
