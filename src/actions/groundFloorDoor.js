import { sleep } from "../helpers/delay";
import { openElevatorDoor, closeElevatorDoor } from "./elevatorDoor";
import { setGoToGroundWhenPossible, requestGroundFloor, requestFirstFloor } from "./elevator";

export const setGroundFloorDoorCounter = value => ({
  type: "SET_GROUND_FLOOR_DOOR_COUNTER",
  groundFloorDoorCounter: value
});

export function operateGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(openGroundFloorDoor());
    await dispatch(openElevatorDoor());
    dispatch(setGoToGroundWhenPossible(false));
    dispatch(setGroundFloorDoorCounter(5));
    for (
      let i = getState().groundFloorDoor.groundFloorDoorCounter;
      i > 0;
      i = getState().groundFloorDoor.groundFloorDoorCounter
    ) {
      dispatch(setGroundFloorDoorCounter(i - 1));
      await sleep(1000);
    }
    dispatch(closeElevatorDoor());
    await dispatch(closeGroundFloorDoor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());
  };
}

const setGroundLeftDoorMargin = marginLeft => ({
  type: "SET_GROUND_LEFT_DOOR_MARGIN",
  groundFloorLeftDoorMargin: marginLeft
});

const setGroundRightDoorMargin = marginLeft => ({
  type: "SET_GROUND_RIGHT_DOOR_MARGIN",
  groundFloorRightDoorMargin: marginLeft
});

const startOpenGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_OPENING"
});

const setGroundFloorDoorOpen = () => ({
  type: "GROUND_FLOOR_DOOR_OPEN"
});

const startClosingGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSING"
});

const setGroundFloorDoorClosed = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSED"
});

function openGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenGroundFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setGroundLeftDoorMargin(
          getState().groundFloorDoor.groundFloorLeftDoorMargin - 1
        )
      );
      dispatch(
        setGroundRightDoorMargin(
          getState().groundFloorDoor.groundFloorRightDoorMargin + 1
        )
      );
      await sleep(15);
    }
    dispatch(setGroundFloorDoorOpen());
  };
}

function closeGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingGroundFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setGroundLeftDoorMargin(
          getState().groundFloorDoor.groundFloorLeftDoorMargin + 1
        )
      );
      dispatch(
        setGroundRightDoorMargin(
          getState().groundFloorDoor.groundFloorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setGroundFloorDoorClosed());
  };
}