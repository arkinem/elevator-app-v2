import React from "react";
import { connect } from "react-redux";
import { requestGroundFloor, requestFirstFloor } from "../../actions/elevator";

const ControlPanel = props => (
  <div className="control-panel">
    <div className="control-panel-display">
      <span>{props.elevatorLocation}</span>
    </div>

    <div
      className="control-panel-button"
      onClick={props.requestFirstFloor}
      style={{
        backgroundColor:
          props.goToFirstWhenPossible || props.elevatorIsMovingToFirst
            ? "rgb(255, 2, 104)"
            : "rgb(112, 0, 45)"
      }}
    >
      <span>1</span>
    </div>

    <div
      className="control-panel-button"
      onClick={props.requestGroundFloor}
      style={{
        backgroundColor:
          props.goToGroundWhenPossible || props.elevatorIsMovingToGround
            ? "rgb(255, 2, 104)"
            : "rgb(112, 0, 45)"
      }}
    >
      <span>0</span>
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  requestGroundFloor: () => dispatch(requestGroundFloor()),
  requestFirstFloor: () => dispatch(requestFirstFloor())
});

const mapStateToProps = state => ({
  elevatorLocation: state.elevator.elevatorLocation,
  goToGroundWhenPossible: state.elevator.goToGroundWhenPossible,
  elevatorIsMovingToGround: state.elevator.elevatorIsMovingToGround,
  goToFirstWhenPossible: state.elevator.goToFirstWhenPossible,
  elevatorIsMovingToFirst: state.elevator.elevatorIsMovingToFirst
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
