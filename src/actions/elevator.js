export const setElevatorLocation = location => ({
  type: "SET_ELEVATOR_LOCATION",
  elevatorLocation: location
});

export const setElevatorIsMovingToGround = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_GROUND",
  elevatorIsMovingToGround: value
});

export const setElevatorIsMovingToFirst = value => ({
  type: "SET_ELEVATOR_IS_MOVING_TO_FIRST",
  elevatorIsMovingToFirst: value
});

export const setElevatorCabinMarginTop = marginTop => ({
  type: "SET_ELEVATOR_CABIN_MARGIN_TOP",
  elevatorCabinMarginTop: marginTop
});
export const setElevatorLeftDoorMargin = marginLeft => ({
  type: "SET_ELEVATOR_LEFT_DOOR_MARGIN",
  elevatorLeftDoorMargin: marginLeft
});
export const setElevatorRightDoorMargin = marginLeft => ({
  type: "SET_ELEVATOR_RIGHT_DOOR_MARGIN",
  elevatorRightDoorMargin: marginLeft
});

export const setGroundLeftDoorMargin = marginLeft => ({
  type: "SET_GROUND_LEFT_DOOR_MARGIN",
  groundFloorLeftDoorMargin: marginLeft
});

export const setGroundRightDoorMargin = marginLeft => ({
  type: "SET_GROUND_RIGHT_DOOR_MARGIN",
  groundFloorRightDoorMargin: marginLeft
});

export const setFirstLeftDoorMargin = marginLeft => ({
  type: "SET_FIRST_LEFT_DOOR_MARGIN",
  firstFloorLeftDoorMargin: marginLeft
});

export const setFirstRightDoorMargin = marginLeft => ({
  type: "SET_FIRST_RIGHT_DOOR_MARGIN",
  firstFloorRightDoorMargin: marginLeft
});

export const startOpenElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_OPENING"
});

export const setElevatorDoorOpen = () => ({ type: "ELEVATOR_DOOR_OPEN" });

export const startClosingElevatorDoor = () => ({
  type: "ELEVATOR_DOOR_CLOSING"
});

export const setElevatorDoorClosed = () => ({ type: "ELEVATOR_DOOR_CLOSED" });

export const startOpenGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_OPENING"
});

export const startOpenFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_OPENING"
});

export const setGroundFloorDoorOpen = () => ({
  type: "GROUND_FLOOR_DOOR_OPEN"
});

export const setFirstFloorDoorOpen = () => ({
  type: "FIRST_FLOOR_DOOR_OPEN"
});

export const startClosingGroundFloorDoor = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSING"
});

export const startClosingFirstFloorDoor = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSING"
});

export const setGroundFloorDoorClosed = () => ({
  type: "GROUND_FLOOR_DOOR_CLOSED"
});

export const setFirstFloorDoorClosed = () => ({
  type: "FIRST_FLOOR_DOOR_CLOSED"
});

export const setGroundFloorDoorCounter = value => ({
  type: "SET_GROUND_FLOOR_DOOR_COUNTER",
  groundFloorDoorCounter: value
});

export const setFirstFloorDoorCounter = value => ({
  type: "SET_FIRST_FLOOR_DOOR_COUNTER",
  firstFloorDoorCounter: value
});

export const setGoToGroundWhenPossible = value => ({
  type: "SET_GO_TO_GROUND_WHEN_POSSIBLE",
  goToGroundWhenPossible: value
});

export const setGoToFirstWhenPossible = value => ({
  type: "SET_GO_TO_FIRST_WHEN_POSSIBLE",
  goToFirstWhenPossible: value
});

export function openElevatorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenElevatorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setElevatorLeftDoorMargin(
          getState().elevator.elevatorLeftDoorMargin - 1
        )
      );
      dispatch(
        setElevatorRightDoorMargin(
          getState().elevator.elevatorRightDoorMargin + 1
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
          getState().elevator.elevatorLeftDoorMargin + 1
        )
      );
      dispatch(
        setElevatorRightDoorMargin(
          getState().elevator.elevatorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setElevatorDoorClosed());
  };
}

export function openGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenGroundFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setGroundLeftDoorMargin(
          getState().elevator.groundFloorLeftDoorMargin - 1
        )
      );
      dispatch(
        setGroundRightDoorMargin(
          getState().elevator.groundFloorRightDoorMargin + 1
        )
      );
      await sleep(15);
    }
    dispatch(setGroundFloorDoorOpen());
  };
}

export function openFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startOpenFirstFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setFirstLeftDoorMargin(getState().elevator.firstFloorLeftDoorMargin - 1)
      );
      dispatch(
        setFirstRightDoorMargin(
          getState().elevator.firstFloorRightDoorMargin + 1
        )
      );
      await sleep(15);
    }
    dispatch(setFirstFloorDoorOpen());
  };
}

export function closeGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingGroundFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setGroundLeftDoorMargin(
          getState().elevator.groundFloorLeftDoorMargin + 1
        )
      );
      dispatch(
        setGroundRightDoorMargin(
          getState().elevator.groundFloorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setGroundFloorDoorClosed());
  };
}

