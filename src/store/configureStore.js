import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import elevatorReducer from "../reducers/elevator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      elevator: elevatorReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
