import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <div id="loader-wrapper">
        <div id="loader" />

        <div class="loader-section section-left" />
        <div class="loader-section section-right" />
      </div>
    );
  }
}
export default Preloader;
