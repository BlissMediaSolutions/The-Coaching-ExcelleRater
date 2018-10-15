import React from "react";

import PlayerItem from "./playerItem";

export default ({
  onSelect,
  selectedPlayers,
  players,
  onSave,
  onGoBackClick
}) => (
  <div className="u-component">
    <div className="container-fluid">
      <div className="row">
        <h2>Select Players to assign to Workflow</h2>
      </div>
      {players.map((player, index) => {
        const selected = selectedPlayers.includes(player.personid);
        return (
          <PlayerItem
            key={index}
            selected={selected}
            onSelect={onSelect}
            {...player}
          />
        );
      })}
      <div className="row justify-content-between mt-5">
        <div className="btn btn-secondary col-4" onClick={onGoBackClick}>
          Go Back
        </div>
        <div className="btn btn-success col-4" onClick={onSave}>
          Name & Finish Workflow
        </div>
      </div>
    </div>
  </div>
);
