import React, { Component } from "react";
import Banner from "../components/common/banner";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReactPlayerurl: "",
      inputURL: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUrlChange = e => {
    var value = e.target.value;
    this.setState({
      [e.target.id]: value
    });
  };

  updateVideoURL = () => {
    this.setState({
      ReactPlayerurl: this.state.inputURL
    });
  };

  render() {
    return (
      <div>
        <Banner
          title="Videos"
          bgImage="http://www.lanlinglaurel.com/data/out/134/5131848-sports-wallpaper.jpeg"
        />
        <div className="container">
          <div className="u-component">
            <div className="video__controls">
              <input
                className="video__url"
                type="text"
                placeholder="Enter URL Here"
                name="inputURL"
                id="inputURL"
                ref="inputURL"
                value={this.state.inputURL}
                onChange={this.handleUrlChange}
              />
              <div>
                <div className="video__react-container">
                  <ReactPlayer
                    className="video__react-player"
                    url={this.state.inputURL}
                    volume="1.0"
                    width="100%"
                    height="initial"
                  />
                </div>

                <h4 className="video__breakdown">
                  {" "}
                  Breakdown of the situtation{" "}
                </h4>
                <p className="video__breakdown-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam facere animi quod excepturi deserunt ratione eos
                  ipsa? Laudantium nobis eligendi sit libero possimus
                  necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
                  voluptates ipsa, magni, praesentium minus iste quae dolorem
                  aperiam. Sit, laborum enim commodi provident deleniti non iste
                  iusto sed inventore. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam facere animi quod excepturi
                  deserunt ratione eos ipsa? Laudantium nobis eligendi sit
                  libero possimus necessitatibus nulla, quam tenetur aliquid
                  incidunt obcaecati voluptates ipsa, magni, praesentium minus
                  iste quae dolorem aperiam. Sit, laborum enim commodi provident
                  deleniti non iste iusto sed inventore.
                </p>
                <p className="video__breakdown-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam facere animi quod excepturi deserunt ratione eos
                  ipsa? Laudantium nobis eligendi sit libero possimus
                  necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
                  voluptates ipsa, magni, praesentium minus iste quae dolorem
                  aperiam. Sit, laborum enim commodi provident deleniti non iste
                  iusto sed inventore. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam facere animi quod excepturi
                  deserunt ratione eos ipsa? Laudantium nobis eligendi sit
                  libero possimus necessitatibus nulla, quam tenetur aliquid
                  incidunt obcaecati voluptates ipsa, magni, praesentium minus
                  iste quae dolorem aperiam. Sit, laborum enim commodi provident
                  deleniti non iste iusto sed inventore.
                </p>
                <h4 className="video__additional"> Additional information </h4>
                <p className="video__additional-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam facere animi quod excepturi deserunt ratione eos
                  ipsa? Laudantium nobis eligendi sit libero possimus
                  necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
                  voluptates ipsa, magni, praesentium minus iste quae dolorem
                  aperiam. Sit, laborum enim commodi provident deleniti non iste
                  iusto sed inventore. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam facere animi quod excepturi
                  deserunt ratione eos ipsa? Laudantium nobis eligendi sit
                  libero possimus necessitatibus nulla, quam tenetur aliquid
                  incidunt obcaecati voluptates ipsa, magni, praesentium minus
                  iste quae dolorem aperiam. Sit, laborum enim commodi provident
                  deleniti non iste iusto sed inventore.
                </p>
                <p className="video__additional-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam facere animi quod excepturi deserunt ratione eos
                  ipsa? Laudantium nobis eligendi sit libero possimus
                  necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
                  voluptates ipsa, magni, praesentium minus iste quae dolorem
                  aperiam. Sit, laborum enim commodi provident deleniti non iste
                  iusto sed inventore. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam facere animi quod excepturi
                  deserunt ratione eos ipsa? Laudantium nobis eligendi sit
                  libero possimus necessitatibus nulla, quam tenetur aliquid
                  incidunt obcaecati voluptates ipsa, magni, praesentium minus
                  iste quae dolorem aperiam. Sit, laborum enim commodi provident
                  deleniti non iste iusto sed inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Video.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Video;
