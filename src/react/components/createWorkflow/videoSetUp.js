import React from "react";
import ReactPlayer from "react-player";
import ReactTooltip from 'react-tooltip'

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

          <a style={{marginLeft:"25px"}} class="fa fa-info-circle" data-tip data-for='InfoCircle'> </a> 
          <ReactTooltip id='InfoCircle' type='error' effect='float' place='top'>
          <span>
            Enter question to ask player completing the workflow
          </span>
          </ReactTooltip>

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

            <a style={{marginLeft:"25px"}} class="fa fa-info-circle" data-tip data-for='InfoCircle2'> </a> 
            <ReactTooltip id='InfoCircle2' type='error' effect='solid' place='top'>
            <span>
              Pause at Timestamp automatically stops the video at the time you select
            </span>
            </ReactTooltip>

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
            <a style={{marginLeft:"25px"}} class="fa fa-info-circle" data-tip data-for='InfoCircle3'> </a> 
          <ReactTooltip id='InfoCircle3' type='error' effect='float' place='top'>
          <span>
          Select Playback rate determines the playback speed of the video when players are attempting this question
          </span>
          </ReactTooltip>


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
            <a style={{marginLeft:"25px"}} class="fa fa-info-circle" data-tip data-for='InfoCircle4'> </a> 
          <ReactTooltip id='InfoCircle4' type='error' effect='solid' place='top'>
          <span>
            Select end frame allows you to select an option for the final frame 
          </span>
          </ReactTooltip>
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
