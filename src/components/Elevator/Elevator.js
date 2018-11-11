import React from "react";
import ElevatorGround from "./ElevatorGround";
import ElevatorCabin from "./ElevatorCabin";
import ElevatorDoor from "./ElevatorDoor";
import ElevatorRequestButton from "./ElevatorRequestButton";
import ElevatorCabinDoor from "./ElevatorCabinDoor";

const Elevator = () => (
  <div className="elevator-container">
    <ElevatorRequestButton marginTop={65} />
    <ElevatorDoor marginTop={13} />
    <ElevatorCabinDoor />
    <ElevatorCabin />
    <ElevatorGround />
    <ElevatorRequestButton marginTop={265} />
    <ElevatorDoor marginTop={213} />
  </div>
);

export default Elevator;
