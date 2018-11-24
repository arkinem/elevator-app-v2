import React from "react";
import { connect } from "react-redux";

const FloorDisplay = props => (
  <div
    className="floorDisplay"
    style={{ marginTop: props.marginTop ? `${props.marginTop}px` : "0px" }}
  >
    <span>{props.elevatorLocation}</span>
  </div>
);

const mapStateToProps = state => ({
  elevatorLocation: state.elevator.elevatorLocation
});

export default connect(mapStateToProps)(FloorDisplay);
