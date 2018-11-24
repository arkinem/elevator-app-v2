// Elevator Door Reducer

const elevatorDoorReducerDefaultState = {
  elevatorLeftDoorMargin: 0,
  elevatorRightDoorMargin: 60,
  elevatorDoorOpen: false,
  elevatorDoorOpening: false,
  elevatorDoorClosed: true,
  elevatorDoorClosing: false
};

export default (state = elevatorDoorReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ELEVATOR_LEFT_DOOR_MARGIN":
      return {
        ...state,
        elevatorLeftDoorMargin: action.elevatorLeftDoorMargin
      };
    case "SET_ELEVATOR_RIGHT_DOOR_MARGIN":
      return {
        ...state,
        elevatorRightDoorMargin: action.elevatorRightDoorMargin
      };
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
