import React from "react";

const ElevatorDoor = props => (
  <div className="elevator-door" style={{ marginTop: props.marginTop + "px" }}>
    <div className="elevator-door-unit" />
    <div className="elevator-door-unit" />
  </div>
);

export default ElevatorDoor;
