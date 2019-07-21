import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./clockUI.css";
import moment from "moment";

class ClockUI extends React.Component {
  state = {
    intervalId: ' ',
    clockTime: ' ',
  }
  constructor(props) {
    super(props);
  }

  getClockTime() {
    return setInterval(() => {
      const clock = document.getElementById('clockDisplay');
      const now = moment();
      const clockTime = now.format('hh:mm:ss a')
      clock.textContent = clockTime;
      this.setState({clockTime})
    }, 1000)
  };

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }

  componentDidMount(){
    const intervalId = this.getClockTime();
    this.setState({intervalId});
  }

  render() {
    return (
      <div className="clockUIContainer">
        <Sidebar />
        <div className="clockUIContent">
          <div className="clockFace">
            <p id="clockDisplay">{moment().format('hh:mm:ss a')}</p>
          </div>

          <div className="clockFormContainer">
            <form>
              <input type="button" name="bedtime" onClick={this.props.getBedTime}></input>
              <input type="button" name="waketime" onClick={this.props.getWakeTime}></input>
              <div className="checkboxContainer">
                <input type="checkbox" name="sleepquality" value="1" onClick={this.props.sleepTimeSubmitHandler}></input>
                <input type="checkbox" name="sleepquality" value="2" onClick={this.props.sleepTimeSubmitHandler}></input>
                <input type="checkbox" name="sleepquality" value="3" onClick={this.props.sleepTimeSubmitHandler}></input>
              </div>
            </form>
          </div>
          {/* <button className="bedTimeBtn" onClick={this.props.getBedTime}>
            <i className="far fa-moon" />
          </button>
          <button className="wakeupBtn" value="wakeupBtn" onClick={this.props.getWakeTime}>
            <i className="fas fa-sun" />
          </button> */}
        </div>
      </div>
    );
  }
}

export default ClockUI;
