import React from "react";
import { connect } from "react-redux";
import { requestGroundFloor, requestFirstFloor } from "../../actions/elevator";

const ElevatorRequestButton = props => (
  <div
    className="elevator-request-button-container"
    style={{ marginTop: props.marginTop + "px" }}
  >
    <div
      className="elevator-request-button"
      onClick={() => {
        props.floor === 0
          ? props.requestGroundFloor()
          : props.requestFirstFloor();
      }}
      style={{
        backgroundColor:
          props.floor === 0
            ? props.goToGroundWhenPossible || props.elevatorIsMovingToGround
              ? "rgb(255, 2, 104)"
              : "rgb(112, 0, 45)"
            : props.goToFirstWhenPossible || props.elevatorIsMovingToFirst
            ? "rgb(255, 2, 104)"
            : "rgb(112, 0, 45)"
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  requestGroundFloor: () => dispatch(requestGroundFloor()),
  requestFirstFloor: () => dispatch(requestFirstFloor())
});

const mapStateToProps = state => ({
  goToGroundWhenPossible: state.elevator.goToGroundWhenPossible,
  elevatorIsMovingToGround: state.elevator.elevatorIsMovingToGround,
  goToFirstWhenPossible: state.elevator.goToFirstWhenPossible,
  elevatorIsMovingToFirst: state.elevator.elevatorIsMovingToFirst
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElevatorRequestButton);
