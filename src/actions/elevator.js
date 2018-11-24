import { operateGroundFloorDoor, setGroundFloorDoorCounter } from "./groundFloorDoor";
import { operateFirstFloorDoor, setFirstFloorDoorCounter } from "./firstFloorDoor";

export function requestGroundFloor() {
  return async (dispatch, getState) => {
    if (getState().elevator.elevatorIsMovingToGround) {
    } else if (getState().elevator.elevatorIsMovingToFirst) {
      dispatch(setGoToGroundWhenPossible(true));
    } else if (getState().elevator.elevatorLocation === 0) {
      if (getState().groundFloorDoor.groundFloorDoorOpen) {
        dispatch(setGroundFloorDoorCounter(5));
      } else if (getState().groundFloorDoor.groundFloorDoorClosed) {
        await dispatch(operateGroundFloorDoor());
      } else if (getState().groundFloorDoor.groundFloorDoorClosing) {
        dispatch(setGoToGroundWhenPossible(true));
      }
    } else if (getState().elevator.elevatorLocation === 1) {
      if (
        getState().firstFloorDoor.firstFloorDoorOpen ||
        getState().firstFloorDoor.firstFloorDoorOpening ||
        getState().firstFloorDoor.firstFloorDoorClosing
      ) {
        dispatch(setGoToGroundWhenPossible(true));
      } else {
        dispatch(setElevatorIsMovingToGround(true));
      }
    }
  };
}

export function requestFirstFloor() {
  return async (dispatch, getState) => {
    if (getState().elevator.elevatorIsMovingToFirst) {
    } else if (getState().elevator.elevatorIsMovingToGround) {
      dispatch(setGoToFirstWhenPossible(true));
    } else if (getState().elevator.elevatorLocation === 1) {
      if (getState().firstFloorDoor.firstFloorDoorOpen) {
        dispatch(setFirstFloorDoorCounter(5));
      } else if (getState().firstFloorDoor.firstFloorDoorClosed) {
        await dispatch(operateFirstFloorDoor());
      } else if (getState().firstFloorDoor.firstFloorDoorClosing) {
        dispatch(setGoToFirstWhenPossible(true));
      }
    } else if (getState().elevator.elevatorLocation === 0) {
      if (
        getState().groundFloorDoor.groundFloorDoorOpen ||
        getState().groundFloorDoor.groundFloorDoorOpening ||
        getState().groundFloorDoor.groundFloorDoorClosing
      ) {
        dispatch(setGoToFirstWhenPossible(true));
      } else {
        await dispatch(setElevatorIsMovingToFirst(true));
      }
    }
  };
}

export const setGoToGroundWhenPossible = value => ({
  type: "SET_GO_TO_GROUND_WHEN_POSSIBLE",
  goToGroundWhenPossible: value
});

export const setGoToFirstWhenPossible = value => ({
  type: "SET_GO_TO_FIRST_WHEN_POSSIBLE",
  goToFirstWhenPossible: value
});

export const setElevatorLocation = location => ({
  type: "SET_ELEVATOR_LOCATION",
  elevatorLocation: location
});

export const setElevatorIsMovingToGround = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_GROUND",
  elevatorIsMovingToGround: value
});

export const setElevatorIsMovingToFirst = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_FIRST",
  elevatorIsMovingToFirst: value
});