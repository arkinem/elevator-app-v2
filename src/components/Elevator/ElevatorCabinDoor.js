import React from "react";
import { connect } from "react-redux";

const ElevatorCabinDoor = props => (
  <div className="elevator-cabin-door">
    <div
      className="elevator-cabin-door-unit"
      style={{
        marginLeft: props.elevatorLeftDoorMargin,
        marginTop: props.elevatorCabinMarginTop
          ? props.elevatorCabinMarginTop
          : "273px"
      }}
    />
    <div
      className="elevator-cabin-door-unit"
      style={{
        marginLeft: props.elevatorRightDoorMargin,
        marginTop: props.elevatorCabinMarginTop
          ? props.elevatorCabinMarginTop
          : "273px"
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  elevatorCabinMarginTop: state.elevator.elevatorCabinMarginTop,
  elevatorLeftDoorMargin: state.elevatorDoor.elevatorLeftDoorMargin,
  elevatorRightDoorMargin: state.elevatorDoor.elevatorRightDoorMargin
});

export default connect(mapStateToProps)(ElevatorCabinDoor);
