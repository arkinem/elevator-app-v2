import React from "react";
import { connect } from "react-redux";

const ElevatorCabin = props => (
  <div
    className="elevator-cabin"
    style={{
      marginTop: props.elevatorCabinMarginTop
        ? props.elevatorCabinMarginTop
        : "273px"
    }}
  />
);

const mapStateToProps = state => ({
  elevatorCabinMarginTop: state.elevator.elevatorCabinMarginTop
});

export default connect(mapStateToProps)(ElevatorCabin);
