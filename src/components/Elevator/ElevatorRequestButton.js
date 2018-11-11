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
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  requestGroundFloor: () => dispatch(requestGroundFloor()),
  requestFirstFloor: () => dispatch(requestFirstFloor())
});

export default connect(
  undefined,
  mapDispatchToProps
)(ElevatorRequestButton);
