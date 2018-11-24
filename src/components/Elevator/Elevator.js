import React from "react";
import { connect } from "react-redux";
import ElevatorGround from "./ElevatorGround";
import ElevatorCabin from "./ElevatorCabin";
import ElevatorDoorUnit from "./ElevatorDoorUnit";
import ElevatorRequestButton from "./ElevatorRequestButton";
import ElevatorCabinDoor from "./ElevatorCabinDoor";
import FloorDisplay from "./FloorDisplay";

const Elevator = props => (
  <div className="elevator-container">
    <ElevatorRequestButton floor={1} marginTop={90} />
    <FloorDisplay marginTop={12} />
    <ElevatorDoorUnit
      floor={1}
      type={"left"}
      marginLeft={props.firstFloorLeftDoorMargin}
    />
    <ElevatorDoorUnit
      floor={1}
      type={"right"}
      marginLeft={props.firstFloorRightDoorMargin}
    />
    <ElevatorCabinDoor />
    <ElevatorCabin />

    <ElevatorGround />

    <ElevatorRequestButton floor={0} marginTop={315} />
    <FloorDisplay marginTop={237} />
    <ElevatorDoorUnit
      floor={0}
      type={"left"}
      marginLeft={props.groundFloorLeftDoorMargin}
    />
    <ElevatorDoorUnit
      floor={0}
      type={"right"}
      marginLeft={props.groundFloorRightDoorMargin}
    />
  </div>
);

const mapStateToProps = state => ({
  elevatorCabinMarginTop: state.elevator.elevatorCabinMarginTop,
  groundFloorLeftDoorMargin: state.groundFloorDoor.groundFloorLeftDoorMargin,
  groundFloorRightDoorMargin: state.groundFloorDoor.groundFloorRightDoorMargin,
  firstFloorLeftDoorMargin: state.firstFloorDoor.firstFloorLeftDoorMargin,
  firstFloorRightDoorMargin: state.firstFloorDoor.firstFloorRightDoorMargin
});

export default connect(mapStateToProps)(Elevator);
