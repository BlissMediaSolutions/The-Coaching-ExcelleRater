import React from "react";
import { Modal, Button } from "reactstrap";

export default ({
  isOpen,
  toggle,
  heading,
  text,
  buttonText,
  onButtonClick
}) => (
  <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="modal-dialog-centered u-modal__w-30rem"
  >
    <div className="d-flex flex-column justify-content-between align-items-center p-5">
      <div className="c-success-modal__icon-container">
        <i className="fa fa-check" />
      </div>
      <h1 className="mt-3">{heading}</h1>
      <span className="mt-3 text-center">{text}</span>
      <Button
        color="primary"
        className="mt-5"
        onClick={onButtonClick || toggle}
      >
        {buttonText || "Dismiss"}
      </Button>
    </div>
  </Modal>
);
