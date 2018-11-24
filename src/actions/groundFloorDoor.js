import { sleep } from "../helpers/delay";
import { openElevatorDoor, closeElevatorDoor } from "./elevatorDoor";
import { setGoToGroundWhenPossible, requestGroundFloor, requestFirstFloor } from "./elevator";

export function operateGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenGroundFloorDoor());
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
    dispatch(startClosingGroundFloorDoor());
    await dispatch(closeElevatorDoor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());
  };
}

export const setGroundFloorDoorCounter = value => ({
  type: "SET_GROUND_FLOOR_DOOR_COUNTER",
  groundFloorDoorCounter: value
});

export const setGroundFloorDoorOpen = () => ({
  type: "GROUND_FLOOR_DOOR_OPEN"
});

export const setGroundFloorDoorClosed = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSED"
});

const startClosingGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSING"
});

const startOpenGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_OPENING"
});