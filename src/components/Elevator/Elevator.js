import React from "react";
import { connect } from "react-redux";
import ElevatorGround from "./ElevatorGround";
import ElevatorCabin from "./ElevatorCabin";
import ElevatorDoorUnit from "./ElevatorDoorUnit";
import ElevatorRequestButton from "./ElevatorRequestButton";
import ElevatorCabinDoor from "./ElevatorCabinDoor";

const Elevator = props => (
  <div className="elevator-container">
    <ElevatorRequestButton floor={1} marginTop={65} />
    <ElevatorDoorUnit
      marginTop={13}
      marginLeft={props.firstFloorLeftDoorMargin}
    />
    <ElevatorDoorUnit
      marginTop={13}
      marginLeft={props.firstFloorRightDoorMargin}
    />
    <ElevatorCabinDoor />
    <ElevatorCabin />
    <ElevatorGround />
    <ElevatorRequestButton floor={0} marginTop={265} />
    <ElevatorDoorUnit
      marginTop={213}
      marginLeft={props.groundFloorLeftDoorMargin}
    />
    <ElevatorDoorUnit
      marginTop={213}
      marginLeft={props.groundFloorRightDoorMargin}
    />
  </div>
);

const mapStateToProps = state => ({
  elevatorCabinMarginTop: state.elevator.elevatorCabinMarginTop,
  groundFloorLeftDoorMargin: state.elevator.groundFloorLeftDoorMargin,
  groundFloorRightDoorMargin: state.elevator.groundFloorRightDoorMargin,
  firstFloorLeftDoorMargin: state.elevator.firstFloorLeftDoorMargin,
  firstFloorRightDoorMargin: state.elevator.firstFloorRightDoorMargin
});

export default connect(mapStateToProps)(Elevator);
