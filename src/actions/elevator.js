import { sleep } from "../helpers/delay";
import { operateGroundFloorDoor, setGroundFloorDoorCounter } from "./groundFloorDoor";
import { operateFirstFloorDoor, setFirstFloorDoorCounter } from "./firstFloorDoor";


export const setGoToGroundWhenPossible = value => ({
  type: "SET_GO_TO_GROUND_WHEN_POSSIBLE",
  goToGroundWhenPossible: value
});

export const setGoToFirstWhenPossible = value => ({
  type: "SET_GO_TO_FIRST_WHEN_POSSIBLE",
  goToFirstWhenPossible: value
});

export function requestGroundFloor() {
  return async (dispatch, getState) => {
    if (getState().elevator.elevatorIsMovingToGround) {
    } else if (getState().elevator.elevatorIsMovingToFirst) {
      dispatch(setGoToGroundWhenPossible(true));
    } else if (getState().elevator.elevatorLocation === 0) {
      if (getState().groundFloorDoor.groundFloorDoorOpen) {
        dispatch(setGroundFloorDoorCounter(5));
      }
      if (getState().groundFloorDoor.groundFloorDoorClosed) {
        await dispatch(operateGroundFloorDoor());
      }
      if (getState().groundFloorDoor.groundFloorDoorClosing) {
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
        await dispatch(moveElevatorToGround());
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
      }
      if (getState().firstFloorDoor.firstFloorDoorClosed) {
        await dispatch(operateFirstFloorDoor());
      }
      if (getState().firstFloorDoor.firstFloorDoorClosing) {
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
        await dispatch(moveElevatorToFirst());
      }
    }
  };
}

const setElevatorLocation = location => ({
  type: "SET_ELEVATOR_LOCATION",
  elevatorLocation: location
});

const setElevatorIsMovingToGround = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_GROUND",
  elevatorIsMovingToGround: value
});

const setElevatorIsMovingToFirst = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_FIRST",
  elevatorIsMovingToFirst: value
});

const setElevatorCabinMarginTop = marginTop => ({
  type: "SET_ELEVATOR_CABIN_MARGIN_TOP",
  elevatorCabinMarginTop: marginTop
});

function moveElevatorToGround() {
  return async dispatch => {
    dispatch(setElevatorIsMovingToGround(true));

    for (let marginTop = 23; marginTop < 224; marginTop++) {
      dispatch(setElevatorCabinMarginTop(marginTop + "px"));
      await sleep(15);

    }

    dispatch(setElevatorIsMovingToGround(false));
    dispatch(setElevatorLocation(0));
    await dispatch(operateGroundFloorDoor());
  };
}

function moveElevatorToFirst() {
  return async dispatch => {
    dispatch(setElevatorIsMovingToFirst(true));

    for (let marginTop = 224; marginTop > 22; marginTop--) {
      dispatch(setElevatorCabinMarginTop(marginTop + "px"));
      await sleep(15);
    }

    dispatch(setElevatorIsMovingToFirst(false));
    dispatch(setElevatorLocation(1));
    await dispatch(operateFirstFloorDoor());
  };
}
