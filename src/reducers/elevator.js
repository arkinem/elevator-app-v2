// Elevator Reducer

const elevatorReducerDefaultState = {
  elevatorLocation: 0,
  elevatorIsMovingToGround: false,
  elevatorIsMovingToFirst: false,
  elevatorCabinMarginTop: "223px",
  groundFloorLeftDoorMargin: 165,
  groundFloorRightDoorMargin: 235,
  firstFloorLeftDoorMargin: 165,
  firstFloorRightDoorMargin: 235,
  elevatorLeftDoorMargin: 0,
  elevatorRightDoorMargin: 60,
  elevatorDoorOpen: false,
  elevatorDoorOpening: false,
  elevatorDoorClosed: true,
  elevatorDoorClosing: false,
  groundFloorDoorOpen: false,
  groundFloorDoorOpening: false,
  groundFloorDoorClosed: true,
  groundFloorDoorClosing: false,
  firstFloorDoorOpen: false,
  firstFloorDoorOpening: false,
  firstFloorDoorClosed: true,
  firstFloorDoorClosing: false,
  groundFloorDoorCounter: 0,
  firstFloorDoorCounter: 0,
  goToGroundWhenPossible: false,
  goToFirstWhenPossible: false
};

export default (state = elevatorReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ELEVATOR_LOCATION":
      return { ...state, elevatorLocation: action.elevatorLocation };
    case "SET_ELEVATOR_IS_MOVING_TO_GROUND":
      return {
        ...state,
        elevatorIsMovingToGround: action.elevatorIsMovingToGround
      };
    case "SET_ELEVATOR_IS_MOVING_TO_FIRST":
      return {
        ...state,
        elevatorIsMovingToFirst: action.elevatorIsMovingToFirst
      };
    case "SET_ELEVATOR_LOCATION":
      return { ...state, elevatorLocation: action.elevatorLocation };
    case "SET_ELEVATOR_CABIN_MARGIN_TOP":
      return {
        ...state,
        elevatorCabinMarginTop: action.elevatorCabinMarginTop
      };
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
    case "SET_FIRST_LEFT_DOOR_MARGIN":
      return {
        ...state,
        firstFloorLeftDoorMargin: action.firstFloorLeftDoorMargin
      };
    case "SET_FIRST_RIGHT_DOOR_MARGIN":
      return {
        ...state,
        firstFloorRightDoorMargin: action.firstFloorRightDoorMargin
      };
    case "SET_GROUND_FLOOR_DOOR_COUNTER":
      return {
        ...state,
        groundFloorDoorCounter: action.groundFloorDoorCounter
      };
    case "SET_FIRST_FLOOR_DOOR_COUNTER":
      return { ...state, firstFloorDoorCounter: action.firstFloorDoorCounter };
    case "SET_GO_TO_GROUND_WHEN_POSSIBLE":
      return {
        ...state,
        goToGroundWhenPossible: action.goToGroundWhenPossible
      };
    case "SET_GO_TO_FIRST_WHEN_POSSIBLE":
      return { ...state, goToFirstWhenPossible: action.goToFirstWhenPossible };
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
