import React from "react";
import { Modal, Button, Input, Label } from "reactstrap";

export default ({ isOpen, toggle, workflowName, onChange, onButtonClick }) => (
  <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered">
    <div className="container-fluid px-4 py-3">
      <h2 className="m-0">Name your Workflow!</h2>
    </div>
    <div className="bg-grey-light px-4 py-3">
      <div className="row">
        <div className="form-group col-12">
          <Label>Workflow Name</Label>
          <Input
            type="text"
            name="workflowName"
            value={workflowName}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row justify-content-between my-3">
        <div className="col-6">
          <Button className="w-100" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </div>
        <div className="col-6">
          <Button
            color="primary"
            className="w-100"
            onClick={onButtonClick}
            disabled={workflowName === ""}
          >
            Save Workflow
          </Button>
        </div>
      </div>
    </div>
  </Modal>
);
