// Elevator Reducer

const elevatorReducerDefaultState = {
  elevatorLocation: 0,
  elevatorIsMovingToGround: false,
  elevatorIsMovingToFirst: false,
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
    case "SET_GO_TO_GROUND_WHEN_POSSIBLE":
      return {
        ...state,
        goToGroundWhenPossible: action.goToGroundWhenPossible
      };
    case "SET_GO_TO_FIRST_WHEN_POSSIBLE":
      return {
        ...state,
        goToFirstWhenPossible: action.goToFirstWhenPossible
      };
    default:
      return state;
  }
};
