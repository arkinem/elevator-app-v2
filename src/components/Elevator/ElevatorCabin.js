import React from "react";
import { connect } from "react-redux";
import { sleep } from "../../helpers/delay";
import { operateGroundFloorDoor } from "../../actions/groundFloorDoor";
import { operateFirstFloorDoor } from "../../actions/firstFloorDoor";
import {
  setElevatorIsMovingToGround,
  setElevatorIsMovingToFirst,
  setElevatorLocation
} from "../../actions/elevator"


class ElevatorCabin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marginTop: 273
    };
  }

  async moveToGround() {
    for (let marginTop = 48; marginTop < 274; marginTop++) {
      this.setState({ marginTop: marginTop });
      await sleep(15);
    }

    this.props.setElevatorIsMovingToGround(false);
    this.props.setElevatorLocation(0);
    await this.props.operateGroundFloorDoor();
  }

  async moveToFirst() {
    for (let marginTop = 273; marginTop > 47; marginTop--) {
      this.setState({ marginTop: marginTop });
      await sleep(15);
    }
    this.props.setElevatorIsMovingToFirst(false);
    this.props.setElevatorLocation(1);
    await this.props.operateFirstFloorDoor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.elevatorIsMovingToGround !== this.props.elevatorIsMovingToGround &&
      this.props.elevatorIsMovingToGround === true) {
      this.moveToGround();
    } else if (prevProps.elevatorIsMovingToFirst !== this.props.elevatorIsMovingToFirst &&
      this.props.elevatorIsMovingToFirst === true) {
      this.moveToFirst();
    }
  }

  render() {
    return (
      <div
        className="elevator-cabin"
        style={{
          marginTop: this.state.marginTop
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setElevatorIsMovingToGround: (isMoving) => dispatch(setElevatorIsMovingToGround(isMoving)),
  setElevatorIsMovingToFirst: (isMoving) => dispatch(setElevatorIsMovingToFirst(isMoving)),
  setElevatorLocation: (location) => dispatch(setElevatorLocation(location)),
  operateGroundFloorDoor: () => dispatch(operateGroundFloorDoor()),
  operateFirstFloorDoor: () => dispatch(operateFirstFloorDoor())
});

const mapStateToProps = state => ({
  elevatorIsMovingToGround: state.elevator.elevatorIsMovingToGround,
  elevatorIsMovingToFirst: state.elevator.elevatorIsMovingToFirst
});

export default connect(mapStateToProps, mapDispatchToProps)(ElevatorCabin);
