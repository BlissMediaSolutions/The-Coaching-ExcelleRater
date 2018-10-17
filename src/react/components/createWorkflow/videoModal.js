import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Modal } from "reactstrap";

export default class VideoModal extends Component {
  render() {
    const {
      isOpen,
      toggle,
      videos,
      getVideoUrl,
      deleteVideo,
      onChangeOrderClick
    } = this.props;
    console.log(videos);
    return (
      <Modal isOpen={isOpen} toggle={toggle} className="c-video-modal">
        <div className="container-fluid py-4 px-5">
          <div className="row justify-content-between">
            <h3>Currently Added Videos For Workflow</h3>
            <i className="fa fa-times c-video-modal__icon" onClick={toggle} />
          </div>
          <div className="row border-bottom">
            <div className="col-2">Order</div>
            <div className="col-4">Video</div>
            <div className="col-5">Question</div>
          </div>
          {videos.map((v, index) => (
            <div
              className="row mt-2 pb-2 border-bottom align-items-center"
              key={index}
            >
              <div className="col-2 d-flex align-items-center">
                <span className="mr-2 c-video-modal__item__order">
                  {index + 1}
                </span>
                {index < videos.length - 1 ? (
                  <i
                    className="fa fa-arrow-down c-video-modal__item__icon"
                    onClick={() => onChangeOrderClick(index, "desc")}
                  />
                ) : null}
                {index > 0 ? (
                  <i
                    className="fa fa-arrow-up c-video-modal__item__icon"
                    onClick={() => onChangeOrderClick(index, "asc")}
                  />
                ) : null}
              </div>
              <div className="col-4">
                <ReactPlayer
                  url={getVideoUrl(v.videoId)}
                  playing={false}
                  width={200}
                  height={100}
                />
              </div>
              <div className="col-5">{v.question}</div>
              <div className="col-1">
                <i
                  className="fa fa-trash c-video-modal__item__icon"
                  onClick={() => deleteVideo(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    );
  }
}
