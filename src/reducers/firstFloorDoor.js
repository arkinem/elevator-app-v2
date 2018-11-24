// First Floor Door Reducer

const firstFloorDoorReducerDefaultState = {
  firstFloorDoorOpen: false,
  firstFloorDoorOpening: false,
  firstFloorDoorClosed: true,
  firstFloorDoorClosing: false,
  firstFloorDoorCounter: 0
};

export default (state = firstFloorDoorReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_FIRST_FLOOR_DOOR_COUNTER":
      return {
        ...state,
        firstFloorDoorCounter: action.firstFloorDoorCounter
      };
    case "FIRST_FLOOR_DOOR_OPENING":
      return {
        ...state,
        firstFloorDoorOpening: true,
        firstFloorDoorClosed: false
      };
    case "FIRST_FLOOR_DOOR_OPEN":
      return {
        ...state,
        firstFloorDoorOpen: true,
        firstFloorDoorOpening: false
      };
    case "FIRST_FLOOR_DOOR_CLOSING":
      return {
        ...state,
        firstFloorDoorClosing: true,
        firstFloorDoorOpen: false
      };
    case "FIRST_FLOOR_DOOR_CLOSED":
      return {
        ...state,
        firstFloorDoorClosed: true,
        firstFloorDoorClosing: false
      };
    default:
      return state;
  }
};
