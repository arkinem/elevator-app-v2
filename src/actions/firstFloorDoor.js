import { sleep } from "../helpers/delay";
import { openElevatorDoor, closeElevatorDoor } from "./elevatorDoor";
import { requestGroundFloor, requestFirstFloor, setGoToFirstWhenPossible } from "./elevator";

export function operateFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenFirstFloorDoor());
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
    dispatch(startClosingFirstFloorDoor());
    await dispatch(closeElevatorDoor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());
  };
}

export const setFirstFloorDoorCounter = value => ({
  type: "SET_FIRST_FLOOR_DOOR_COUNTER",
  firstFloorDoorCounter: value
});

export const setFirstFloorDoorOpen = () => ({
  type: "FIRST_FLOOR_DOOR_OPEN"
});

export const setFirstFloorDoorClosed = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSED"
});

const startOpenFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_OPENING"
});

const startClosingFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSING"
});