export function closeFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(startClosingFirstFloorDoor());
    for (let i = 0; i < 60; i++) {
      dispatch(
        setFirstLeftDoorMargin(getState().elevator.firstFloorLeftDoorMargin + 1)
      );
      dispatch(
        setFirstRightDoorMargin(
          getState().elevator.firstFloorRightDoorMargin - 1
        )
      );
      await sleep(15);
    }
    dispatch(setFirstFloorDoorClosed());
  };
}

const sleep = m => new Promise(r => setTimeout(r, m));

export function operateGroundFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(openGroundFloorDoor());
    await dispatch(openElevatorDoor());
    dispatch(setGoToGroundWhenPossible(false));
    dispatch(setGroundFloorDoorCounter(5));
    for (
      let i = getState().elevator.groundFloorDoorCounter;
      i > 0;
      i = getState().elevator.groundFloorDoorCounter
    ) {
      dispatch(setGroundFloorDoorCounter(i - 1));
      await sleep(1000);
    }
    dispatch(closeElevatorDoor());
    await dispatch(closeGroundFloorDoor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());
  };
}

export function operateFirstFloorDoor() {
  return async (dispatch, getState) => {
    dispatch(openFirstFloorDoor());
    await dispatch(openElevatorDoor());
    dispatch(setGoToFirstWhenPossible(false));
    dispatch(setFirstFloorDoorCounter(5));
    for (
      let i = getState().elevator.firstFloorDoorCounter;
      i > 0;
      i = getState().elevator.firstFloorDoorCounter
    ) {
      dispatch(setFirstFloorDoorCounter(i - 1));
      await sleep(1000);
    }
    dispatch(closeElevatorDoor());
    await dispatch(closeFirstFloorDoor());

    if (getState().elevator.goToFirstWhenPossible)
      dispatch(requestFirstFloor());

    if (getState().elevator.goToGroundWhenPossible)
      dispatch(requestGroundFloor());
  };
}

export function moveElevatorToGround() {
  return async dispatch => {
    dispatch(setElevatorIsMovingToGround(true));

    for (let marginTop = 23; marginTop < 224; marginTop++) {
      dispatch(setElevatorCabinMarginTop(marginTop + "px"));
      await sleep(15);
    }

    dispatch(setElevatorIsMovingToGround(false));
    dispatch(setElevatorLocation(0));
    await dispatch(operateGroundFloorDoor());
  };
}

export function moveElevatorToFirst() {
  return async dispatch => {
    await closeGroundFloorDoor();
    dispatch(setElevatorIsMovingToFirst(true));

    for (let marginTop = 224; marginTop > 22; marginTop--) {
      dispatch(setElevatorCabinMarginTop(marginTop + "px"));
      await sleep(15);
    }

    dispatch(setElevatorIsMovingToFirst(false));
    dispatch(setElevatorLocation(1));
    await dispatch(operateFirstFloorDoor());
  };
}

export function requestGroundFloor() {
  return async (dispatch, getState) => {
    if (getState().elevator.elevatorIsMovingToGround) {
    } else if (getState().elevator.elevatorIsMovingToFirst) {
      dispatch(setGoToGroundWhenPossible(true));
    } else if (getState().elevator.elevatorLocation === 0) {
      if (getState().elevator.groundFloorDoorOpen) {
        dispatch(setGroundFloorDoorCounter(5));
      }
      if (getState().elevator.groundFloorDoorClosed) {
        await dispatch(operateGroundFloorDoor());
      }
      if (getState().elevator.groundFloorDoorClosing) {
        dispatch(setGoToGroundWhenPossible(true));
      }
    } else if (getState().elevator.elevatorLocation === 1) {
      if (
        getState().elevator.firstFloorDoorOpen ||
        getState().elevator.firstFloorDoorOpening ||
        getState().elevator.firstFloorDoorClosing
      ) {
        dispatch(setGoToGroundWhenPossible(true));
      } else {
        await dispatch(moveElevatorToGround());
      }
    }
  };
}

export function requestFirstFloor() {
  return async (dispatch, getState) => {
    if (getState().elevator.elevatorIsMovingToFirst) {
    } else if (getState().elevator.elevatorIsMovingToGround) {
      dispatch(setGoToFirstWhenPossible(true));
    } else if (getState().elevator.elevatorLocation === 1) {
      if (getState().elevator.firstFloorDoorOpen) {
        dispatch(setFirstFloorDoorCounter(5));
      }
      if (getState().elevator.firstFloorDoorClosed) {
        await dispatch(operateFirstFloorDoor());
      }
      if (getState().elevator.firstFloorDoorClosing) {
        dispatch(setGoToFirstWhenPossible(true));
      }
    } else if (getState().elevator.elevatorLocation === 0) {
      if (
        getState().elevator.groundFloorDoorOpen ||
        getState().elevator.groundFloorDoorOpening ||
        getState().elevator.groundFloorDoorClosing
      ) {
        dispatch(setGoToFirstWhenPossible(true));
      } else {
        await dispatch(moveElevatorToFirst());
      }
    }
  };
}
