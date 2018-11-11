import React from "react";
import { connect } from "react-redux";

const ControlPanel = props => (
  <div className="control-panel">
    <div className="control-panel-display">
      <span>{props.elevatorLocation}</span>
    </div>

    <div className="control-panel-button">
      <span>1</span>
    </div>

    <div className="control-panel-button">
      <span>0</span>
    </div>
  </div>
);

const mapStateToProps = state => ({
  elevatorLocation: state.elevator.elevatorLocation
});

export default connect(mapStateToProps)(ControlPanel);
