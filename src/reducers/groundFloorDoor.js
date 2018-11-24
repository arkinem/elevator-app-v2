// Ground Floor Door Reducer

const groundFloorDoorReducerDefaultState = {
  groundFloorLeftDoorMargin: 165,
  groundFloorRightDoorMargin: 235,
  groundFloorDoorOpen: false,
  groundFloorDoorOpening: false,
  groundFloorDoorClosed: true,
  groundFloorDoorClosing: false,
  groundFloorDoorCounter: 0
};

export default (state = groundFloorDoorReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_GROUND_LEFT_DOOR_MARGIN":
      return {
        ...state,
        groundFloorLeftDoorMargin: action.groundFloorLeftDoorMargin
      };
    case "SET_GROUND_RIGHT_DOOR_MARGIN":
      return {
        ...state,
        groundFloorRightDoorMargin: action.groundFloorRightDoorMargin
      };
    case "SET_GROUND_FLOOR_DOOR_COUNTER":
      return {
        ...state,
        groundFloorDoorCounter: action.groundFloorDoorCounter
      };
    case "GROUND_FLOOR_DOOR_OPENING":
      return {
        ...state,
        groundFloorDoorOpening: true,
        groundFloorDoorClosed: false
      };
    case "GROUND_FLOOR_DOOR_OPEN":
      return {
        ...state,
        groundFloorDoorOpen: true,
        groundFloorDoorOpening: false
      };
    case "GROUND_FLOOR_DOOR_CLOSING":
      return {
        ...state,
        groundFloorDoorOpen: false,
        groundFloorDoorClosing: true
      };
    case "GROUND_FLOOR_DOOR_CLOSED":
      return {
        ...state,
        groundFloorDoorClosed: true,
        groundFloorDoorClosing: false
      };
    default:
      return state;
  }
};
