import { sleep } from "../helpers/delay";

export function openElevatorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenElevatorDoor());
    while (!getState().elevatorDoor.elevatorDoorOpen)
      await sleep(150);
  };
}

export function closeElevatorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingElevatorDoor());
    while (!getState().elevatorDoor.elevatorDoorClosed)
      await sleep(150);
  };
}

export const setElevatorDoorOpen = () => ({
  type: "ELEVATOR_DOOR_OPEN"
});

export const setElevatorDoorClosed = () => ({
  type: "ELEVATOR_DOOR_CLOSED"
});

const startOpenElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_OPENING"
});

const startClosingElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_CLOSING"
});
