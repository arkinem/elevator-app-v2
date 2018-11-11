import React from "react";

const ElevatorDoorUnit = props => (
  <div
    className="elevator-door-unit"
    style={{
      marginLeft: props.marginLeft + "px",
      marginTop: props.marginTop + "px"
    }}
  />
);

export default ElevatorDoorUnit;
