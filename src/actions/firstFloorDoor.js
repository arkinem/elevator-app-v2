import { sleep } from "../helpers/delay";
import { openElevatorDoor, closeElevatorDoor } from "./elevatorDoor";
import { requestGroundFloor, requestFirstFloor, setGoToFirstWhenPossible } from "./elevator";

export const setFirstFloorDoorCounter = value => ({
  type: "SET_FIRST_FLOOR_DOOR_COUNTER",
  firstFloorDoorCounter: value
});

export function operateFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(openFirstFloorDoor());
    await dispatch(openElevatorDoor());
    dispatch(setGoToFirstWhenPossible(false));
    dispatch(setFirstFloorDoorCounter(5));
    for (
      let i = getState().firstFloorDoor.firstFloorDoorCounter;
      i > 0;
      i = getState().firstFloorDoor.firstFloorDoorCounter
    ) {
      dispatch(setFirstFloorDoorCounter(i - 1));
      await sleep(1000);
    }
    dispatch(closeElevatorDoor());
    await dispatch(closeFirstFloorDoor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());
  };
}

const setFirstLeftDoorMargin = marginLeft => ({
  type: "SET_FIRST_LEFT_DOOR_MARGIN",
  firstFloorLeftDoorMargin: marginLeft
});

const setFirstRightDoorMargin = marginLeft => ({
  type: "SET_FIRST_RIGHT_DOOR_MARGIN",
  firstFloorRightDoorMargin: marginLeft
});

const startOpenFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_OPENING"
});

const setFirstFloorDoorOpen = () => ({
  type: "FIRST_FLOOR_DOOR_OPEN"
});

const startClosingFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSING"
});

const setFirstFloorDoorClosed = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSED"
});

function openFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenFirstFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setFirstLeftDoorMargin(getState().firstFloorDoor.firstFloorLeftDoorMargin - 1)
      );
      dispatch(
        setFirstRightDoorMargin(
          getState().firstFloorDoor.firstFloorRightDoorMargin + 1
        )
      );
      await sleep(15);
    }
    dispatch(setFirstFloorDoorOpen());
  };
}

function closeFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingFirstFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setFirstLeftDoorMargin(getState().firstFloorDoor.firstFloorLeftDoorMargin + 1)
      );
      dispatch(
        setFirstRightDoorMargin(
          getState().firstFloorDoor.firstFloorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setFirstFloorDoorClosed());
  };
}



