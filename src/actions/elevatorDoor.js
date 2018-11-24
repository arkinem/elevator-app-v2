import { sleep } from "../helpers/delay";

export function openElevatorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenElevatorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setElevatorLeftDoorMargin(
          getState().elevatorDoor.elevatorLeftDoorMargin - 1
        )
      );
      dispatch(
        setElevatorRightDoorMargin(
          getState().elevatorDoor.elevatorRightDoorMargin + 1
        )
      );
      await sleep(15);
    }
    dispatch(setElevatorDoorOpen());
  };
}

export function closeElevatorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingElevatorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setElevatorLeftDoorMargin(
          getState().elevatorDoor.elevatorLeftDoorMargin + 1
        )
      );
      dispatch(
        setElevatorRightDoorMargin(
          getState().elevatorDoor.elevatorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setElevatorDoorClosed());
  };
}

const setElevatorLeftDoorMargin = marginLeft => ({
  type: "SET_ELEVATOR_LEFT_DOOR_MARGIN",
  elevatorLeftDoorMargin: marginLeft
});
const setElevatorRightDoorMargin = marginLeft => ({
  type: "SET_ELEVATOR_RIGHT_DOOR_MARGIN",
  elevatorRightDoorMargin: marginLeft
});

const startOpenElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_OPENING"
});

const setElevatorDoorOpen = () => ({
  type: "ELEVATOR_DOOR_OPEN"
});

const startClosingElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_CLOSING"
});

const setElevatorDoorClosed = () => ({
  type: "ELEVATOR_DOOR_CLOSED"
});