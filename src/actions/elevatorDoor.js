export function openElevatorDoor() {
  return async (dispatch) => {
    dispatch(startOpenElevatorDoor());
  };
}

export function closeElevatorDoor() {
  return async (dispatch) => {
    dispatch(startClosingElevatorDoor());
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
