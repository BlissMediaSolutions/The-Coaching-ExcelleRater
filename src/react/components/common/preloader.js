import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <div id="loader-wrapper">
        <div id="loader" />

        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    );
  }
}
export default Preloader;
