import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import elevatorReducer from "../reducers/elevator";
import elevatorDoorReducer from "../reducers/elevatorDoor";
import groundFloorDoorReducer from "../reducers/groundFloorDoor";
import firstFloorDoorReducer from "../reducers/firstFloorDoor";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      elevator: elevatorReducer,
      elevatorDoor: elevatorDoorReducer,
      groundFloorDoor: groundFloorDoorReducer,
      firstFloorDoor: firstFloorDoorReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
