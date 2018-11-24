import React from "react";
import { connect } from "react-redux";
import { sleep } from "../../helpers/delay";
import { setGroundFloorDoorOpen, setGroundFloorDoorClosed } from "../../actions/groundFloorDoor";
import { setFirstFloorDoorOpen, setFirstFloorDoorClosed } from "../../actions/firstFloorDoor";


class ElevatorDoorUnit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marginLeft: this.props.type === "left" ? 165 : 235
    };
  }

  async openDoorUnit() {
    for (let i = 0; i < 60; i++) {
      if (this.props.type === "left") {
        this.setState((prevState) => { return { marginLeft: prevState.marginLeft - 1 } });
      } else {
        this.setState((prevState) => ({ marginLeft: prevState.marginLeft + 1 }));
      }
      await sleep(15);
    }

    if (this.props.floor === 0 && !this.props.groundFloorDoorOpen)
      this.props.setGroundFloorDoorOpen();
    else if (this.props.floor === 1 && !this.props.firstFloorDoorOpen)
      this.props.setFirstFloorDoorOpen();
  }

  async closeDoorUnit() {
    for (let i = 0; i < 60; i++) {
      if (this.props.type === "left") {
        this.setState((prevState) => ({ marginLeft: prevState.marginLeft + 1 }));
      } else {
        this.setState((prevState) => ({ marginLeft: prevState.marginLeft - 1 }));
      }
      await sleep(15);
    }

    if (this.props.floor === 0 && !this.props.groundFloorDoorClosed)
      this.props.setGroundFloorDoorClosed();
    else if (this.props.floor === 1 && !this.props.firstFloorDoorClosed)
      this.props.setFirstFloorDoorClosed();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.groundFloorDoorOpening !== this.props.groundFloorDoorOpening &&
      this.props.groundFloorDoorOpening === true &&
      this.props.floor === 0) {
      this.openDoorUnit();
    } else if (prevProps.groundFloorDoorClosing !== this.props.groundFloorDoorClosing &&
      this.props.groundFloorDoorClosing === true &&
      this.props.floor === 0) {
      this.closeDoorUnit();
    } else if (prevProps.firstFloorDoorOpening !== this.props.firstFloorDoorOpening &&
      this.props.firstFloorDoorOpening === true &&
      this.props.floor === 1) {
      this.openDoorUnit();
    } else if (prevProps.firstFloorDoorClosing !== this.props.firstFloorDoorClosing &&
      this.props.firstFloorDoorClosing === true &&
      this.props.floor === 1) {
      this.closeDoorUnit();
    }
  }

  render() {
    return (
      <div
        className="elevator-door-unit"
        style={{
          marginLeft: this.state.marginLeft,
          marginTop: this.props.floor === 1 ? 38 : 263
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setGroundFloorDoorOpen: () => dispatch(setGroundFloorDoorOpen()),
  setGroundFloorDoorClosed: () => dispatch(setGroundFloorDoorClosed()),
  setFirstFloorDoorOpen: () => dispatch(setFirstFloorDoorOpen()),
  setFirstFloorDoorClosed: () => dispatch(setFirstFloorDoorClosed())
});

const mapStateToProps = state => ({
  groundFloorDoorOpening: state.groundFloorDoor.groundFloorDoorOpening,
  groundFloorDoorOpen: state.groundFloorDoor.groundFloorDoorOpen,
  groundFloorDoorClosing: state.groundFloorDoor.groundFloorDoorClosing,
  groundFloorDoorClosed: state.groundFloorDoor.groundFloorDoorClosed,
  firstFloorDoorOpening: state.firstFloorDoor.firstFloorDoorOpening,
  firstFloorDoorOpen: state.groundFloorDoor.groundFloorDoorOpen,
  firstFloorDoorClosing: state.firstFloorDoor.firstFloorDoorClosing,
  firstFloorDoorClosed: state.groundFloorDoor.groundFloorDoorOpen
});


export default connect(mapStateToProps, mapDispatchToProps)(ElevatorDoorUnit);
