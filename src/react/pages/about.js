import React, { Component } from "react";
import Banner from "../components/common/banner";

class About extends Component {
  render() {
    return (
      <div className="mb-footer">
        <Banner
          title="About / Us"
          bgImage="http://getwallpapers.com/wallpaper/full/4/4/3/382939.jpg"
        />
        <div className="container">
          <div className="u-component">
            <h2>What we do</h2>
<p>
  The Coaching ExcelleRater is a video-based decision-making platform for performance analysis and coaching.
</p>

<p> 
  Identifying, classifying and rating video clips has become a crucial component of many professional sports coaching programs.
</p>

<p> 
  The Coaching ExcelleRater allows coaching staff to select relevant video clips and customise decision-making scenarios for their athletes.
</p>

<p>
        Features include:
    <ul> 
<li> A simple 3-2-1 scoring system, with user-defined regions indicating a set of good decisions. </li>
<li> Real-time and above real-time video playback, to better simulate in-game cognitive demands.</li>
<li> Separate athlete and coach roles, providing access to the decision-making scenarios and summary data. </li>
    </ul>
</p>
      </div>
    </div>
</div>
    );
  }
}

export default About;
