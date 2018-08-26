import React from "react";

export default ({ personid, fullname, selected, onSelect }) => (
  <div
    key={personid}
    className="c-player-item row  py-2 border-bottom"
    onClick={() => onSelect(personid)}
  >
    <div className="col-11">{fullname}</div>
    <div className="col-1 justify-content-end">
      {selected ? (
        <i className="c-player-item__icon c-player-item__icon--check fa fa-check" />
      ) : (
        <i className="c-player-item__icon c-player-item__icon--square fa fa-square" />
      )}
    </div>
  </div>
);
