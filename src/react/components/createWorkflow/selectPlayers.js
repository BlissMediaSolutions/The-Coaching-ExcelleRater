import React from "react";

import PlayerItem from "./playerItem";

export default ({ onSelect, selectedPlayers, players }) => (
  <div className="u-component col-lg-6">
    <div className="container-fluid">
      <div className="row">
        <h2>Select Players to assign to Workflow</h2>
      </div>
      {players.map(player => {
        const selected = selectedPlayers.includes(player.personid);
        return (
          <PlayerItem selected={selected} onSelect={onSelect} {...player} />
        );
      })}
    </div>
  </div>
);
