import React from "react";
import { connect } from "react-redux";
import { sleep } from "../../helpers/delay";
import { setElevatorDoorOpen, setElevatorDoorClosed } from "../../actions/elevatorDoor";


class ElevatorCabinDoor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marginTop: 273,
      leftDoorMargin: 0,
      rightDoorMargin: 60
    };
  }

  async openDoor() {
    for (let i = 0; i < 60; i++) {
      this.setState((prevState) => {
        return {
          leftDoorMargin: prevState.leftDoorMargin - 1,
          rightDoorMargin: prevState.rightDoorMargin + 1
        }
      });
      await sleep(15);
    }
    this.props.setElevatorDoorOpen();
  }

  async closeDoor() {
    for (let i = 0; i < 60; i++) {
      this.setState((prevState) => {
        return {
          leftDoorMargin: prevState.leftDoorMargin + 1,
          rightDoorMargin: prevState.rightDoorMargin - 1
        }
      });
      await sleep(15);
    }
    this.props.setElevatorDoorClosed();
  }

  async moveToGround() {
    for (let marginTop = 48; marginTop < 274; marginTop++) {
      this.setState({ marginTop: marginTop });
      await sleep(15);
    }
  }

  async moveToFirst() {
    for (let marginTop = 273; marginTop > 47; marginTop--) {
      this.setState({ marginTop: marginTop });
      await sleep(15);
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps.elevatorDoorOpening !== this.props.elevatorDoorOpening &&
      this.props.elevatorDoorOpening === true) {
      this.openDoor();
    } else if (prevProps.elevatorDoorClosing !== this.props.elevatorDoorClosing &&
      this.props.elevatorDoorClosing === true) {
      this.closeDoor();
    } else if (prevProps.elevatorIsMovingToGround !== this.props.elevatorIsMovingToGround &&
      this.props.elevatorIsMovingToGround === true) {
      this.moveToGround();
    } else if (prevProps.elevatorIsMovingToFirst !== this.props.elevatorIsMovingToFirst &&
      this.props.elevatorIsMovingToFirst === true) {
      this.moveToFirst();
    }
  }

  render() {
    return (
      <div className="elevator-cabin-door">
        <div
          className="elevator-cabin-door-unit"
          style={{
            marginLeft: this.state.leftDoorMargin,
            marginTop: this.state.marginTop
          }}
        />
        <div
          className="elevator-cabin-door-unit"
          style={{
            marginLeft: this.state.rightDoorMargin,
            marginTop: this.state.marginTop
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setElevatorDoorOpen: () => dispatch(setElevatorDoorOpen()),
  setElevatorDoorClosed: () => dispatch(setElevatorDoorClosed())
});

const mapStateToProps = state => ({
  elevatorIsMovingToGround: state.elevator.elevatorIsMovingToGround,
  elevatorIsMovingToFirst: state.elevator.elevatorIsMovingToFirst,
  elevatorDoorOpening: state.elevatorDoor.elevatorDoorOpening,
  elevatorDoorClosing: state.elevatorDoor.elevatorDoorClosing
});

export default connect(mapStateToProps, mapDispatchToProps)(ElevatorCabinDoor);
