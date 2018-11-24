// Elevator Door Reducer

const elevatorDoorReducerDefaultState = {
  elevatorDoorOpen: false,
  elevatorDoorOpening: false,
  elevatorDoorClosed: true,
  elevatorDoorClosing: false
};

export default (state = elevatorDoorReducerDefaultState, action) => {
  switch (action.type) {
    case "ELEVATOR_DOOR_OPENING":
      return {
        ...state,
        elevatorDoorOpening: true,
        elevatorDoorClosed: false
      };
    case "ELEVATOR_DOOR_OPEN":
      return {
        ...state,
        elevatorDoorOpen: true,
        elevatorDoorOpening: false
      };
    case "ELEVATOR_DOOR_CLOSING":
      return {
        ...state,
        elevatorDoorOpen: false,
        elevatorDoorClosing: true
      };
    case "ELEVATOR_DOOR_CLOSED":
      return {
        ...state,
        elevatorDoorClosed: true,
        elevatorDoorClosing: false
      };
    default:
      return state;
  }
};
