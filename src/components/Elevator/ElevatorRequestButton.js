import React from "react";

const ElevatorRequestButton = props => (
  <div
    className="elevator-request-button-container"
    style={{ marginTop: props.marginTop + "px" }}
  >
    <div className="elevator-request-button" />
  </div>
);

export default ElevatorRequestButton;
